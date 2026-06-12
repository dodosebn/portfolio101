import BlogBody from '#/Blog/blogBody'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import supabase from '#/lib/supabase'

export const Route = createFileRoute('/blog/$slug')({
  loader: async ({ params }) => {
    const { data: post } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', params.slug)
      .single()
    return post
  },
  head: ({ loaderData: post }) => ({
    meta: post
      ? [
          { title: `${post.title} | Technically Dominion` },
          { name: 'description', content: post.preview },
          { property: 'og:title', content: post.title },
          { property: 'og:description', content: post.preview },
          { property: 'og:image', content: post.thumbnail_url },
          { property: 'og:type', content: 'article' },
          { name: 'twitter:card', content: 'summary_large_image' },
        ]
      : [
          { title: 'Post not found | Technically Dominion' },
        ],
    links: post
      ? [
          {
            rel: 'canonical',
            href: `https://technicallydominion.space/blog/${post.slug}`,
          },
        ]
      : [],
  }),
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