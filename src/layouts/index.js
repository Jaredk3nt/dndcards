import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/header'
import './index.css'

const Layout = ({ children, data }) => (
  <div className="layout-grid filter-open">
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        gridColumnStart: 2,
        overflow: 'auto'
      }}>
      { children() }
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
