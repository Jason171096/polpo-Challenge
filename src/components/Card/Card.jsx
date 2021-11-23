import './Card.css'
const Card = ({setOpenPortal, title, joke}) => {
    return (
        <div className="wrapper-card">
            <div className="wrapper-card-exit">
                <div className="button-exit" onClick={() => {setOpenPortal(false)}}>➤</div>
            </div>
            <div className="wrapper-card-page">
                <div className="wrapper-joke">
                    <h1>{title}</h1>
                    <h2>{joke}</h2>
                </div>
            </div>
        </div>
    )
}

export default Card

