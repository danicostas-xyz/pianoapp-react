/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import '../styles/PianoKey.css'

export default function PianoKey (props) {
  const [isPressed, setIsPressed] = useState(false)

  const handlerOnMouseDown = () => {
    setIsPressed(true)
    props.play({ id: props.note })
    props.setNoteHistory([...props.noteHistory, props.note])
  }
  const handlerOnMouseUp = () => {
    setIsPressed(false)
  }
  const handlerOnMouseLeave = () => {
    setIsPressed(false)
  }

  return (
    <div
      className={`pianoKey pianoKey--${props.type}`}
      style={isPressed ? { gridColumn: props.gridColumn, backgroundColor: '#e33333' } : { gridColumn: props.gridColumn }}
      onMouseDown={handlerOnMouseDown}
      onMouseUp={handlerOnMouseUp}
      onMouseLeave={handlerOnMouseLeave}
    >
      <p>{props.note}</p>
    </div>
  )
}
