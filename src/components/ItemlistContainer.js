import React from 'react'

 function ItemlistContainer(greeting) {
  return (
      <span className=' md:flex md:justify-center md:my-40'>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <h1 className='animate-pulse text-white mx-6 text-3xl md:text-6xl font-mono font-[poppins] '>{greeting.msg}</h1>
      </span>
    
  )
}

export default ItemlistContainer;
