import React from 'react'
import RecipeList from './RecipeList'
import TagList from './TagList'
import { graphql,useStaticQuery  } from 'gatsby'

const query = graphql`
  {
    allContentfulReciepe(sort: {fields: title, order: ASC}) {
      nodes {
        prepTime
        title
        id
        cookTime
        content {
          tags
        }
        image {
          gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
        }
      }
    }
  }
`

const AllRecipes = () => {
    const data = useStaticQuery(query)
    const recipes = data.allContentfulReciepe.nodes;
    console.log(recipes)
    return (
    <section className='recipes-container'>
        
        <TagList recipes = {recipes}/>
        <RecipeList recipes={recipes}/>
    </section>
  )
}

export default AllRecipes