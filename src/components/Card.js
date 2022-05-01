import React from 'react'

function Card(props) {
  return (
    <div className="wrapper">
        <div className='card'>
            <div className='card_body'>
                <img className="card_pic" src={props.img} alt={props.alt}/>
                <h2 className='card_title'>{props.title}</h2>
                <p className='card_text'>{props.text}</p>
            </div>
        </div>
    </div>
  )
}

export default Card