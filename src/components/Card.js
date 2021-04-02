import React from 'react';
import PropTypes from 'prop-types';


class Card extends React.Component {

    render() {
        return (
            <div className="feature col-md-4">
                <div className="feature-icon bg-primary bg-gradient"></div>
                <h2>{this.props.name}</h2>
                <p>Bags: {this.props.bags}</p>

                <a href="#" className="icon-link">
                    Add bag
                </a>
            </div>
        );
    }
}

export default Card;

Card.propTypes = {
    name: PropTypes.string,
    bags: PropTypes.number,
};
