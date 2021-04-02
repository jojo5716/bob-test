import React from 'react';
import PropTypes from 'prop-types';


class Home extends React.Component {
    render() {
        return (
            <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                    <h4 className="mb-0 font-size-18">Home Page</h4>
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
