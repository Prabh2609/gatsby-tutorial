import React from 'react'
import { graphql,Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {BsClockHistory,BsClock,BsPeople} from 'react-icons/bs'
import Layout from '../components/Layout'

const RecipteTemplate = ({data}) => {
  const {title,
        cookTime,
        content,
        prepTime,
        servings,
        description:{description},
        image
    } = data.contentfulReciepe;
    const pathToImage = getImage(image);
    const {tags,instructions,ingredients,tools} = content
    return (
    <Layout>
        <main className='page'>
            <div className='recipe-page'>
                {/* hero */}
                <section className='recipe-hero'>
                    <GatsbyImage
                        image={pathToImage}
                        alt={title}
                        className='about-img'
                    />
                    <article className='recipe-info'>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        {/* icons */}
                        <div className='recipe-icons'>
                            <article>
                                <BsClock/>
                                <h5>prep time</h5>
                                <p>{prepTime} min.</p>
                            </article>
                            <article>
                                <BsClock/>
                                <h5>cook time</h5>
                                <p>{cookTime} min.</p>
                            </article>
                            <article>
                                <BsPeople/>
                                <h5>serving</h5>
                                <p>{servings}</p>
                            </article>
                        </div>
                        {/* tags */}
                        <p className='recipe-tags'>
                            Tags:{tags.map((tag,index )=>{
                                return <Link to={`/${tag}`} key={index} >{tag}</Link>
                            })}
                        </p>
                    </article>
                </section>
                {/* rest of the content */}
                <section className='recipe-content'>
                    <article>
                            <h4>instructions</h4>
                            {
                                ingredients.map((item,index)=>{
                                    return <div key={index} className='single-instructions'>
                                        <header>
                                            <p>step {index}</p>
                                        </header>
                                    </div>
                                })
                            }
                    </article>
                    <article className='second-column'>
                        
                    </article>
                </section>
            </div>
        </main>
    </Layout>

  )
}

export const query = graphql`
  query getSingleRecipe($title:String) {
    contentfulReciepe(title: {eq: $title}) {
      title
      cookTime
      prepTime
      content {
        ingredients
        instructions
        tools
        tags
      }
      description {
        description
      }
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`

export default RecipteTemplate