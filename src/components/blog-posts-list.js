import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import PostListItem from './posts-list-item'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const BlogPostsList = (props) => {
  return (
    <StaticQuery
      query={
        graphql`
            {
              allDatoCmsArticle(limit: 12, sort: { fields: [publishedDate], order: DESC }) {
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
          <div className="pagination">
            <Link to="" className="pagination-link">
              <FaChevronLeft className="pagination-arrow" />
              <div>Newer notes</div>
            </Link>
            <Link to="" className="pagination-link">
              <div>Older notes</div>
              <FaChevronRight className="pagination-arrow" />
            </Link>
          </div>
        </div>
      )}
    />

  )
}
export default BlogPostsList