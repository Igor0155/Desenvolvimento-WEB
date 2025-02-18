import "./Card.css"

const Card = ( props )=>{

    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00',
    }

    return (
        <div className="container_card" style={cardStyle}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    )
}

export default Card