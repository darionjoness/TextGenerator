import React from 'react'
import Paragraph from './Paragraph'

const Paragraphs = ({ genText }) => {
  return (
    <div className='paragraphs'>
        {genText.map(text => <Paragraph key={Math.random() * 10000} text={text} /> )}
    </div>
  )
}

export default Paragraphs