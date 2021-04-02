import React from 'react';

import Card from '@components/Card';

class Home extends React.Component {

    renderCard(card, index) {
        console.log(card);
        return <Card key={index} {...card} />;
    }

    render() {
        const cardsRendered = this.props.cards.map(this.renderCard);

        return (
            <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                    <h4 className="mb-0 font-size-18">Home Page</h4>
                </div>
                <div className="row g-5 py-5">
                    {cardsRendered}
                </div>
            </div>
        );
    }
}

export default Home;

Home.propTypes = {
};

Home.defaultProps = {
};
