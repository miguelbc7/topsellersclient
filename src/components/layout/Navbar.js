import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <header className="navbar navbar-expand-md navbar__dashboard">
                <div className="container navbar__container">
                    <div class="navbar__header">
                        <Link
                            to="/"
                            className="nav-link navbar__title"
                            >
                                <i className="fa fa-code"></i>
                                Tactical Bucket
                        </Link>
                        <button className="navbar-toggler navbar__toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa fa-cog navbar__menu__icon"></i>
                        </button>
                    </div>
                    
                    <nav class="collapse navbar-collapse">
                        <ul className="navbar-nav navbar__left">
                            <li className="nav-item navbar__item__notification dropdown notifications__dropdown__bubble">
                                <Link
                                    to="/"
                                    id="navbarDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    className="nav-link"
                                    >
                                        <div className="col-2">
                                            <span className="navbar__pulse">
                                                <i className="fa fa-bell navbar__notifications__icon"></i>
                                            </span>
                                        </div>
                                        <div className="col-2">
                                            <span className="navbar__notifications__text">&nbsp;Notifications</span>
                                        </div>
                                        <div className="col-2 navbar__absolute__col">
                                            <span class="badge badge-danger navbar__notifications__badge">949</span>
                                        </div>
                                    </Link>
                                <div className="dropdown-menu notifications__menu" aria-labelledby="navbarDropdown">
                                </div>
                            </li>
                        </ul>
                        <ul className="navbar-nav navbar__right">
                            <li className="nav-item navbar__item__props">
                                <i className="fa fa-plus navbar__icon"></i>
                                <Link
                                    className="nav-link navbar__text"
                                    >
                                        Upcoming Stores
                                </Link>
                            </li>
                            <li className="nav-item navbar__item__props">
                                <i className="fa fa-hourglass-end navbar__icon"></i>
                                <Link
                                    to="/"
                                    className="nav-link navbar__text"
                                    >
                                        TA Coverage
                                </Link>
                            </li>
                            <li className="nav-item navbar__item__props">
                                <i className="fa fa-question navbar__icon"></i>
                                <Link
                                    to="/"
                                    className="nav-link navbar__text"
                                    >
                                        Support
                                </Link>
                            </li>
                            <li className="nav-item navbar__item__props dropdown profile__dropdown__bubble">
                                <i className="fa fa-user navbar__icon"></i>
                                <Link
                                    to="/"
                                    id="profileDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    className="nav-link dropdown-toggle navbar__text"
                                    >
                                        Profile
                                </Link>
                                <ul className="dropdown-menu profile__menu" aria-labelledby="profileDropdown">
                                    <li className="dropdown-item">
                                        <i className="fa fa-user profile__dropdown__icon"></i>
                                        <Link
                                            to="/"
                                            className=" profile__dropdown__text"
                                            >
                                                Account Details
                                        </Link>
                                    </li>
                                    <li className="dropdown-item">
                                        <i className="fas fa-sign-out-alt profile__dropdown__icon"></i>
                                        <Link
                                            to="/"
                                            className="profile__dropdown__text"
                                            >
                                                Logout
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Navbar;