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

export function Disclaimer() {
  return (
    <>
      <h3 className="loginModalText">APOTHECA DISCLAIMER</h3>
      <p className="loginModalSubtext">
        The content provided on this website is strictly for general
        informational purposes and should not be considered medical
        advice. No product/remedy information is intended to be taken as a
        diagnoses, treatment, or preventative for any disease.
            </p>
      <p className="loginModalSubtext">
        The information on this website has been accumulated from many
        published sources and websites and should be referred to as a
        guide. Apotheca cannot guarantee the accuracy of all the
        information provided on this website and accepts no liability in
        respect to omission or error.
            </p >
      <p className="loginModalSubtext">
        We are not responsible for any reaction or any sensitivity our
        practices and elements might cause to your skin. If you think you
        might have skin sensitivities, please consult a medical doctor or
        dermatologist before proceeding with our remedies.
            </p >
      <p className="loginModalSubtext">
        The information on this site has not been reviewed, evaluated, or
        approved by the Food and Drug Administration.
            </p>
      <p className="loginModalSubtext">
        If you do proceed to test the remedies we have provided, an
        allergy patch test is recommended if there is any concern or
        history for skin reactions or sensitivity.
            </p >
      <p className="loginModalSubtext">
        Any comments or feedback related to our website are individually
        biased and should not be taken as a form of legitimate medical
        advice.
            </p >
    </>
  );
}

export function Loading() {
  return (
    <>
      <img src={process.env.PUBLIC_URL + "/assets/images/loading.svg"} height="150" width="150" />
    </>
  );
}