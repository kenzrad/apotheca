import React from "react";
import "./style.css";

export function LoginError() {
  return (
    <>
      <h3 className="loginModalText">Username/Password Not Found</h3>
      <p className="loginModalSubtext">Did you use the correct username and password combination?</p>
    </>
  );
}

export function DidntPutAnything() {
  return (
    <>
      <h3 className="loginModalText">You need to write something...</h3>
      <p className="loginModalSubtext">C'mon, at least try Admin and Password.</p>
      <p className="loginModalSubtext">Don't be lazy.</p>
    </>
  );
}

export function UserExists() {
  return (
    <>
      <h3 className="loginModalText">User already exists.</h3>
      <p className="loginModalSubtext">Please try a different username.</p>
    </>
  );
}

export function NoFirstName() {
  return (
    <>
      <h3 className="loginModalText">Please enter a name.</h3>
      <p className="loginModalSubtext">Otherwise we don't know what to call you.</p>
      <p className="loginModalSubtext">(It doesn't have to be your name, we don't mind.)</p>
    </>
  );
}

export function LoginNoUsername() {
  return (
    <>
      <h3 className="loginModalText">Please enter a username.</h3>
      <p className="loginModalSubtext">Can't log you in without one!</p>
    </>
  );
}

export function LoginNoPassword() {
  return (
    <>
      <h3 className="loginModalText">Please enter a password.</h3>
      <p className="loginModalSubtext">You should have one.</p>
    </>
  );
}

export function SignupNoUsername() {
  return (
    <>
      <h3 className="loginModalText">Please enter a username.</h3>
      <p className="loginModalSubtext">We kind of need one to sign you up.</p>
    </>
  );
}

export function SignupNoPassword() {
  return (
    <>
      <h3 className="loginModalText">Please enter a password.</h3>
      <p className="loginModalSubtext">Be sure to pick a strong one!</p>
    </>
  );
}

export function PasswordMismatch() {
  return (
    <>
      <h3 className="loginModalText">Passwords don't match</h3>
      <p className="loginModalSubtext">You'll get it this time, I'm sure of it.</p>
    </>
  );
}

export function QuizNotEmpty() {
  return (
    <>
      <h3 className="loginModalText">Did you finish the quiz?</h3>
      <p className="loginModalSubtext">We need all of the answers!</p>
    </>
  );
}