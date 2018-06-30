import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form_login_username: "",
      form_login_password: ""
    };
  }

  render() {
    return (
      <div className="login">
        <article id="content">
          <div className="container" />
        </article>
        <div className="login-background">
          <div className="login-container">
            <p>
              <img src="https://proper-production-assets.s3.amazonaws.com/assets/al-logo-2ce311d829049e898f887acf7bbf7073984eb93b0d6c9b48f46ae98363fcdead.png" />
            </p>
            <div className="login-box">
              <h3>LOGIN</h3>
              <input
                value="accounts"
                type="hidden"
                name="user[subdomain]"
                id="user_subdomain"
              />
              <input
                value="false"
                type="hidden"
                name="user[link]"
                id="user_link"
              />
              <div className="login-input-container">
                <label htmlFor="user_email">Email</label>
                <input
                  autoFocus="autofocus"
                  placeholder="you@email.com"
                  type="text"
                  value=""
                  name="user[email]"
                  id="user_email"
                />
              </div>
              <div className="login-input-container password">
                <label htmlFor="user_password">Password</label>
                <input
                  placeholder="********"
                  type="password"
                  name="user[password]"
                  id="user_password"
                />
              </div>
            </div>
            <div className="login-actions-container">
              <div className="rememberme">
                <input name="user[remember_me]" type="hidden" value="0" />
                <input
                  type="checkbox"
                  value="1"
                  //   checked="checked"
                  name="user[remember_me]"
                  id="user_remember_me"
                />
                <label htmlFor="user_remember_me">Remember me</label>
              </div>
              <div className="underlined forgotpasswd">
                <a href="">I forgot my password</a>
              </div>
            </div>
            <div className="login-box">
              <input
                type="submit"
                name="commit"
                value="Log In →"
                className="btn orangebtn"
              />
            </div>
            <p className="no-accout">
              No account?{" "}
              <a href="https://authoritylabs.com/pricing/">
                Sign up for a free trial
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
