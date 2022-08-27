// Импорты React
import React, {useRef, useState} from 'react';
// Модуль стилей
import styles from './Content.module.scss';
// Импорты иконок (изображений)
import homeIcon from '../../images/icons/home.svg';
import searchIcon from '../../images/icons/search.svg';
import signIcon from '../../images/icons/sign.svg';
// Импорт компонентов проекта
import DirectLink from "../DirectLink/DirectLink";
// Импорт данных об проекте
import projectData from '../../project-data.json';

const Content = () => {
    // Объект, который хранит все стили, применяемые к контейнеру
    // при переходе из одного состояния в другое
    const styleStates = {
        "home" : {
            "itself" : styles.home,
            "to" : {
                "home" : undefined,
                "search" : styles.fromHomeToSearch,
                "about" : styles.fromHomeToAbout
            }
        },
        "search" : {
            "itself" : styles.search,
            "to" : {
                "home" : styles.fromSearchToHome,
                "search" : undefined,
                "about" : styles.fromSearchToAbout
            }
        },
        "about" : {
            "itself" : styles.about,
            "to" : {
                "home" : styles.fromAboutToHome,
                "search" : styles.fromAboutToSearch,
                "about" : undefined
            }
        },
    };

    // Хук useRef из ReactJS:
    // Позволяет доставать элемент из DOM дерева React
    // и использовать его в скрипте.
    // В сыром JS сы используем теги или идентификаторы, чтобы получить доступ к
    // элементу
    const container = useRef(null);
    // Хук useState из ReactJS:
    // Позволяет инициализировать некое состояние
    // и изменять его в процессе выполнения кода
    const [containerState, setContainerState] = useState("home");

    // Функция, которая управляет анимацией контейнера.
    // Анимация построена на переключении классов
    const changeContainer = (state : string) => {
        // Если в аргумент state было передано пустое значение,
        // прекратить выполнение функции
        if (!state) return;

        // Получаем ссылку на DOM элемент нашего контейнера
        const element = container.current;
        // @ts-ignore
        // Проверяем, не нажал ли пользователь два раза на одну и туже кнопку
        // Если не нажимал, то добавляем контейнеру класс, отвечающий за
        // анимацию перехода из состояния containerState в состояние state
        if (!(styleStates[containerState].to[state] === undefined)) {
            // @ts-ignore
            element.classList.replace(element.classList[1], styleStates[containerState].to[state]);
        }
        // Если пользователь таки нажал на одну и туже кнопку дважды,
        // то присваиваем контейнеру `itself` класс из styleStates
        else {
            // @ts-ignore
            element.classList.replace(element.classList[1], styleStates[state].itself);
        }

        // Меняем состояние контейнера на состояние, предоставленное в качестве аргумента
        // в этой функции
        setContainerState(state);
    }

    return (
        <div ref={container} className={`${styles.container} ${styles.home}`}>
            <div className={styles.buttonGrid}>
                <button onClick={() => changeContainer('home')}>
                    <img src={homeIcon} alt={'home-icon'} />
                </button>

                <button onClick={() => changeContainer('search')}>
                    <img src={searchIcon} alt={'search-icon'} />
                </button>

                <button onClick={() => changeContainer('about')}>
                    <img src={signIcon} alt={'sign-icon'} />
                </button>
            </div>

            <div className={styles.content}>
                <div className={styles.field}></div>

                <div className={styles.field}>
                    <input placeholder={'Search'} />
                </div>

                <div className={`${styles.field} ${styles.about}`}>
                    <h1>About</h1>

                    <div className={styles.state}>
                        <span className={styles.header}>Author: </span>
                        XenoPOMP (Alexander Naumov, Russia)
                    </div>

                    <div className={styles.state}>
                        <span className={styles.header}>GitHub repository: </span>
                        <DirectLink link={projectData.links.github} />
                    </div>

                    <div className={styles.state}>
                        <span className={styles.header}>App version: </span>
                        {projectData.version}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;