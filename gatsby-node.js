const path = require('path')


exports.createPages = async({graphql,actions}) =>{
    const {createPage} = actions

    const result = await graphql(`
    query GetRecipes {
        allContentfulReciepe {
          nodes {
            content {
              tags
            }
          }
        }
      }
    `)

    result.data.allContentfulReciepe.nodes.forEach(recipe=>{
        recipe.content.tags.forEach(tag=>{
            createPage({
                path:`/${tag}`,
                component:path.resolve('src/templates/tag-template.js'),
                context:{
                    tag:tag,
                },
            })
        })
    })
}