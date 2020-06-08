import React from 'react';

import Heart from "../../accets/images/header-bar/heart.svg";
import Search from "../../accets/images/header-bar/search.svg";
import Vk from "../../accets/images/header-bar/vk.svg";
import Instagram from "../../accets/images/header-bar/instagram.svg";
import User from "../../accets/images/header-bar/user.svg";
import Arrow from "../../accets/images/header-bar/arrow.svg";
import Clear from "../../accets/images/header-bar/clear.svg";

import "./header.css";
import openSearcher from "./services/open-searcher";
import clearQuery from "./services/clear-query";
import checkAdvices from "./services/check-advices";

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="d-flex justify-content-between">
                    <div className="d-flex">
                        <img src={Heart} alt="Heart" />
                        <p className="header-item">Собрано 6 234 234 ₽ для инвалидов</p>
                    </div>

                    <div
                        id="search-button"
                        className="d-flex ml-2"
                        onClick={() => openSearcher()}
                    >
                        <img src={Search} alt="Search" />
                        <p className="header-item searcher">Поиск</p>
                    </div>

                    <div className="d-flex">
                        <img src={Vk} alt="Vk" />
                        <p className="header-item">Вконтакте</p>
                    </div>

                    <div className="d-flex">
                        <img src={Instagram} alt="Instagram" />
                        <p className="header-item">Instagram</p>
                    </div>

                    <div className="d-flex">
                        <img src={User} alt="User" />
                        <p className="header-item">Войти</p>
                    </div>

                    <div className="d-flex">
                        <p className="header-item">Рус</p>
                        <img src={Arrow} alt="Arrow" />
                    </div>
                </div>
            </div>

            {/* This is a hidden search's modal window */}

            <div className="d-flex justify-content-center">
                <div className="d-flex">
                    <div className="modal-window-container shadow border-0 rounded">
                        <input
                            id="search-modal-window"
                            className="search-modal-window d-none border-0 rounded"
                            placeholder="Введите фразу для поиска"
                            onChange={() => checkAdvices()}
                        />
                    </div>
                </div>

                <img
                    id="search-cleaner"
                    className="search-cleaner d-none"
                    src={Clear}
                    alt="Clear"
                    onClick={() => clearQuery()}
                />
            </div>
        </header>
    );
}

export default Header;
