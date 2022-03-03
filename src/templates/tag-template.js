import React from "react";
import { graphql } from "gatsby";
import RecipeList from '../components/RecipeList';
import Layout from "../components/Layout";

const TagTemplate=props=>{
    console.log(props)
    const recipes = props.data.allContentfulReciepe.nodes
    return(
        <Layout>
            <main className="page">
                <h2>tag name</h2>
                <div className="tag-recipes">
                    <RecipeList recipes={recipes}/>
                </div>
            </main>
        </Layout>
        
    )
}

export const query = graphql`
query MyQuery($tag:String) {
    allContentfulReciepe(
      sort: {order: ASC, fields: title}
      filter: {content: {tags: {eq: $tag}}}
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

export default TagTemplate