import React from "react";
import { useSelector } from "react-redux";

const List = () => {

    const texts = useSelector(state => state.reverse.reverseTexts);

    if (texts.length === 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>No texts</h1>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <ul className="list-group">
            {texts.map((text, index) => (
                <li key={index} className="list-group-item">
                    <span className="badge badge-primary badge-pill">{text.palindrome ? "Palindrome" : "Not palindrome"}</span>
                    {text.text}
                </li>
            ))}
        </ul>
    );
}

export default List;