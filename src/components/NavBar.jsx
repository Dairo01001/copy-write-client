import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addText } from '../redux/actions';

const NavBar = () => {

    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addText({ text: text, palindrome: false }));
        setText('');
    };

    return (
        <nav className="navbar bg-dark">
            <div className="container-fluid">
                <form className="d-flex" role="search" onSubmit={handleSubmit}>
                    <input value={text} onChange={handleChange} className="form-control me-2" type="text" placeholder="Insert text" aria-label="Insert text" />
                    <button className="btn btn-success" type="submit">Send</button>
                </form>
            </div>
        </nav>
    );
};

export default NavBar;