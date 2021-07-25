import React from 'react';
import { Link } from 'react-router-dom';

const home = () => (
    <div className='container'>
        <div className="jumbotron mt-5">
            <h1 className="display-4">Welcome!</h1>
            <p className="lead">This is a blog.</p>
            <hr className="my-4" />
            <p>Click the button below to enter.</p>
            <Link className="btn btn-primary btn-lg" to='/blog' role="button">Go to Blog</Link>
        </div>
    </div>
);

export default home;
