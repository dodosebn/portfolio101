import ContactMe from '@/HireMe/contactMe'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/HireMe' as any)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="py-1 p-4 lg:px-16">
      <ContactMe />
    </div>
  )
}