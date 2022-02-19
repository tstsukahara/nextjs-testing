import Layout from '../components/Layout'
import { getAllPostsData } from '../lib/fetch'
import { POST } from '../types/Types'
import { GetStaticProps } from 'next'
import Post from '../components/Post'

interface STATICPROPS {
  posts: POST[]
}

const BlogPage: React.FC<STATICPROPS> = ({ posts }) => {
  return (
    <Layout title="Blog">
      <p className="text-4xl mb-10">blog page</p>
      <ul>{posts && posts.map((post) => <Post key={post.id} {...post} />)}</ul>
    </Layout>
  )
}
export default BlogPage

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getAllPostsData()
  return {
    props: { posts },
  }
}
