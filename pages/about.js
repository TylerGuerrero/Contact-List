// Next auto creates a route when you create a component
// in the page folder that will start at the file name 

import React from "react";
import Head from 'next/head'

// ex) /about index is the only exception it starts at /
const About = () => {
    return (
        <React.Fragment>
            <Head>
                <title>About</title>
                <meta name="keywords" content="about"></meta>
            </Head>
            <div className="about">
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
            </div>
        </React.Fragment>
    );
}

export default About;