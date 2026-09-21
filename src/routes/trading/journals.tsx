import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useMemo, useState } from 'react'
import supabase from '#/lib/supabase'

export const Route = createFileRoute('/trading/journals')({
  component: RouteComponent,
})

type JournalEntry = {
  id: string
  entry_date: string
  pair: string
  entry_price: number
  closing_price: number
  pnl: number
  reason: string | null
  result: 'Win' | 'Loss'
  screenshot_url: string | null
}

const emptyForm = {
  entry_date: '',
  pair: '',
  entry_price: '',
  closing_price: '',
  pnl: '',
  reason: '',
  result: 'Win' as 'Win' | 'Loss',
}

function getMonthRange(monthOffset: number) {
  const now = new Date()
  const start = new Date(now.getFullYear(), now.getMonth() - monthOffset, 1)
  const end = new Date(now.getFullYear(), now.getMonth() - monthOffset + 1, 1)
  return { start, end }
}

function RouteComponent() {
  const [form, setForm] = useState(emptyForm)
  const [screenshotFile, setScreenshotFile] = useState<File | null>(null)
  const [entries, setEntries] = useState<JournalEntry[]>([])
  const [loading, setLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [monthOffset, setMonthOffset] = useState(0)
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const { start, end } = useMemo(() => getMonthRange(monthOffset), [monthOffset])
  const monthLabel = start.toLocaleDateString(undefined, { month: 'long', year: 'numeric' })

  async function fetchEntries() {
    setLoading(true)
    setError(null)
    const { data, error } = await supabase
      .from('trading_journals')
      .select('*')
      .gte('entry_date', start.toISOString())
      .lt('entry_date', end.toISOString())
      .order('entry_date', { ascending: false })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    setEntries(data as JournalEntry[])
    setLoading(false)
  }

  useEffect(() => {
    fetchEntries()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [monthOffset])

  function updateField(field: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setSubmitting(true)

    let screenshot_url: string | null = null

    if (screenshotFile) {
      const ext = screenshotFile.name.split('.').pop()
      const path = `${crypto.randomUUID()}.${ext}`

      const { error: uploadError } = await supabase.storage
        .from('journal-screenshots')
        .upload(path, screenshotFile)

      if (uploadError) {
        setError(`Screenshot upload failed: ${uploadError.message}`)
        setSubmitting(false)
        return
      }

      const { data: publicUrl } = supabase.storage
        .from('journal-screenshots')
        .getPublicUrl(path)

      screenshot_url = publicUrl.publicUrl
    }

    const { error } = await supabase.from('trading_journals').insert({
      entry_date: form.entry_date || new Date().toISOString(),
      pair: form.pair,
      entry_price: Number(form.entry_price),
      closing_price: Number(form.closing_price),
      pnl: Number(form.pnl),
      reason: form.reason,
      result: form.result,
      screenshot_url,
    })

    if (error) {
      setError(error.message)
      setSubmitting(false)
      return
    }

    setForm(emptyForm)
    setScreenshotFile(null)
    setSubmitting(false)
    fetchEntries()
  }

  const wins = entries.filter((e) => e.result === 'Win').length
  const losses = entries.filter((e) => e.result === 'Loss').length

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 pb-20">
      <div className="max-w-5xl mx-auto px-6 pt-10">
        {/* Header */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h1 className="text-5xl font-bold tracking-tight">Trading Journal</h1>
            <p className="text-zinc-500 mt-1">Discipline. Review. Improve.</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-zinc-500">Viewing</p>
            <p className="text-xl font-semibold text-emerald-400">{monthLabel}</p>
          </div>
        </div>

        {/* New Entry Form */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6">New Journal Entry</h2>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm text-zinc-400 mb-1.5">Date & Time</label>
              <input
                type="datetime-local"
                value={form.entry_date}
                onChange={(e) => updateField('entry_date', e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-1.5">Pair</label>
              <input
                type="text"
                value={form.pair}
                onChange={(e) => updateField('pair', e.target.value)}
                required
                className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500"
                placeholder="EURUSD"
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-1.5">Entry Price</label>
              <input
                type="number"
                step="any"
                value={form.entry_price}
                onChange={(e) => updateField('entry_price', e.target.value)}
                required
                className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-1.5">Closing Price</label>
              <input
                type="number"
                step="any"
                value={form.closing_price}
                onChange={(e) => updateField('closing_price', e.target.value)}
                required
                className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-1.5">P&L ($)</label>
              <input
                type="number"
                step="any"
                value={form.pnl}
                onChange={(e) => updateField('pnl', e.target.value)}
                required
                className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm text-zinc-400 mb-1.5">Reason / Notes</label>
              <input
                type="text"
                value={form.reason}
                onChange={(e) => updateField('reason', e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500"
                placeholder="What went right or wrong?"
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-1.5">Screenshot</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setScreenshotFile(e.target.files?.[0] ?? null)}
                className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-zinc-800 file:text-zinc-300"
              />
            </div>

            <div>
              <label className="block text-sm text-zinc-400 mb-1.5">Result</label>
              <select
                value={form.result}
                onChange={(e) => updateField('result', e.target.value as 'Win' | 'Loss')}
                className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500"
              >
                <option value="Win">Win</option>
                <option value="Loss">Loss</option>
              </select>
            </div>

            {error && <p className="text-red-400 col-span-full">{error}</p>}

            <button
              type="submit"
              disabled={submitting}
              className="md:col-span-2 mt-4 bg-emerald-600 hover:bg-emerald-500 disabled:bg-zinc-700 transition-colors font-semibold py-4 rounded-2xl text-lg"
            >
              {submitting ? 'Saving Entry...' : 'Save Journal Entry'}
            </button>
          </form>
        </div>

        {/* Metrics */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Performance — {monthLabel}</h2>
          {loading ? (
            <p className="text-zinc-500">Loading...</p>
          ) : entries.length === 0 ? (
            <p className="text-zinc-500">No entries for this month.</p>
          ) : (
            <WinLossPieChart wins={wins} losses={losses} />
          )}
        </section>

        {/* Journal Entries */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Review — {monthLabel}</h2>
          {loading ? (
            <p className="text-zinc-500">Loading...</p>
          ) : entries.length === 0 ? (
            <p className="text-zinc-500">Nothing to review yet.</p>
          ) : (
            <div className="space-y-4">
              {entries.map((entry) => (
                <div
                  key={entry.id}
                  className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden"
                >
                  <div
                    className="px-6 py-5 flex items-center justify-between cursor-pointer hover:bg-zinc-800/50 transition-colors"
                    onClick={() => setExpandedId(expandedId === entry.id ? null : entry.id)}
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-lg font-semibold">{entry.pair}</span>
                      <span className="text-zinc-500 text-sm">
                        {new Date(entry.entry_date).toLocaleDateString()}
                      </span>
                      <span
                        className={`font-semibold px-3 py-0.5 rounded-full text-sm ${
                          entry.result === 'Win'
                            ? 'bg-emerald-500/10 text-emerald-400'
                            : 'bg-red-500/10 text-red-400'
                        }`}
                      >
                        {entry.result}
                      </span>
                    </div>

                    <div className="flex items-center gap-6">
                      <span className={`font-semibold ${entry.pnl >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                        {entry.pnl >= 0 ? '+' : ''}${entry.pnl}
                      </span>
                      <span className="text-xl">{expandedId === entry.id ? '▲' : '▼'}</span>
                    </div>
                  </div>

                  {expandedId === entry.id && (
                    <div className="px-6 pb-6 pt-2 border-t border-zinc-800 text-zinc-300">
                      <div className="grid grid-cols-2 gap-6 text-sm">
                        <p><span className="text-zinc-500">Entry:</span> {entry.entry_price}</p>
                        <p><span className="text-zinc-500">Close:</span> {entry.closing_price}</p>
                      </div>
                      {entry.reason && (
                        <p className="mt-4"><span className="text-zinc-500">Reason:</span> {entry.reason}</p>
                      )}
                      {entry.screenshot_url && (
                        <img
                          src={entry.screenshot_url}
                          alt="Chart screenshot"
                          className="mt-6 rounded-xl border border-zinc-700 max-w-full"
                        />
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Month Navigation */}
        <div className="flex gap-4 mt-12">
          <button
            onClick={() => setMonthOffset((m) => m + 1)}
            className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-2xl transition-colors"
          >
            ← Previous Month
          </button>
          {monthOffset > 0 && (
            <button
              onClick={() => setMonthOffset((m) => m - 1)}
              className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-2xl transition-colors"
            >
              Next Month →
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

function WinLossPieChart({ wins, losses }: { wins: number; losses: number }) {
  const total = wins + losses
  if (total === 0) return null

  const winRatio = wins / total
  const radius = 80
  const circumference = 2 * Math.PI * radius
  const winLength = circumference * winRatio

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 flex items-center gap-10">
      <svg width="220" height="220" viewBox="0 0 200 200">
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="transparent"
          stroke="#27272a"
          strokeWidth="35"
        />
        <circle
          cx="100"
          cy="100"
          r={radius}
          fill="transparent"
          stroke="#22c55e"
          strokeWidth="35"
          strokeDasharray={`${winLength} ${circumference}`}
          strokeLinecap="round"
          transform="rotate(-90 100 100)"
        />
      </svg>

      <div className="space-y-4">
        <div className="flex items-center gap-4 text-lg">
          <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
          <span>Wins: <strong className="text-emerald-400">{wins}</strong></span>
        </div>
        <div className="flex items-center gap-4 text-lg">
          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
          <span>Losses: <strong className="text-red-400">{losses}</strong></span>
        </div>
        <p className="text-3xl font-bold text-white pt-4">
          {Math.round(winRatio * 100)}% <span className="text-base font-normal text-zinc-500">win rate</span>
        </p>
      </div>
    </div>
  )
}
