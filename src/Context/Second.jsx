import React from 'react'
import Third from './Third'

export default function Second({name}) {
  return (
    <div style={{padding:"20px",border:"2px solid #333"}}>
      <h2>Second component---{name}</h2>
      <Third name={name}/>
    </div>
  )
}
