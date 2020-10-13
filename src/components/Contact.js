import React from 'react';
import './Contact.css';



function Contact () {
    const name = "John"
    const avatar = 'https://randomuser.me/api/portraits/men/16.jpg'
    const isOnline = true;
    return (
        <div className="Contact">
            <img src={avatar} className="avatar"/>
            <div>
                <h3 className="name">{name}</h3>
                    <div className="status">
                        <span className={isOnline ? "status-online" : "status-offline"}></span>
                        <span className="status-text">{isOnline ? "online" : "offline"}</span>
                </div>
            </div>
        </div>
    )
}

export default Contact;