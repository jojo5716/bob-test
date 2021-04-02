const createHistory = require('history').createBrowserHistory;

let history;

module.exports = {
    getHistory,
    generateHistory,
    pushToHistory,
    historyListener,
};

export default getHistory();

function getHistory() {
    return history;
}

function historyListener(location, action) {
    setTimeout(() => {
        if (action !== 'POP') {
            window.scrollTo(0, 0);
        }
    });
}

function generateHistory() {
    history = createHistory();

    history.listen(historyListener);

    return history;
}

function pushToHistory(url, historyInstance = null) {
    const historyObj = historyInstance || getHistory();

    historyObj.push(url);
}
