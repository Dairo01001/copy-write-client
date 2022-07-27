import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addText } from '../redux/actions';
import {getText} from '../utils/text';

const NavBar = () => {

    const dispatch = useDispatch();
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getText(text).then(res => {
            dispatch(addText(res));
            setText('');
        }).catch(err => {
            alert("Error: " + err.error);
            console.log(err);
        });
    };

    return (
        <nav className="navbar">
            <div className="container-fluid">
                <form className="input-group" role="search" onSubmit={handleSubmit}>
                    <input required value={text} onChange={handleChange} className="form-control me-2 " type="text" placeholder="Insert text" aria-label="Insert text" />
                    <button className="btn btn-outline-success" type="submit">Send</button>
                </form>
            </div>
        </nav>
    );
};

export default NavBar;