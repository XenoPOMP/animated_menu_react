import React, {FC} from 'react';
import styles from './DirectLink.module.scss';

interface props {
    link : string
}

const DirectLink : FC<props> = ({link}) => {
    return (
        <a className={styles.link} href={link}>{link}</a>
    );
};

export default DirectLink;