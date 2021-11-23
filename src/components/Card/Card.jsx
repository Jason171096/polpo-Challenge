import './Card.css'

const Card = ({setOpenPortal}) => {
    return (
        <div className="wrapper-card">
            <div className="wrapper-card-exit">
                <div className="button-exit" onClick={() => {setOpenPortal(false)}}>➤</div>
            </div>
            <div className="wrapper-card-page">
            </div>
        </div>
    )
}

export default Card

