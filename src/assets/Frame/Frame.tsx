import React from 'react';
import styles from './Frame.module.scss';
import Header from "../UI/Header/Header";
import Content from "../UI/Content/Content";

const Frame = () => {
    return (
        <div>
            <Header />
            <Content />
        </div>
    );
};

export default Frame;