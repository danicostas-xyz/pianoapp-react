/* eslint-disable react/prop-types */
import React from 'react'
import '../styles/Piano.css'
import PianoKey from './PianoKey'
import OCTAVAS from '../assets/keyNotes'
import piano from '../assets/piano.mp3'
import useSound from 'use-sound'

export default function Piano (props) {
  const keyMapping = Object.fromEntries(OCTAVAS.map(e => [e.note, [e.start, e.duration]]))

  const [play] = useSound(piano, {
    sprite: keyMapping
  })

  return (
    <>
      <div className='piano'>
        {OCTAVAS.map((e, i) => <PianoKey
          play={play}
          key={i}
          note={e.note}
          type={e.type}
          gridColumn={e.gridColumn}
          start={e.start}
          duration={e.duration}
          noteHistory={props.noteHistory}
          setNoteHistory={props.setNoteHistory}
                               />)}
      </div>
    </>
  )
}
