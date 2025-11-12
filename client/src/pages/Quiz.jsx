import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Quiz.css';
import QuizOptions from '../components/QuizOptions';

export default function Quiz() {
    return (
        <div className="quiz-container">
            <div className="title-div">
                <h1>Quiz Generation Options</h1>
                <p>
                    Please choose your preferences below to generate your
                    personalized quiz
                </p>
            </div>
            <QuizOptions />
        </div>
    );
}
