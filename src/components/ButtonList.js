import React from 'react'
import Button from './Button'

const list = ["All", "Sitcom", "Games", "Food", "Accessories", "Songs", "Poetry", "News", "Spoken Fest", "Aesthetics", "CppNuts",
"React", "Striver" ];

const ButtonList = () => {
  return (
    <div className='flex'>
      {list.map((listItem)=>(
        <Button name={listItem}/>
      ))}
    </div>
  )
}

export default ButtonList