import React, { Component } from "react";
import "./style.css";
// import comparisonArr from './comparisonArr.json';

let choices = ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"];

class Quiz extends Component {
    optionClickHandler = e => {
        let val = e.target.getAttribute("data-answer");
        let currQuestion = Array.from(document.getElementById("questions").childNodes).indexOf(e.currentTarget.parentElement);

        if (e.target.classList.contains("options") === false) {
            if (!e.target.classList.contains("chosen")) {
                choices[currQuestion] = val;
                this.props.handleQuiz(choices);
                e.target.classList.add("chosen");

                for (let child of e.currentTarget.childNodes) {
                    if (!child.classList.contains("chosen") && child.style.display !== "none") {
                        child.style.height = `${child.offsetHeight - 16}px`;
                        child.classList.add("hiddenOption");

                        setTimeout(() => {
                            child.style.display = "none";
                        }, 350);

                        setTimeout(() => {
                            if (currQuestion !== 9) {
                                document.getElementsByClassName("question")[currQuestion].classList.add("hidden");
                                document.getElementsByClassName("question")[currQuestion + 1].classList.remove("hidden");
                            }
                        }, 800)
                    }
                }
            } else {
                choices[currQuestion] = "empty";

                for (let child of e.currentTarget.childNodes) {
                    if (child.classList.contains("hiddenOption")) {
                        child.classList.remove("hiddenOption");
                        child.classList.add("showOption");
                        child.style.display = "";
                        setTimeout(() => {
                            child.classList.remove("showOption");
                            child.removeAttribute("style");
                        }, 320);
                    } else {
                        child.classList.remove("chosen");
                    }
                }
            }

        }
    }

    indicatorClickHandler = e => {

        console.log(Array.from(e.currentTarget.parentElement.childNodes).indexOf(e.currentTarget));
    }

