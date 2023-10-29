import React from 'react'
import './Card.css'
import Button from './Button'
export default function Card(props){
    return(
        <>
            <div className="cardbox">
                <div className="head">
                    <img src={props.image}/>
                </div>
                <span className='heading'>
                    {props.Heading}
                </span>
                <ul className='details'>
                    <li>
                        <img src="https://cdn-icons-png.flaticon.com/128/833/833593.png" alt="" />
                        <span>{props.date}</span>
                    </li>
                    <li>
                        <img src="https://cdn-icons-png.flaticon.com/128/739/739231.png" alt="" />
                        <span>{props.likes}</span>
                    </li>
                </ul>
                <p>{props.paragraph}</p>
                <a href={props.link}>
                    <Button Text={props.ButtonText}/>
                </a>
            </div>
        </>
    )
}