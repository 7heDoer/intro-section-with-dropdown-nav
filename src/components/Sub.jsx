import React from 'react'
import '../styles/Sub.css'

export const Sub = (props) => {
  const {label, className} = props
  return (
    <ul aria-label={label} aria-hidden aria-expanded="false" className={`sub-menu ${className}`}>
      {props.children}
    </ul>
  )
}
