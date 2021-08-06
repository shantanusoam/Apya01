import React from "react";
import SignIn from "../../Component/sign-in/sign-in.component";
import SignUp from "../../Component/sign-up/sign-up.component";

import './sign-in-and-sign-up.style.scss'
const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn></SignIn>
        <SignUp/>
    </div>
)
export default  SignInAndSignUpPage;