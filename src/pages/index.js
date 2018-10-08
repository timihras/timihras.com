import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import Hero from '../components/hero'
import WireframeHome from '../components/svg/wireframes-home'
import SocialIcons from '../components/social-icons';
import Footer from '../components/footer';
import { PostsList } from '../components/posts-list';
import { FaArrowRight } from 'react-icons/fa';

const IndexPage = () => (
  <Layout>
    <Hero
      heading={'UI/UX Designer &\nFront End Developer'}
      subheading={'Based in Maribor, Slovenia'}
      svgImage={WireframeHome}
    />

    <section className="mt-xl mb-xl">
      <h1>I can help you <strong>Design & Develop</strong> your App for Web or Mobile.</h1>
      <hr className="mt-s mb-l hr-left" />
      <p>Whether it is just in your head as an idea or you have already made your first steps, we will work together on your project. When done, you will have a beautiful, intuitive and modern interface ready to be developed or presented to your end users with confidence.</p>
      <h5 className="align-center">
        <Link to="blog/what-is-my-design-process">
          See my design process here <small><FaArrowRight /></small>
        </Link>
      </h5>
    </section>

    <section className="mt-xl">
      <h1>Here are some <strong>Personal Projects</strong> I am especially proud of.</h1>
      <hr className="mt-s mb-l hr-left" />
    </section>
    <section className="full-width pt-0 align-center">
      <PostsList />
      <h5 className="mt-l"><Link to="portfolio">
        Browse my portfolio here <small><FaArrowRight /></small>
      </Link></h5>
    </section>

    <section className="mt-xl">
      <h1>While working <strong>My Personal Notes</strong> are published on my blog.</h1>
      <hr className="mt-s mb-l hr-left" />
    </section>
    <section className="full-width pt-0 align-center">
      <PostsList />
      <h5 className="mt-l"><Link to="blog">
        Browse all notes here <small><FaArrowRight /></small>
      </Link></h5>
    </section>

    <section className="align-center pt-0 gap-lg">
      <hr className="mt-xl mb-xl hr-center" />
      <h1>Hire Me</h1>
      <p>I am currently looking for<br />new interesting projects.<br />Would you like to discuss yours?</p>
      <p><Link to="/contact">Contact Me -></Link><br />+ 386 (0) 31 786 716<br />hi@timihras.com</p>
      <SocialIcons />
      <Footer />
    </section>

  </Layout>
)

export default IndexPage