import React from 'react';
import BuildIcon from '@mui/icons-material/Build';
import { Link } from 'react-router-dom';
import './Error.UnderDevelopment.scss'

export default function UnderDevelopment() {
    return (
        <div className='not-found-container'>
            <h1 className='error-title'>This feature is under development</h1>
            <BuildIcon sx={{ fontSize: "40px" }} />
            <p className='error-description'>Thank you for your interest in this feature, but it is currently in development. We will complete this feature as soon as possible.</p>
            <p className='homepage'>
                <Link to="/">Return to home page</Link>
            </p>
        </div>
    );
};