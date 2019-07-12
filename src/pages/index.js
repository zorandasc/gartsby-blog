import React from "react"
import Layout from "../components/layout"
//import { Link } from "gatsby"
import PostList from "../components/PostList"
import { graphql, useStaticQuery } from "gatsby"

const getPosts = graphql`
  query MyQuery {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          excerpt
          frontmatter {
            title
            slug
            date(formatString: "MMM Do, YYYY")
            author
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
export default ({ data }) => {
  const response = useStaticQuery(getPosts)
  const posts = response.allMdx.edges

  return (
    <Layout>
      <PostList posts={posts} />
    </Layout>
  )
}
