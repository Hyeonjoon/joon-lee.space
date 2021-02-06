import React from 'react'
import { GitHub, Rss } from 'react-feather'

const Footer = () => {
  return (
    <footer>
      <div className="wrapper flex border-solid border-t-2 border-primary justify-between items-center text-gray-500 py-2">
        <div className="text-sm">© 2021 Joon.</div>
        <div className="flex justify-end space-x-1 py-2">
          <a href="https://github.com/Hyeonjoon/" target="_blank">
            <GitHub
              className="p-2 hover:text-primary-darken transition duration-500"
              size="38px"
            />
          </a>
          <a href="https://joon-lee.space/rss.xml" target="_blank">
            <Rss
              className="p-2 hover:text-primary-darken transition duration-500"
              size="38px"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
