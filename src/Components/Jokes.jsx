function Jokes({ joke }) {
    return (
        <li>
            <h3>{joke.joke}</h3>
            <h3 style={{color: 'yellow'}}>{joke.setup}</h3>
            <h3 style={{color: 'pink'}}>{joke.delivery}</h3>
        </li>
    )
}

export default Jokes;