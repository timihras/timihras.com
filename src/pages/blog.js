import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import WireframeBlog from '../components/svg/wireframes-blog'
import BlogPostsList from '../components/blog-posts-list';
import Footer from '../components/footer';
import SocialIcons from '../components/social-icons';

export default () => {
  return (
    <Layout>
      <Hero
        heading={'My Latest Notes\nand Projects'}
        subheading={'Blog Page'}
        svgImage={WireframeBlog}
      />

      <BlogPostsList />

      <section className="align-center pt-0">
        <hr className="mt-xl mb-xl hr-center" />
        <h5>Get in contact</h5>
        <p className="mt-m mb-m">+ 386 (0) 31 786 716</p>
        <SocialIcons />
        <Footer />
      </section>


    </Layout>
  )
}