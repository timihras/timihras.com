import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import PostListItem from './posts-list-item'

export const PostsList = (props) => {
  return (
    <StaticQuery
      query={
        graphql`
            {
              allDatoCmsArticle(limit: 3, sort: { fields: [publishedDate], order: DESC }) {
                edges {
                  node {
                    title
                    slug
                    category
                    coverImg {
                      url
                      sizes(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
                        ...GatsbyDatoCmsSizes
                      }
                    }
                  }
                }
              }
            }
          `
      }
      render={(data) => (
        <div className="posts-list">
          {data.allDatoCmsArticle.edges.map(({ node }, index) => (
            <article key={index} className="post-item mt-l">
              <PostListItem node={node} />
            </article>
          ))}
        </div>
      )}
    />
  )
}
export default PostsList