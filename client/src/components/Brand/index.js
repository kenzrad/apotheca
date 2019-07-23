import React from "react";
import "./style.css";


export function Brand() {
    return (
        <div>
            <div className="brand-div">APOTHECA</div>
        </div>
    );
}

export function BrandStatement() {
    return (
    <>
        <p className="brandStatementText">Apotheca is a personalized resource on natural skincare. Welcome to Apotheca. We provide personalized skin care information to reveal how our holistic elements can enhance, maintain, and sustain your natural beauty.</p>
        <p className="brandStatementSubtext">If you are new to Apotheca, please sign in to discover your libra. During sign up, we will ask you questions to help customize your natural beauty experience.</p>
        <p className="brandStatementSubtext">If you are already a member, welcome back! Please log in to continue the Apotheca experience.</p>
        <p className="brandStatementSubtext">If you do not want to join our Apotheca Community at this time, please feel free to browse our current articles, natural elements and remedies pages.</p>
    </>
    );
}

export default Brand;