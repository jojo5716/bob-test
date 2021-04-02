import React from 'react';

const BuyProductModal = ({ onClick, onClickArgs, updateState, translations }) => {
    const message = translations.buyProductMessage.replace('{total}', onClickArgs.totalWithDiscount);

    return (
        <div className="modal__wrapper">
            <div className="modal__container">
                <button className="modal__close" onClick={() => updateState('displayBuyProductModal', false)}>
                    <i className="icon icon-x icon--xl" />
                </button>
                <div className="modal__title">{translations.confirmation}</div>
                <div className="modal__body">
                    <p>{message}</p>
                    <div className="modal__actions">
                        <button className="button button--ghost" onClick={() => updateState('displayBuyProductModal', false)}>
                            {translations.cancel}
                        </button>
                        <button className="button" onClick={() => { onClick(onClickArgs); updateState('displayBuyProductModal', false) }}>
                            {translations.save}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyProductModal;
