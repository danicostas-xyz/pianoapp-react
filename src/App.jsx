import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Piano from './components/Piano'

export default function App () {
  const [noteHistory, setNoteHistory] = useState([])

  return (
    <div className='app'>
      <div className='wrapper'>
        <Header>
          <h1>Piano app</h1>
        </Header>
        <div className='chords'>
          <p className='chords__previous'>{noteHistory[noteHistory.length - 2]}</p>
          <p className='chords__actual'>{noteHistory[noteHistory.length - 1]}</p>
        </div>
        <Piano noteHistory={noteHistory} setNoteHistory={setNoteHistory} />
      </div>
    </div>
  )
}
