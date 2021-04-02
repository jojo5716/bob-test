import React from 'react';


export const FieldName = ({ fieldName, className }) => (
    <div className={`table__col ${className}`}>
        {fieldName}
    </div>
)

const BuyHeader = ({ productsHasDiscount, translations }) => (
    <React.Fragment>
        <div className="table__col table__col--quantity">
            {translations.quantity}
        </div>
        <div className="table__col table__col--quantity">
            {translations.total}
        </div>
        {productsHasDiscount ? <div className="table__col table__col--discount">{translations.totalWithDiscount}</div> : null}
    </React.Fragment>
)
const TableHeader = ({ fieldsToShow, productsHasDiscount, buyMode, translations }) => (
    <div className="table__row table__row--header">
        {fieldsToShow.map((field, index) => <FieldName key={index} {...field} />)}
        {buyMode && <BuyHeader productsHasDiscount={productsHasDiscount} translations={translations} />}
        <div className="table__col table__col--cart-btn" />
    </div>
)

export default TableHeader;