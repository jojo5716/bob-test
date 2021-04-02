import React from 'react';
import HistoryItem from './HistoryItem.jsx';

const History = ({ history, translations }) => {
    let historyItems;

    if (history && history.length !== 0) {
        historyItems = history.map((item, index) => <HistoryItem key={index}  {...item} />)
    } else {
        historyItems = <p className="table__empty-msg">{translations.emptyHistory}</p>
    }

    return (
        <div className="table table--t-spacing">
            <div className="table__row table__row--header">
                <div className="table__col table__col--img" />
                <div className="table__col table__col--text">
                    {translations.name}
                </div>
                <div className="table__col table__col--quantity">
                    {translations.quantity}
                </div>
                <div className="table__col table__col--quantity">
                    {translations.total}
                </div>
                <div className="table__col">
                    {translations.date}
                </div>
                <div className="table__col table__col--go-btn" />
            </div>
            {historyItems}
        </div>
    );
};

export default History;
