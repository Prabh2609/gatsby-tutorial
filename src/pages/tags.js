import { graphql,Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import setupTags from '../Utils/setupTags'

const tags = ({data}) => {
  const newTags = setupTags(data.allContentfulReciepe.nodes)
  return (
    <Layout>
        <main className='page'>
            <section className='tags-page'>
              {
                newTags.map((tag,index)=>{
                  const[text,value] = tag
                  return <Link to={`/${text}`} key={index} className='tag'>
                    <h5>{text}</h5>
                    <p>{value}</p>
                  </Link>
                })
              }
            </section>
        </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulReciepe(sort: {fields: title, order: ASC}) {
      nodes {
        content {
          tags
        }
      }
    }
  }
`
export default tags