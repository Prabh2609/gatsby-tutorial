import React from 'react'
import Layout from '../components/Layout'
import {StaticImage} from 'gatsby-plugin-image'
import { Link,graphql } from 'gatsby'
import RecipeList from '../components/RecipeList'
import SEO from '../components/SEO'


const About = ({data:{allContentfulReciepe:{nodes}}}) => {
  return (
    <Layout>
        <SEO title = "About" description = "This is about page"/>
        <main className='page'>
            <section className='about-page'>
                <article>
                    <h2>I'm baby coloring book poke taxidermy</h2>
                    <p>Taxidermy forage glossier letterpress heirloom before they sold out you probably haven't heard of them banh mi biodiesel chia.</p>
                    <p>Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia retro.</p>
                    <Link to='/contact' className='btn'>Contact</Link>
                </article>
                <StaticImage
                  src='../assets/images/about.jpg'
                  alt="Person Pouring Salt in Bowl"
                  className="about-img"
                  placeholder="blurred"/>
            </section>
            <section className='featured-recipes'>
              <h5>Look at this Awesomsouce!!</h5>
              <RecipeList recipes={nodes}/>
            </section>
        </main>
    </Layout>
  )
  
}

export const query = graphql`
{
  allContentfulReciepe(
    sort: {fields: title, order: ASC}
    filter: {featured: {eq: true}}
  ) {
    nodes {
      prepTime
      title
      id
      cookTime
      image {
        gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
      }
    }
  }
}
`

export default About