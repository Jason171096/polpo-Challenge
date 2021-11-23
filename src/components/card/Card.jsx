import './card.css'
export const Card = (props) => {
    return (
        <div className="wrapper">
            <div className="wrapper-card">
                <h2>{props.title}</h2>
            </div>
        </div>
    )
}
