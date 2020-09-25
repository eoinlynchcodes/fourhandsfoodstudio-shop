import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <h2>4 Hands Food Studio</h2>
            <h3>4 Hands Food Studio are producers of naturally fermented foods and drinks.</h3>
            <Link className="btn" to="/books">View All Books</Link>
        </section>
    )
}

export default Hero
