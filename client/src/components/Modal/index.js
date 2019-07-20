import React, { Component } from "react";
import "./style.css";

// HOW TO: MODAL COMPONENT
// Create modal with:
//
// <Modal name=[name of modal]>
//      <h1>Hey, I'm HTML code, put me here.</h1>
//      <p>I'll populate the modal no problem!</p>
// </Modal>
//
// If the modal's shown it will close if you click anywhere
// on the page that is not on the modal.
// To show the modal use: document.getElementsByName("[modal name here]")[0].classList.remove("hidden")
//
// document.getElementsByName("[modal name here]") returns a list of all elements with the name
// that you specify. DO NOT create a modal with a non-unique name or create multiple modals with
// the same name on the same page unless you can identify where they fall in the node list.
//
// You can pass any html into the modal, or another component. If you want to easily style the contents
// without styling the whole modal, just put them into a div and style the div.
//
// That's it. Ezpz.

document.addEventListener("click", e => {
    let target = e.target;
    let isModal = false;

    while (target.id !== "root") {
        if (target.classList.contains("modal") && !target.classList.contains("hidden")) {
            isModal = true;
        }

        target = target.parentElement;
    }

    if (!isModal) {
        for (let modal of document.getElementsByClassName("modal")) {
            if (!modal.classList.contains("hidden")) {
                modal.classList.add("hidden");
            }
        }
    }

});

class Modal extends Component {

    render() {
        return (
            <div className="modal hidden" {...this.props} />
        );
    }
}

export default Modal