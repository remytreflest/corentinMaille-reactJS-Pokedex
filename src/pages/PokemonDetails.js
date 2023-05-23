
import file from '../assets/datas/pokedex.json'
import {useParams} from "react-router-dom";
import PokemonPropertyLine from "../components/PokemonPropertyLine";

const PokemonDetails = () => {
    const { id } = useParams();
    const pokemon = file.pokemons[id];

    return (
        <div className="card w-50 mx-auto mt-5 py-5 px-2">
            <div className="card-body">
                <h3 className="card-title">{pokemon.name.french}</h3>

                <ul className="list-group mt-5">
                    <PokemonPropertyLine
                        label="PV"
                        value={pokemon.base.HP}
                    />

                    <PokemonPropertyLine
                        label="Attaque"
                        value={pokemon.base.Attack}
                    />

                    <PokemonPropertyLine
                        label="Défense"
                        value={pokemon.base.Defense}
                    />

                    <PokemonPropertyLine
                        label="Att. Spé"
                        value={pokemon.base.SpecialAttack}
                    />

                    <PokemonPropertyLine
                        label="Déf Spé"
                        value={pokemon.base.SpecialDefense}
                    />

                    <PokemonPropertyLine
                        label="Vitesse"
                        value={pokemon.base.Speed}
                    />
                </ul>

                <a href="/" className="btn btn-outline-secondary w-50 mt-5">Go back</a>
            </div>
        </div>
    )
}

export default PokemonDetails