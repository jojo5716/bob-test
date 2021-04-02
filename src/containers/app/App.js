import React from 'react';

import Header from '@views/commons/header';


class App extends React.Component {
    componentDidMount() {
        this.props.fetchCards();
    }

    render() {
        return (
            <div id="layout-wrapper">
                <Header />
                <div className="main-content">
                    <div className="page-content">
                        {this.props.children}
                    </div>
                    <footer className="footer">
                        2020 © Develop by Jonathan
                    </footer>
                </div>
            </div>
        );
    }
}

export default App;

App.propTypes = {};
App.defaultProps = {};
