import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { PostData } from '../../services/PostData';
class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            redirectToReferrer: false
        };
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    login() {
        if (this.state.username && this.state.password) {
            PostData('login', this.state).then((result) => {
                let responseJson = result;
                if (responseJson.userData) {
                    sessionStorage.setItem('userData', JSON.stringify(responseJson));
                    this.setState({ redirectToReferrer: true });
                }
                else
                    alert(result.error);
            });
        }
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        if (this.state.redirectToReferrer) {
            return (<Redirect to={'/home'} />)
        }
        if (sessionStorage.getItem('userData')) {
            return (<Redirect to={'/home'} />)
        }
        return (
            <div className="login bg-signin">
                <div className="container ">
                    <div className="row">
                        <div className="col-md-6 m-auto bg-dark-soft">
                            <br />
                            <h2 className="display-4 text-center text-white">Sign in</h2>
                            <br />
                            <p className="lead text-center text-white">
                                Sign in to your account
              </p>
                            <form onSubmit={this.onSubmit}>
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.onChange}></input>
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.onChange}></input>


                                <input type="submit" className="btn btn-warning btn-block mt-4" />

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Login;