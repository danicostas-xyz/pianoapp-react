/* eslint-disable react/prop-types */
import React from 'react'
import '../styles/Header.css'

export default function Header (props) {
  return (
    <header>
      {props.children}
    </header>
  )
}
