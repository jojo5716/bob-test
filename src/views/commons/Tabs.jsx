import React from 'react';


const tabItemClass = 'tabs__item';

const Tab = ({ icon, label, tabKey, activeTab, setActiveTab, tightTab }) => {
    const customTabItemClass = tightTab ? `${tabItemClass} tabs__item--tight` : tabItemClass;
    const activeTabItemClass = `${customTabItemClass} tabs__item--active`;

    return (
        <a className={activeTab === tabKey ? activeTabItemClass : customTabItemClass}
            onClick={() => setActiveTab(tabKey)}>
            <i className={`icon icon-${icon}`} />
            {label}
        </a>
    )
};

const Tabs = ({ products, activeTab, setActiveTab, translations, addHistory = true }) => {
    return (
        <div className="tabs__wrapper">
            {Object.keys(products).map((product, index) => <Tab
                key={index}
                activeTab={activeTab}
                tabKey={product}
                setActiveTab={setActiveTab}
                {...products[product]}

            />)}
            {addHistory && (
                <Tab
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    label={translations.history}
                    tightTab='true'
                    tabKey='history'
                    icon='alarm'
                />
            )
            }
        </div>
    )
};

export default Tabs;
