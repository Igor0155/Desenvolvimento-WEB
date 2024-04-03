import './Cards.css'

const Cards = ( props )=>{

    const cardStyle = {
        height: props.height || 'auto',
        display: props.display || 'grid',
    }


return(
    <div className="container_cards" style={cardStyle}>
            {props.children}
    </div>
)

}

export default Cards