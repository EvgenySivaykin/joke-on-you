function Jokes({ joke }) {
    return (
        <li>
            <h3>{joke.joke}</h3>
            <h3>{joke.setup}</h3>
            <h3>{joke.delivery}</h3>
        </li>
    )
}

export default Jokes;