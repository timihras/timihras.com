import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'

import '../styles/index.sass'

const TemplateWrapper = ({ children }) => (

  <StaticQuery
    query={graphql`
    query LayoutQuery {
      datoCmsSite {
        globalSeo {
          siteName
        }
        faviconMetaTags {
          id
          tags {
            attributes {
              rel
              sizes
              href
              name
              content
              type
            }
            tagName
          }
        }
      }
      datoCmsHome {
        seoMetaTags {
          id
          tags {
            attributes {
              property
              content
              name
            }
            tagName
            content
          }
        }
        introTextNode {
          childMarkdownRemark {
            html
          }
        }
        copyright
      }
      allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
        edges {
          node {
            profileType
            url
          }
        }
      }
    }
  `}
    render={data => (
      <div className="container">
        <HelmetDatoCms
          favicon={data.datoCmsSite.faviconMetaTags}
          seo={data.datoCmsHome.seoMetaTags}
        />
        <div className="container__sidebar">
          <div className="sidebar">
            <h6 className="sidebar__title">
              <Link content="Home" to="/">{data.datoCmsSite.globalSeo.siteName}</Link>
            </h6>
            <div
              className="sidebar__intro"
              dangerouslySetInnerHTML={{
                __html: data.datoCmsHome.introTextNode.childMarkdownRemark.html,
              }}
            />
            <ul className="sidebar__menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
            <p className="sidebar__social">
              {data.allDatoCmsSocialProfile.edges.map(({ node: profile }) => (
                <a
                  key={profile.profileType}
                  href={profile.url}
                  target="blank"
                  className={`social social--${profile.profileType.toLowerCase()}`}
                />
              ))}
            </p>
            <div className="sidebar__copyright">{data.datoCmsHome.copyright}</div>
          </div>
        </div>
        <div className="container__body">
          <div className="container__mobile-header">
            <div className="mobile-header">
              <div className="mobile-header__menu">
                <Link to="#" data-js="toggleSidebar" />
              </div>
              <div className="mobile-header__logo">
                <Link to="/">{data.datoCmsSite.globalSeo.siteName}</Link>
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    )}
  />
)

export default TemplateWrapper