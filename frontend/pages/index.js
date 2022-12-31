import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { createClient } from 'next-sanity'
import PortableText from "react-portable-text"
export default function Home({ blogs }) {
  console.log(blogs[0]);
  return (
    <div className="home">
      <h2 className='head mx-6 my-8' >Hi sanity{blogs[0].title} </h2>
      <div className="mx-8">

        <PortableText
          content={blogs[0].content}
          projectId="787prfbg"
          dataset="production"
          serializers={{
            h1: (props) => <h1 style={{ color: "red" }} {...props} />,
            li: ({ children }) => <li className="special-list-item">{children}</li>
          }}
        />
      </div>
    </div>
  )
}
export async function getServerSideProps(context) {
  const client = createClient({
    projectId: "787prfbg",
    dataset: "production",
    useCdn: false
  });
  const query = `*[_type == "blog"]`;
  const blogs = await client.fetch(query);//sanity fetch function not js one 
  return {
    props: {
      blogs
    }
  }
}