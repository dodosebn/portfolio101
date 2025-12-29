import supabase from '@/lib/supabase'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
export const Route = createFileRoute('/admin')({
  component: RouteComponent,
})

type Visitor = {
  id: string
  city: string
  region: string
  country: string
  visited_at: string
}

function RouteComponent() {
  const [visitors, setVisitors] = useState<Visitor[]>([])
  const [loading, setLoading] = useState(true)

  // Fetch visitors from Supabase
  const fetchVisitors = async () => {
    const { data, error } = await supabase
      .from('visitor_locations')
      .select('*')
      .order('visited_at', { ascending: false })

    if (error) {
      console.error('Error fetching visitors:', error)
    } else {
      setVisitors(data ?? [])
    }

    setLoading(false)
  }

  const saveVisit = async () => {
    try {
      const response = await fetch('https://ipinfo.io/json?token=5c6ea39b920f38')
      const location = await response.json()

      const { error } = await supabase.from('visitor_locations').insert({
        city: location.city,
        region: location.region,
        country: location.country,
      })

      if (error) throw error

      fetchVisitors()
    } catch (err) {
      console.error('Error saving visit:', err)
    }
  }

  useEffect(() => {
    saveVisit()
  }, [])

  return (
    <div className="pt-60">
      <p>Hello "/admin"!</p>

      <div>
        {loading ? (
          <p>Loading visitors...</p>
        ) : (
          <ul>
            {visitors.map(v => (
              <li key={v.id} className="capitalize">
                {v.city}, {v.region}, {v.country}
                <span className="ml-2 text-sm text-gray-400">
                  {new Date(v.visited_at).toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
