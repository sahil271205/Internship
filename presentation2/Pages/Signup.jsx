import React from "react";
import BlueButton from "../Components/BlueButton";
export default function Signup() {
    return (
        <>
            <section className="body">
                <div className="signinbox">
                    <h2 className="my-5">Please Sign Up</h2>
                    <div className="inputbox">
                        <input type="text" className="form-control" placeholder="First Name" />
                        <input type="text" className="form-control my-2" placeholder="Last Name" />
                        <input type="email" className="form-control my-2" placeholder="Email ID" />
                        <input type="text" className="form-control my-2" placeholder="Password" />
                        <input type="text" className="form-control my-2" placeholder="Confirm Password" />
                        <a href="/Home">
                            <BlueButton Text="SIGNUP"></BlueButton>
                        </a>
                    </div>
                    <div className="my-4">
                        <a href="/Signup" className="mx-3">Already have an Account?</a>
                    </div>
                </div>
            </section>
        </>
    )
}