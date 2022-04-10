import React from 'react';


const Card = ({ country }) => {
    return (
        <li className="card">
            <img src={country.flags.png} alt={"drapeau" + country.translations.fra.common} />
            <div className="infos">
                <h2>{country.translations.fra.common}</h2>
                <h4>{country.capital}</h4>
                <p>pop. {country.population.toLocaleString()}</p>
                <p>{country.timezones}</p>
            </div>
            
        </li>
    );
};

export default Card;