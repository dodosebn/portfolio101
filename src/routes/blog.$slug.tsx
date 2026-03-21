import BlogBody from '#/Blog/blogBody'
import { createFileRoute, useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/$slug')({
  component: RouteComponent,
})

function RouteComponent() {
  const { slug } = Route.useParams() as { slug: string }
  const navigate = useNavigate()

  return (
    <div className="mt-5 p-4">
      <BlogBody slug={slug} onBack={() => navigate({ to: '/blog' })} />
    </div>
  )
}