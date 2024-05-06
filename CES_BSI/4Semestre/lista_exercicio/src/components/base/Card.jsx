import { useState } from "react";
import "./Card.css"
import { FaCaretDown,FaCaretUp } from "react-icons/fa6";




const Card = ( props )=>{

    const open = props.open || false
    const [visivel, setVisivel] = useState(open)

    const changeImage = ()=>{
        setVisivel( ! visivel )
    }


    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00',
    }




    return (
        <div className="container_card" style={cardStyle}>
            <div className="Title">
                <span>{props.titulo}</span>
                {visivel? <FaCaretDown onClick={changeImage} /> :
                <FaCaretUp  onClick={changeImage} /> }

            </div>

            <div className={'Content '+( visivel? 'show' : 'hide' )}>
                {props.children}
            </div>
        </div>
    )
}

export default Card