import React from 'react';

import BuyProductModal from './BuyProductModal.jsx';

const Discount = ({ userDiscount, total, onChangeTotalWithDiscount }) => (
    <div className="table__col table__col--discount">
        <div className="input-group input-group--addon">
            <span className="input-addon input-group__addon">
                -{userDiscount}%
            </span>
            <input
                className="input"
                type="number"
                step="0.1"
                min="0"
                value={total}
                onChange={onChangeTotalWithDiscount}
            />
        </div>
    </div>
);

const ProductItem = ({ value, className, fieldName }) => {
    let content;
    if (fieldName === 'image') {
        content = <ProductImage value={value} />
    } else {
        content = value;
    }

    return (
        <div className={`table__col ${className}`}>
            {content}
        </div>
    );
}

const ProductButton = ({
    onClick,
    onClickArgs,
    buyMode,
    updateState,
    displayBuyProductModal,
    translations,
 }) => {
    let html;
    if (buyMode) {
        html = (
            <React.Fragment>
                <div className="table__col table__col--cart-btn">
                    <button
                        type="button"
                        className="button button--success button--icon"
                        onClick={() => updateState('displayBuyProductModal', true)}>
                        <i className="icon icon-cart" />
                    </button>
                </div>
                { displayBuyProductModal
                    && <BuyProductModal onClick={onClick}
                        onClickArgs={onClickArgs}
                        updateState={updateState}
                        translations={translations}/>
                }
            </React.Fragment>
        );
    } else {
        html = (
            <div className="table__col table__col--go-btn">
                <i className="icon icon--l icon-chevron-right" />
            </div>
        );
    }

    return html;
}

const ProductImage = ({ value }) => {
    let htmlImage;

    if (value) {
        htmlImage = (
            <div className="avatar avatar--s">
                <img src={`/${value}`} alt={value} title={value} />
            </div>
        )
    } else {
        htmlImage = (
            <div className="avatar avatar--s avatar--empty">
                <i className="icon icon--l icon-camera-off" />
            </div>
        )
    }

    return htmlImage;
};

const InputBuyItems = (
    {
        total,
        onChangeTotal,
        user,
        hasToShowProductDiscount,
        userDiscountApplied,
        totalWithDiscount,
        onChangeTotalWithDiscount,
        quantity,
        onChangeQuantity,
        quantityStep
    }
) => (
        <React.Fragment>
            <div className="table__col table__col--quantity">
                <input
                    type="number"
                    className="input"
                    value={quantity}
                    step={quantityStep}
                    min="0"
                    max="20"
                    onChange={onChangeQuantity}
                />
            </div>
            <div className="table__col table__col--quantity">
                <input
                    type="number"
                    className="input"
                    step="0.1"
                    min="0"
                    value={total}
                    onChange={onChangeTotal}
                />
            </div>
            {(user.discountValue && hasToShowProductDiscount)
                ? <Discount
                    userDiscount={userDiscountApplied}
                    total={totalWithDiscount}
                    onChangeTotalWithDiscount={onChangeTotalWithDiscount} /> : null}
        </React.Fragment>
    )

const ProductLinkWrapper = ({ children, onClick, productID, productType }) => (
    <a className="table__row" onClick={() => onClick(productID, productType)}>
        {children}
    </a>
)

const ProductBuyWrapper = ({ children }) => (
    <div className="table__row table__row--focused">
        {children}
    </div>
)

const Product = ({
    id,
    product,
    productType,
    user,
    hasToShowProductDiscount,
    onClickProduct,
    userDiscountApplied,
    total,
    totalWithDiscount,
    onChangeQuantity,
    onChangeTotal,
    onChangeTotalWithDiscount,
    quantity,
    buyMode,
    quantityStep,
    updateState,
    displayBuyProductModal,
    translations,
}) => {
    const Wrapper = buyMode ? ProductBuyWrapper : ProductLinkWrapper;
    const productRendered = product.map((productData, index) => <ProductItem key={index} {...productData} />);
    const onClickArgs = { id, totalWithDiscount, quantity, userDiscountApplied };

    return (
        <Wrapper onClick={onClickProduct} productID={id} productType={productType}>
            {productRendered}

            {buyMode && <InputBuyItems
                total={total}
                onChangeTotal={onChangeTotal}
                user={user}
                hasToShowProductDiscount={hasToShowProductDiscount}
                userDiscountApplied={userDiscountApplied}
                totalWithDiscount={totalWithDiscount}
                onChangeTotalWithDiscount={onChangeTotalWithDiscount}
                quantity={quantity}
                onChangeQuantity={onChangeQuantity}
                quantityStep={quantityStep}
            />}
            <ProductButton
                buyMode={buyMode}
                onClick={onClickProduct}
                onClickArgs={onClickArgs}
                productID={id}
                updateState={updateState}
                displayBuyProductModal={displayBuyProductModal}
                translations={translations}
            />
        </Wrapper>
    )
}
export default Product;
