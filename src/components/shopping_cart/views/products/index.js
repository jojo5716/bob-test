import React from 'react';
import PropTypes from 'prop-types';

import ProductView from './Product.jsx';

const INITIAL_QUANTITY = 1;


class Product extends React.Component {
    constructor(props) {
        super(props);
        const userDiscount = props.user.discountValue;
        this.state = {
            total: props.price,
            totalWithDiscount: this.calculateTotalWithDiscount(props.price, userDiscount),
            quantity: INITIAL_QUANTITY,
            stock: props.stock - INITIAL_QUANTITY,
            userDiscountApplied: userDiscount,
            displayBuyProductModal: false,
        };
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onChangeTotal = this.onChangeTotal.bind(this);
        this.onChangeTotalWithDiscount = this.onChangeTotalWithDiscount.bind(this);
        this.onClickBuyItem = this.onClickBuyItem.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    buildProductsData() {
        return this.props.fieldsToShow.map(fieldToShow => (
            {
                value: this.props[fieldToShow.field],
                className: fieldToShow.className,
                id: this.props.id,
                fieldName: fieldToShow.field,
            }
        ));
    }

    calculateTotalWithDiscount(total, userDiscount) {
        const totalWithDiscount = total - ((total * userDiscount) / 100);

        return parseFloat(totalWithDiscount.toFixed(2));
    }

    onChangeQuantity(event) {
        const newQuantity = parseFloat(event.target.value);
        const newTotal = this.props.price * newQuantity;
        const totalWithDiscount = this.calculateTotalWithDiscount(newTotal, this.props.user.discountValue);

        this.setState({
            quantity: newQuantity,
            total: newTotal.toFixed(2),
            stock: this.props.stock - newQuantity,
            totalWithDiscount,
        });
    }

    onChangeTotal(event) {
        const newTotal = parseFloat(event.target.value);
        const newQuantity = newTotal / this.props.price;
        const newTotalWithDiscount = this.calculateTotalWithDiscount(newTotal, this.props.user.discountValue);

        const newState = {
            total: newTotal,
            // quantity: newQuantity.toFixed(2),
            totalWithDiscount: newTotalWithDiscount,
        };

        if (this.props.updateQuantityOnChangeTotal) {
            newState.quantity = newQuantity.toFixed(2);
        }

        this.setState(newState);
    }

    onChangeTotalWithDiscount(event) {
        const newTotalWithDiscount = parseFloat(event.target.value);
        const newDiscountApplied = 100 - (100 * newTotalWithDiscount) / this.props.price;

        this.setState({
            totalWithDiscount: newTotalWithDiscount,
            userDiscountApplied: newDiscountApplied.toFixed(2),
        });
    }

    onClickBuyItem(item) {
        if (this.props.buyMode) {
            this.props.onClickProduct(this.props.user.partnerId, item);
        } else {
            this.props.onClickProduct(this.props.id, this.props.productType);
        }
    }

    updateState(state, value) {
        this.setState({
            [state]: value,
        });
    }

    render() {
        return (
            <ProductView
                {...this.props}
                {...this.state}
                product={this.buildProductsData()}
                onChangeQuantity={this.onChangeQuantity}
                onChangeTotal={this.onChangeTotal}
                onChangeTotalWithDiscount={this.onChangeTotalWithDiscount}
                onClickProduct={this.onClickBuyItem}
                updateState={this.updateState}
            />
        );
    }
}

export default Product;


Product.propTypes = {
    hasToShowProductDiscount: PropTypes.bool,
    onClickProduct: PropTypes.func,
    translations: PropTypes.obj,
    updateQuantityOnChangeTotal: PropTypes.bool,
};

Product.defaultProps = {
    hasToShowProductDiscount: true,
    updateQuantityOnChangeTotal: false,
    onClickProduct: () => {},
    translations: {},
};
