import React from 'react'

const NoDataMessage = ({message}) => {
  return (
    <div className='text-center mt-4 w-full p-4 rounded-full bg-grey/50'>
        <p>{ message }</p>
    </div>
  )
}

export default NoDataMessage