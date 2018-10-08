import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Layout from '../components/layout';
import Hero from '../components/hero';

export default ({ data }) => {
  return (
    <Layout logoWhite>
      <HelmetDatoCms seo={data.datoCmsArticle.seoMetaTags} />
      <article>
        <Hero
          heading={data.datoCmsArticle.title}
          subheading={data.datoCmsArticle.category}
          imgSizes={data.datoCmsArticle.coverImg.sizes}
          color={data.datoCmsArticle.color.hex}
        />
        <section>
          <div
            dangerouslySetInnerHTML={{
              __html: data.datoCmsArticle.textNode.childMarkdownRemark.html
            }}
          />
        </section>
      </article>
    </Layout>
  )
}

export const query = graphql`
query PostsQuery($slug: String!) {
  datoCmsArticle (slug: {eq: $slug}) {
    seoMetaTags {
      ...GatsbyDatoCmsSeoMetaTags
    }
    title
    category
    coverImg {
      sizes(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
        ...GatsbyDatoCmsSizes
      }
    }
		textNode {
		  childMarkdownRemark {
		    html
		  }
		}
    color {
      hex
    }
  }
}
`

