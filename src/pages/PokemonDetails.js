
import file from '../assets/datas/pokedex.json'
import {useParams} from "react-router-dom";

const PokemonDetails = () => {
    const { id } = useParams();
    const pokemon = file.pokemons[id];

    return (
        <div className="card w-50 mx-auto mt-5 py-5 px-2">
            <div className="card-body">
                <h3 className="card-title">{pokemon.name.french}</h3>

                <ul className="list-group mt-5">
                    <li className="list-group-item list-group-item-action">PV : {pokemon.base.HP}</li>
                    <li className="list-group-item list-group-item-action">Attaque : {pokemon.base.Attack}</li>
                    <li className="list-group-item list-group-item-action">Défense : {pokemon.base.Defense}</li>
                    <li className="list-group-item list-group-item-action">Att. Spé : {pokemon.base.SpecialAttack}</li>
                    <li className="list-group-item list-group-item-action">Déf Spé : {pokemon.base.SpecialDefense}</li>
                    <li className="list-group-item list-group-item-action">Vitesse : {pokemon.base.speed}</li>
                </ul>

                <a href="/" className="btn btn-outline-secondary w-50 mt-5">Go back</a>
            </div>
        </div>
    )
}

export default PokemonDetails