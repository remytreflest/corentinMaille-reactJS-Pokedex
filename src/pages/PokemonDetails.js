import file from '../assets/datas/pokedex.json'
import { useParams } from 'react-router-dom'
import PokemonPropertyLine from '../components/PokemonPropertyLine'

const PokemonDetails = () => {
    const { id } = useParams()
    const pokemon = file.pokemons[id - 1]
    const image = file.url + id + '.png'
    const imagePre = file.url + (parseInt(id) == 1 ? '151' : parseInt(id) - 1) + '.png'
    const imageSui = file.url + (parseInt(id) == 151 ? '1' : parseInt(id) + 1) + '.png'

    const color = file.types[pokemon.type[0]]

    return (
        <div className='card w-50 mx-auto mt-5 py-5 px-2'>
            <div className='card-body'>
                <h3 className='card-title'>{pokemon.name.french}</h3>

                <img
                    src={image}
                    className='rounded mx-auto d-block mt-0'
                    alt={pokemon.name.french}
                    style={{ height: '150px' }}
                />

                <ul className='list-group mt-2'>
                    <PokemonPropertyLine label='PV' value={pokemon.base.HP} color={color} />

                    <PokemonPropertyLine
                        label='Attaque'
                        value={pokemon.base.Attack}
                        color={color}
                    />

                    <PokemonPropertyLine
                        label='Défense'
                        value={pokemon.base.Defense}
                        color={color}
                    />

                    <PokemonPropertyLine
                        label='Att. Spé'
                        value={pokemon.base.SpecialAttack}
                        color={color}
                    />

                    <PokemonPropertyLine
                        label='Déf Spé'
                        value={pokemon.base.SpecialDefense}
                        color={color}
                    />

                    <PokemonPropertyLine label='Vitesse' value={pokemon.base.Speed} color={color} />
                </ul>

                <div className='row'>
                    <div className='col-6'>
                        <a
                            href={'/pokemon/' + (parseInt(id) == 1 ? '151' : parseInt(id) - 1)}
                            className='btn w-75 mx-3 mt-5 text-light'
                            style={{ backgroundColor: color }}
                        >
                            <img
                                src={imagePre}
                                className='rounded mx-auto d-block mt-0'
                                alt={pokemon.name.french}
                                style={{ height: '30px' }}
                            />
                            Précédent
                        </a>
                    </div>
                    <div className='col-6'>
                        <a
                            href={'/pokemon/' + (parseInt(id) == 151 ? '1' : parseInt(id) + 1)}
                            className='btn w-75 mx-3 mt-5 text-light'
                            style={{ backgroundColor: color }}
                        >
                            Suivant
                            <img
                                src={imageSui}
                                className='rounded mx-auto d-block mt-0'
                                alt={pokemon.name.french}
                                style={{ height: '30px' }}
                            />
                        </a>
                    </div>
                </div>

                <div>
                    <a
                        href='/'
                        className='btn w-50 mx-3 mt-5 text-light'
                        style={{ backgroundColor: color }}
                    >
                        Retourner sur la liste
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PokemonDetails
