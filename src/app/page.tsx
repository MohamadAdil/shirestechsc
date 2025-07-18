import { client } from '../sanity/lib/client'

const query = `*[_type == "post"]{_id, title, slug, body}`

export default async function Page() {
  const posts = await client.fetch(query)

  return (
    <main>
      <h1>Sanity Posts</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post._id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
