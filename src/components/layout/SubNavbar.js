import React, { Component } from "react";
import { Link } from "react-router-dom";

class SubNavbar extends Component {
    render() {
        return (
            <header className="navbar navbar-expand-md subnabvar__dashboard">
                <button className="navbar-toggler subnavbar__toggler" type="button" data-toggle="collapse" data-target="#subnavbar__collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars subnavbar__menu__icon"></i>
                </button>
                <div className="container">
                    <nav class="collapse navbar-collapse subnavbar__collapse" id="subnavbar__collapse">
                        <ul class="navbar-nav">
                            <li className="nav-item subnabvar__item__props subnavbar__form__container">
                                <form class="subnavbar__form">
                                    <input type="text" id="search_domain_input" autocomplete="off" class="form-control input-md subnavbar__input dropdown-toggle" placeholder="Store Search" data-toggle="dropdown" aria-expanded="true"></input>
                                   
                                    <button class="btn btn-sm subnavbar__form__btn"><i class="fa fa-search"></i></button>
                                </form>
                            </li>
                            <li className="nav-item ">
                                <Link
                                    id="xpathsDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    className="nav-link dropdown-toggle subnavbar__text"
                                    >
                                        XPATH Tools
                                </Link>
                                <div className="dropdown-menu xpaths__menu" aria-labelledby="xpathsDropdown">
                                </div>
                            </li>
                            <li className="nav-item nav__item__props">
                                <Link
                                    id="asinDropdown"
                                    role="button"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    className="nav-link dropdown-toggle subnavbar__text"
                                    >
                                        ASIN Tools
                                </Link>
                                <div className="dropdown-menu asin__menu" aria-labelledby="asinDropdown">
                                </div>
                            </li>
                            <li className="nav-item nav__item__props">
                                <Link
                                    to="/TopRatedSellers"
                                    className="nav-link subnavbar__text"
                                    >
                                        Top Rated Sellers
                                </Link>
                            </li>
                            <li className="nav-item nav__item__props">
                                <Link
                                    className="nav-link subnavbar__text"
                                    >
                                        Discount List
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default SubNavbar;