    render() {
        return (
            <>
                <div id="questions">
                    <div className="question">
                        <h3>What is your age range?</h3>
                        <div className="options" onClick={this.optionClickHandler}>
                            <p data-answer="A">Under 20</p>
                            <p data-answer="B">20-30</p>
                            <p data-answer="C">30-50</p>
                            <p data-answer="D">Over 50</p>
                        </div>
                    </div>

                    <div className="question hidden">
                        <h3>When you wake up how is your skin?</h3>
                        <div className="options" onClick={this.optionClickHandler}>
                            <p data-answer="A">Irritated, red, and blotchy.</p>
                            <p data-answer="B">Greasy, oil build up.</p>
                            <p data-answer="C">Dry and flakey.</p>
                            <p data-answer="D">No issues, ready to go.</p>
                        </div>
                    </div>

                    <div className="question hidden">
                        <h3>Day-to-day your skin:</h3>
                        <div className="options" onClick={this.optionClickHandler}>
                            <p data-answer="A">Has visible pores along t-zone and oil build up throughout the day.</p>
                            <p data-answer="B">Is tight and irritated, has dry patches along the cheeks and chin.</p>
                            <p data-answer="C">Rarely gets and breakouts, has little pores long t-zone, and rarely any oil buildup.</p>
                            <p data-answer="D">Frequently has breakout and has irritated skin.</p>
                        </div>
                    </div>

                    <div className="question hidden">
                        <h3>Top skin concern:</h3>
                        <div className="options" data-question="4" onClick={this.optionClickHandler}>
                            <p data-answer="A">Hydration</p>
                            <p data-answer="B">Anti-Aging</p>
                            <p data-answer="C">Acne Control</p>
                            <p data-answer="D">Oil Control</p>
                        </div>
                    </div>

                    <div className="question hidden">
                        <h3>Skin tone:</h3>
                        <div className="options" data-question="5" onClick={this.optionClickHandler}>
                            <p data-answer="A">Fair</p>
                            <p data-answer="B">Medium-Fair</p>
                            <p data-answer="C">Medium-Dark</p>
                            <p data-answer="D">Dark</p>
                        </div>
                    </div>

                    <div className="question hidden">
                        <h3>How sensitive is your skin?</h3>
                        <div className="options" data-question="6" onClick={this.optionClickHandler}>
                            <p data-answer="A">Sensitive skin conditions (i.e.: eczema)</p>
                            <p data-answer="B">Breaks out easy and prone to irritation</p>
                            <p data-answer="C">Certain things make my skin react, but I'm usually okay.</p>
                            <p data-answer="D">Not sensitive.</p>
                        </div>
                    </div>

                    <div className="question hidden">
                        <h3>What best describes your current living environment:</h3>
                        <div className="options" data-question="7" onClick={this.optionClickHandler}>
                            <p data-answer="A">Rural Location</p>
                            <p data-answer="B">City Life</p>
                            <p data-answer="C">Humid</p>
                            <p data-answer="D">Dry</p>
                        </div>
                    </div>

                    <div className="question hidden">
                        <h3>How often do you wear sunscreen?</h3>
                        <div className="options" data-question="8" onClick={this.optionClickHandler}>
                            <p data-answer="A">Always</p>
                            <p data-answer="B">Often</p>
                            <p data-answer="C">Sometimes</p>
                            <p data-answer="D">Rarely</p>
                        </div>
                    </div>

                    <div className="question hidden">
                        <h3>Out of the following what is your top skin concern?</h3>
                        <div className="options" data-question="9" onClick={this.optionClickHandler}>
                            <p data-answer="A">Post-breakout scarring.</p>
                            <p data-answer="B">Sun-damage</p>
                            <p data-answer="C">Tight cheeks, chapped lips</p>
                            <p data-answer="D">Large, visible pores</p>
                        </div>
                    </div>

                    <div className="question hidden">
                        <h3>Out of the following what is your top skin concern?</h3>
                        <div className="options" data-question="10" onClick={this.optionClickHandler}>
                            <p data-answer="A">Wrinkles</p>
                            <p data-answer="B">Dehydrated skin</p>
                            <p data-answer="C">T-zone oil</p>
                            <p data-answer="D">Irritated/sensitve skin</p>
                        </div>
                    </div>
                </div>

                <div id="indicators">
                    <svg height="16" width="16" onClick={this.indicatorClickHandler}>
                        <circle cx="8" cy="8" r="8" stroke="transparent" />
                    </svg>
                    <svg height="16" width="16" onClick={this.indicatorClickHandler}>
                        <circle cx="8" cy="8" r="8" stroke="transparent" />
                    </svg>
                    <svg height="16" width="16" onClick={this.indicatorClickHandler}>
                        <circle cx="8" cy="8" r="8" stroke="transparent" />
                    </svg>
                    <svg height="16" width="16" onClick={this.indicatorClickHandler}>
                        <circle cx="8" cy="8" r="8" stroke="transparent" />
                    </svg>
                    <svg height="16" width="16" onClick={this.indicatorClickHandler}>
                        <circle cx="8" cy="8" r="8" stroke="transparent" />
                    </svg>
                    <svg height="16" width="16" onClick={this.indicatorClickHandler}>
                        <circle cx="8" cy="8" r="8" stroke="transparent" />
                    </svg>
                    <svg height="16" width="16" onClick={this.indicatorClickHandler}>
                        <circle cx="8" cy="8" r="8" stroke="transparent" />
                    </svg>
                    <svg height="16" width="16" onClick={this.indicatorClickHandler}>
                        <circle cx="8" cy="8" r="8" stroke="transparent" />
                    </svg>
                    <svg height="16" width="16" onClick={this.indicatorClickHandler}>
                        <circle cx="8" cy="8" r="8" stroke="transparent" />
                    </svg>
                    <svg height="16" width="16" onClick={this.indicatorClickHandler}>
                        <circle cx="8" cy="8" r="8" stroke="transparent" />
                    </svg>
                </div>

                <button onClick={this.props.signup}>Submit</button>
            </>
        );
    }
}

export default Quiz;
