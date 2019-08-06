import React from 'react';
import Header from '../header/Header';

const componentWithLayout = PrevComponent => {
    const newComponent = () => (
        <div>
            <Header title="Florida productos vetrinarios" />
            <PrevComponent />
            <div>Rights reserved FPV Fackers!</div>
        </div>
    );

    return newComponent;
};

export default componentWithLayout;