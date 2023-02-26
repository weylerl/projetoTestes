import './AppCard.css'

function AppCard ({ name, email }) {
    return (
        <div className="card">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>

    )
}

export default AppCard