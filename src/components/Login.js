import React from "react";

export default function Login() {
  return (
    <div className="row ">
      <form className="col-6 offset-3 ">
        <img
          className="mb-4"
          src="./img/logo.svg"
          alt=""
          width="72"
          height="57"
        />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <label htmlFor="inputEmail" className="visually-hidden">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control mb-1"
          placeholder="Email address"
          required=""
          autoFocus=""
        />
        <label htmlFor="inputPassword" className="visually-hidden">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control mb-2"
          placeholder="Password"
          required=""
        />

        <button className="w-100 btn btn-lg btn-info" type="submit">
          {" "}
          Sign in{" "}
        </button>
      </form>
    </div>
  );
}
