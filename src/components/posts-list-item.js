import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export const PostsList = (props) => {
  const { node } = props
  return (
    <Link to={'blog/' + node.slug}>
      <Img sizes={node.coverImg.sizes} />
      <div className="post-info">
        <h5 className="post-category">{node.category}</h5>
        <h2>{node.title}</h2>
      </div>
    </Link>
  )
}

export default PostsList