import React from 'react'
import {Link} from 'react-router-dom'

const HeroAlterego = ({alter_ego, characters}) => {
    const vCharacters = characters.split(',').filter(character=> character !== alter_ego) 
    return (alter_ego !== characters) && (<p>{vCharacters}</p>)
}

export const HeroCard = 
    ({
        id, 
        superhero, 
        publisher, 
        alter_ego,
        first_appearance,
        characters
    }) => 
    
{
    const heroUrl = `/assets/heroes/${id}.jpg`
    

    return (
  
        <div className='col  animate__animated animate__fadeIn'>
            <div className="card">
                <div className="row no-gutters">

                    <div className="col-4">
                        <img src={heroUrl} alt={superhero} className="card-img" />
                    </div>

                    <div className="col-8">

                        <div className="card-body">

                            <h1 className="card-title">{superhero}</h1>

                            <p className="card-text">{alter_ego}</p>

                            <HeroAlterego characters={characters} alter_ego={alter_ego} />

                            <p className="card-text">
                                <small className="text-muted">{ first_appearance }</small>
                            </p>

                            <Link to={`/hero/${id}`}>
                                Mas...
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}
