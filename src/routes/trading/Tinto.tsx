import { TradingHomePage } from '#/trading'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/trading/Tinto')({
  component: RouteComponent,
  beforeLoad: () => ({ hideGlobalLayout: true }),
})

function RouteComponent() {
  return <div>
    <TradingHomePage />
  </div>
}
