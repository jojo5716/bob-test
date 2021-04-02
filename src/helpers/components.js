import React, { Suspense } from 'react';

module.exports = {
    renderLazy,
};

function renderLazy(LazyComponent, props, fallback = null) {
    return (
        <Suspense fallback={fallback}>
            <LazyComponent {...props}/>
        </Suspense>
    );
}
