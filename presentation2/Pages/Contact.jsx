import React from "react";
import "./contact.css"
import ProfileCard from "../Components/ProfileCard";
export default function Contact(){
    return(
        <>
            <div className="contactbox">
                <div className="contact-header">
                    <h1>THE TEAM</h1>
                </div>
                <p className="text-white text-center my-5 heading">Members</p>
                <div className="card-group">
                    <ProfileCard name="Akshith Rai" usn="4sf21cy179" email="akshith.21cy@sahyadri.edu.in"></ProfileCard>
                    <ProfileCard name="Akshith Rai" usn="4sf21cy179" email="akshith.21cy@sahyadri.edu.in"></ProfileCard>
                    <ProfileCard name="Akshith Rai" usn="4sf21cy179" email="akshith.21cy@sahyadri.edu.in"></ProfileCard>
                    <ProfileCard name="Akshith Rai" usn="4sf21cy179" email="akshith.21cy@sahyadri.edu.in"></ProfileCard>
                    <ProfileCard name="Toshan S M" usn="4sf21cs179" email="toshan.21cs@sahyadri.edu.in"></ProfileCard>
                </div>
            </div>
        </>
    )
}