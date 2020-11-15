import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class TopRatedSellers extends Component {
    render() {
        /* const { user } = this.props.auth; */
        
        return(
            <div className="content">
                <div className="top__rated__container">
                    <div className="top__rated__header">
                        <h3 className="top__rated__title">Top Rated Sellers</h3>
                    </div>
                </div>
            </div>
        )
    }
}

TopRatedSellers.propTypes = {
    auth: PropTypes.object.isRequired
};

export default TopRatedSellers;