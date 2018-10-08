import React from 'react'
import PageTransition from 'gatsby-plugin-page-transitions'
import '../styles/index.sass'

import Navigation from './navigation'

class Layout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      nav: false
    }
  }

  handleToggleNav = () => {
    this.setState((prevState) => ({
      nav: !prevState.nav
    }));
  }

  handleCloseNav = () => {
    this.setState(() => ({ nav: false }))
  }


  render() {
    const { children, logoWhite } = this.props
    return (
      <PageTransition>
        <Navigation
          nav={this.state.nav}
          toggleNav={this.handleToggleNav}
          closeNav={this.handleCloseNav}
          logoWhite={logoWhite}
        />
        <main>
          {children}
        </main>
      </PageTransition>
    )
  }
}

export default Layout
