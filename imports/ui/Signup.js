import React from 'react';
import { Link } from 'react-router-dom';

import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
      //count: this.props.count || 0
    };
    this.loginWithFacebook = this.loginWithFacebook.bind(this);
    this.loginWithGoogle = this.loginWithGoogle.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    if (password.length < 9) {
      return this.setState({ error: 'Password must be more than 8 character' });
    }

    Accounts.createUser({ email, password }, err => {
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '' });
      }
    });
  }
  loginWithFacebook() {
    Meteor.loginWithFacebook(
      { requestPermissions: ['public_profile', 'email'] },
      function(err) {
        if (err) {
          console.log('Handle errors here: ', err);
        }
      }
    );
  }
  loginWithGoogle() {
    Meteor.loginWithGoogle({}, function(err) {
      if (err) {
        console.log('Handle errors here: ', err);
      }
    });
  }
  render() {
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>Join</h1>

          {this.state.error ? <p>{this.state.error}</p> : undefined}

          <form
            className="boxed-view__form"
            noValidate
            onSubmit={
              this.onSubmit.bind(
                this
              ) /*bind(this) is mandatory to access the onSubmit inside the component*/
            }
          >
            <input
              type="email"
              ref="email"
              name="email"
              placeholder="youremail@yourserver.xxx"
            />
            <input
              type="password"
              ref="password"
              name="password"
              placeholder="Type your password here"
            />
            <button className="button">Create Account</button>
          </form>
          <p>
            <span className="button-console">
              <button
                onClick={this.loginWithFacebook}
                type="button"
                className="button button--fb"
              >
                {/* Login &nbsp; <i className="fab fa-facebook-square" /> */}
                <i className="fab fa-facebook-square fa-2x" />
              </button>
              &nbsp;&nbsp;&nbsp;
              <button
                onClick={this.loginWithGoogle}
                type="button"
                className="button button--gplus"
              >
                <i className="fab fa-google-plus-square fa-2x" />
              </button>
            </span>
          </p>
          <Link to="/">Already have one?</Link>
        </div>
      </div>
    );
  }
}
