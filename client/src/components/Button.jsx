import React from 'react';
import '../styles/variables.css';
import '../styles/Button.css';

export default function Button({ text }) {
    return <button className="btn">{text}</button>;
}
