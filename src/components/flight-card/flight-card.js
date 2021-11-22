import './flight-card.css'

function FlightCard(props) {
    return (
    <button className='btn-light'>
        <img src={props.img} alt=""/>
        <span></span>Horário de Saída
        <span></span>Horário de Chegada
        <span></span>Duração do Voo
        <span></span>Aeroporto de Saída
        <span></span>Aeroporto de Chegada
        <p></p>Preço
    </button>
    )
}

export default FlightCard;