import { Link } from 'react-router-dom'
import file from '../assets/datas/pokedex.json'

const Home = () => {

const pokemons = file.pokemons.map((pokemon, index) => {

    let types = pokemon.type.map((type) => type)

    return (
        <tr key={pokemon.id}>
            <th scope="row">{pokemon.id}</th>
            <td><Link to={`/pokemon/${pokemon.id}`}>{pokemon.name.french}</Link></td>
            <td>{types}</td>
        </tr>
    )
})

    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Type</th>
                    </tr>
                </thead>
                <tbody>
                    { pokemons }
                </tbody>
            </table>
        </>
    )
}

export default Home
