import React from 'react'

const Button = ({ bgColor, color, size, text, borderRadius, width, action }) => {
  return (
    <button
      type='button'
      style={{
        backgroundColor: bgColor,
        color, borderRadius, width: width
      }}
      onClick={(e) => action(e)}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >{text}</button>
  )
}

export default Button