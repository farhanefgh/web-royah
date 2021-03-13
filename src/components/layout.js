import * as React from "react"
import PropTypes from "prop-types"

const Layout = ({ children }) => {
  return (
    <div>
      <main className="h-screen">{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
