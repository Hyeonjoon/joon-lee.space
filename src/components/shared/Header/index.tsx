import { Link } from 'gatsby'
import React from 'react'

const Header = ({ location: { pathname } }) => {
  return (
    <header>
      <div className="wrapper flex justify-between items-center">
        <div>
          <Link to="/">
            <h1 className="text-xl md:text-2xl font-bold">
              Joon Blog
              <span className="text-primary text-3xl ml-1 leading-4">,</span>
            </h1>
          </Link>
        </div>
        <nav>
          <ol className="flex text-sm">
            <Link to="/">
              <li
                className={`mx-3 sm:mx-4 my-5 border-b-2 border-white hover:border-primary transition duration-500 ${
                  pathname.includes('/') ? 'border-primary' : ''
                }`}
              >
                Writing
              </li>
            </Link>
          </ol>
        </nav>
      </div>
    </header>
  )
}

export default Header
