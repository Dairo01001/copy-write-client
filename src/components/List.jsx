import React from "react";
import { useSelector } from "react-redux";

const List = () => {

    const texts = useSelector(state => state.reverse.reverseTexts);

    return (
        <div style={{ marginTop: '20px' }}>
            <h2>Results:</h2>
            <div className="container">
                <ul className="list-group gap-3">
                    {texts.map((text, index) => (
                        <li key={index} className={`list-group-item d-flex justify-content-between align-items-center border ${text.palindrome ? "border-success" : "border-warning"} p-2`}>
                            {text.text}
                            <span className="badge bg-primary rounded-pill">{text.palindrome ? "Palindrome" : "Not Palindrome"}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default List;