import React from 'react'
import Footer from 'components/shared/Footer'
import Header from 'components/shared/Header'
import { ChevronsUp } from 'react-feather'

const Layout = ({ location, children }) => {
  const handleClickScrollTopButton = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div>
      <Header location={location} />
      <main>
        <div className="pb-16">{children}</div>
      </main>
      <Footer />
      <div
        className="fixed w-10 md:w-12 h-10 md:h-12 bottom-4 md:bottom-8 right-4 md:right-8 rounded-full inline-flex items-center justify-center shadow-md bg-primary-light hover:bg-primary-dark cursor-pointer  transition duration-300"
        onClick={handleClickScrollTopButton}
      >
        <ChevronsUp />
      </div>
    </div>
  )
}

export default Layout
