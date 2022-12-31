import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { slug } = router.query//dynamic route give url param data

  return <p>Post: {slug}</p>
}

export default Post