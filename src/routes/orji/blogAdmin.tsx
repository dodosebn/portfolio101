import BlogAdmin from '#/Blog/admin/blogAdmin'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/orji/blogAdmin')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <BlogAdmin />
  </div>
}
