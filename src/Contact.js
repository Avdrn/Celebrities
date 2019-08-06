import React from 'react';

function Contact (props) {
    return (
      <div className="contact-item">
        <img className="picture" src={props.pictureUrl} alt="img" />
        <h2 className="name">{props.name}</h2>
        <p className="popularity">{props.popularity}</p>
        <button onClick={()=>{props.removePerson(props.index)}}>Remove</button>

      </div>
  );

  
}

export default Contact;