import React from 'react';
import Image from '@views/Image.jsx';



const HistoryItem = ({
    name,
    price,
    quantity,
    image,
    date,
}) => (
        <div className="table__row table__row--focused">
            <div className="table__col table__col--img">
                <Image image={image} />

            </div>
            <div className="table__col table__col--text">{name}</div>
            <div className="table__col table__col--quantity">{quantity}</div>
            <div className="table__col table__col--quantity">{price} €</div>
            <div className="table__col">{date}</div>
            <div className="table__col table__col--go-btn">
                <i className="icon icon--l icon-dots-vertical-rounded" />
            </div>
        </div>
    );

export default HistoryItem;
