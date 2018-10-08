import React from 'react'
import ScrollIcon from '../components/scroll-icon'
import Img from 'gatsby-image'

export default (props) => {
  const SvgImage = props.svgImage
  const { imgSizes, color } = props

  return (
    <div className="hero" style={{ backgroundColor: color ? color : '', color: color ? '#FFF' : '' }}>
      <div className="hero__wrapper">
        <section className="hero__section">
          <div className="hero__sign">
            {SvgImage && <SvgImage />}
            {imgSizes && <Img sizes={imgSizes} />}
          </div>
          <div className="hero__text">
            <h1>{props.heading}</h1>
            <h5>{props.subheading}</h5>
            <hr className="hr-left" style={{ backgroundColor: color ? '#FFF' : '' }} />
          </div>
        </section>
      </div>
      <div className="hero__bottom">
        <ScrollIcon />
      </div>
    </div>
  )
}
