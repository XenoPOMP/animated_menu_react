// Импорты React
import React from 'react';
// Модуль стилей
import styles from './Header.module.scss';
// Импорт данных об проекте
import projectData from '../../project-data.json';

const Header = () => {
    return (
        <div className={styles.container}>
            {projectData.app_name}
        </div>
    );
};

export default Header;