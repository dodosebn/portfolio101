import BlogPreview from '#/Blog/blogPreview'
import { createFileRoute, useNavigate } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()

  return (
    <div className="mt-5 p-4">
      <BlogPreview onSelect={(slug) => navigate({ to: '/blog/$slug', params: { slug } })} />
    </div>
  )
}