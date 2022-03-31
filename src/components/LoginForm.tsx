import React, { useState } from "react";
import { Iuser } from "../models/User";
interface Iprops {}
interface Istate {
  user: Iuser;
}

const LoginForm: React.FC<Iprops> = () => {
  let [state, setState] = useState<Istate>({
    user: {
      username: "",
      password: "",
    },
  });

  let updateInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setState({
      user: {
        ...state.user,
        [event.target.name]: event.target.value,
      },
    });
  };

  let login = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(state.user);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-4">
            <div className="card">
              <div className="card-header bg-primary text-white text-center">
                <h3>Login</h3>
              </div>
              <div className="card-body">
                <form onSubmit={login}>
                  <div className="mt-3 d-flex-center align-center">
                    <input
                      type="text"
                      name="username"
                      required={true}
                      value={state.user.username}
                      onChange={updateInput}
                      placeholder="Username/Email"
                    />
                  </div>
                  <div className="mt-3">
                    {" "}
                    <input
                      className="mt-3"
                      required={true}
                      value={state.user.password}
                      onChange={updateInput}
                      type="password"
                      name="password"
                      placeholder="Enter your password"
                    />
                  </div>

                  <input
                    type="submit"
                    className="btn btn-primary mt-3"
                    value="Login"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
