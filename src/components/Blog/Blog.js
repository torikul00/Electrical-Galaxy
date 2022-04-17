import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <div className="blog">
                <h2>What is Difference between authorization and authentication ?</h2>
                <p>Authentication is a way to identify someone or user.whereas authorization is the process of verify that the user what can access or not. for example, when we are go to office first we need to authentication with our offical id card. and then authorization is what we can do in our office after complete authentication and what we can access in our office.
                </p>
            </div>
            <div className="blog">
                <h2>Why we are using firebase ? What other options do you have to implement authentication? </h2>
                <p>We are using firebase because firebase is totaly free and beginner friendly.
                    We can manage social media networking and authentication with just few line of code.We can create application without backend knowledge and it easy to manage.
                </p>
            </div>
            <div className="blog">
                <h2>What other services does firebase provide other than authentication ?</h2>
                <p>Firebase provide many services other authentication <br />
                    Here is the list - <br />
                    <ol>
                        <li>Authentication</li>
                        <li>Real Time databse</li>
                        <li>Hosting</li>
                        <li>Cloud Messaging</li>
                        <li>Remote Config</li>
                        <li>Test lab</li>
                        <li>Storage</li>
                        <li>Crash Reporting</li>
                    </ol>
                
                </p>
            </div>
        </div>
    );
};

export default Blog;