import React from 'react';
import PropTypes from 'prop-types';
import update from 'react-addons-update';

import Tabs from '@views/commons/Tabs.jsx';
import TableHeader from '@views/commons/TableHeader.jsx';
import { findProductByName } from '@src/helpers/products';

import Filters from './views/Filters.jsx';
import Product from './views/products';
import History from './views/History.jsx';


class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
        this.setActiveTab = this.setActiveTab.bind(this);
        this.updateState = this.updateState.bind(this);
        this.onChangeFilter = this.onChangeFilter.bind(this);

        this.state = {
            activeTab: Object.keys(props.products)[0],
            products: props.products,
        };
    }

    setActiveTab(tab) {
        this.setState({
            activeTab: tab,
        });
    }

    updateState(state, value) {
        this.setState({
            [state]: value,
        });
    }

    renderProducts() {
        const category = this.state.products[this.state.activeTab] || {};
        const productsHasDiscount = this.props.user.discountValue && category.hasToShowProductDiscount;
        const products = category.products || [];
        const fieldsToShow = category.fieldsToShow || [];
        const productsRendered = products.map((product, index) => {
            let html;

            if ((product.stock && product.active) || this.props.showAll) {
                html = (
                    <Product
                        key={`${this.state.activeTab}-${index}`}
                        {...product}
                        user={this.props.user}
                        hasToShowProductDiscount={category.hasToShowProductDiscount}
                        onClickProduct={this.props.onClickProduct}
                        fieldsToShow={category.fieldsToShow}
                        buyMode={this.props.buyMode}
                        productType={this.state.activeTab}
                        translations={this.props.translations}
                        quantityStep={category.quantityStep || 1}
                    />
                );
            } else {
                html = null;
            }

            return html;
        });

        return (
            <div className="table">
                <TableHeader
                    productsHasDiscount={productsHasDiscount}
                    fieldsToShow={fieldsToShow}
                    buyMode={this.props.buyMode}
                    translations={this.props.translations}
                />
                {productsRendered}
            </div>
        );
    }

    renderCreateButton() {
        return (
            <div className="button__card-wrapper">
                <a
                    onClick={() => this.props.onClickCreateButton(this.state.activeTab)}
                    className="button button--mixed"
                >
                    <span className="icon icon-plus-circle" />
                    {this.props.createButtonTitle}
                </a>
            </div>
        );
    }

    onChangeFilter(event) {
        const value = event.target.value.toLowerCase();
        const products = findProductByName(this.props.products[this.state.activeTab].products, value);

        const newState = update(this.state, {
            products: {
                [this.state.activeTab]: {
                    products: { $set: products },
                },
            },
        });

        this.setState({ ...newState });

    }

    render() {
        let tabContent;
        let filterRendered;
        if (this.state.activeTab !== 'history') {
            tabContent = this.renderProducts();
            filterRendered = <Filters onChange={this.onChangeFilter} translations={this.props.translations} />;
        } else {
            tabContent = <History history={this.props.user.purchaseHistory} translations={this.props.translations} />;
        }

        return (
            <React.Fragment>
                <Tabs
                    activeTab={this.state.activeTab}
                    setActiveTab={this.setActiveTab}
                    products={this.props.products}
                    addHistory={this.props.buyMode}
                    translations={this.props.translations}
                />
                {filterRendered}
                {this.props.displayCreateButton && this.renderCreateButton()}
                {tabContent}
            </React.Fragment>
        );
    }
}

export default ShoppingCart;

ShoppingCart.propTypes = {
    createButtonTitle: PropTypes.string,
    buyMode: PropTypes.bool,
    showAll: PropTypes.bool,
    displayCreateButton: PropTypes.bool,
    onClickProduct: PropTypes.func,
    onClickCreateButton: PropTypes.func,
    translations: PropTypes.obj,
};

ShoppingCart.defaultProps = {
    buyMode: true,
    onClickProduct: () => { },
    onClickCreateButton: () => { },
    displayCreateButton: false,
    showAll: false,
    translations: {},
};
