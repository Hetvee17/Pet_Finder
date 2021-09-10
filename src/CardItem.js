import React from 'react';
import { Link } from 'react-router-dom';

function CardItem() {
    return (
        <>
            <li className="cards__item">
                <Link className="cards__item__link">
                    <figure className="cards__item__pic-wrapper">
                        <img src="/" alt="petfinderlogo" />
                    </figure>
                    {/* <div className="cards__info__"> */}
            </Link>
            </li>
        </>
    )
}

export default CardItem
