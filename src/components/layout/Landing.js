import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import queryString from "query-string";
import { googleUser } from "../../actions/authActions";

class Landing extends Component {
    componentDidMount() {
        // If logged in and user navigates to Login page, should redirect them to dashboard
        var query = queryString.parse(this.props.location.search);
    
        if (query.token) {
            this.props.googleUser(query.token);
            this.props.history.push("/dashboard");
        }
        
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
    }

    render() {
        return (
            <div style={{ height: "75vh" }} className="container valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">
                        <h4>
                            <b>Build</b> a login/auth app with the{" "}
                            <span style={{ fontFamily: "monospace" }}>MERN</span> stack from
                            scratch
                        </h4>
                        <p className="flow-text grey-text text-darken-1">
                            Create a (minimal) full-stack app with user authentication via
                            passport and JWTs
                        </p>
                        <br />
                        <div className="col s6">
                            <Link
                                to="/register"
                                style={{
                                    width: "140px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"
                                }}
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                                Register
                            </Link>
                        </div>
                        <div className="col s6">
                            <Link
                                to="/login"
                                style={{
                                    width: "140px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"
                                }}
                                className="btn btn-large btn-flat waves-effect white black-text"
                            >
                                Log In
                            </Link>
                        </div>
                        
                    </div>
                    {/* <div className="col s12 center-align">
                        <div className="col s12">
                            <GoogleLoginButton style = {{ width: 250 }} onClick={ () => { 
                                window.location = "http://localhost:5000/api/users/google";
                            }} />

                            <FacebookLoginButton style = {{ width: 250 }} onClick={ () => { 
                                window.location = "http://localhost:5000/api/users/facebook";
                            }} />
 */}
                            {/* <TwitterLoginButton style = {{ width: 250 }} onClick={ () => { 
                                window.location = "http://localhost:5000/api/users/twitter";
                            }} /> */}

                            {/* <GithubLoginButton style = {{ width: 250 }} onClick={ () => { 
                                window.location = "http://localhost:5000/api/users/github";
                            }} />
                        </div>
                    </div> */}
                </div>
            </div>
        );
    }
}

Landing.propTypes = {
    googleUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { googleUser }
)(withRouter(Landing));
