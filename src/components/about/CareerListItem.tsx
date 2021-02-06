import React from 'react'

const CareerListItem = ({
  career: { companyName, position, companyLogoUrl, period },
}) => {
  return (
    <li className="p-4 pl-4">
      <div className="flex items-center">
        {/* <div className="hidden md:inline-flex px-1 h-10 items-center w-18 mr-5">
          <img
            src={companyLogoUrl}
            alt={`${companyName} logo`}
            className="w-full h-full object-contain"
          />
        </div> */}
        <h3 className="text-base md:text-lg font-bold whitespace-nowrap w-2/5 md:w-40">
          {companyName}
        </h3>
        <div className="text-gray-500 text-xs md:text-sm leading-2 ml-0 md:ml-4 whitespace-normal md:whitespace-nowrap overflow-hidden w-3/5">
          <p>
            {position} | {period}
          </p>
        </div>
      </div>
    </li>
  )
}

export default CareerListItem
