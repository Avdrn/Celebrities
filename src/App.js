import React, { Component } from 'react';
import './App.css';
import Contact from './Contact.js';
import Personalities from "./contacts.json"

class App extends Component {
  state = {
    counter : 0,
    personalities : Personalities,
    displayContact : Personalities.slice(0,5),
    // searchedPersonalities : Personalities,
   
  }
  
  addContact = () => {
    const randomContact = this.state.personalities[Math.floor(Math.random()*this.state.personalities.length)];
    const copiedDisplay = [...this.state.displayContact]
   copiedDisplay.push(randomContact);

    this.setState({
      displayContact: copiedDisplay
    })
  }

  remove = (index) => {
    const copiedDisplay = [...this.state.displayContact]
    copiedDisplay.splice(index, 1);
    this.setState({displayContact: copiedDisplay});
  }

  // search = (event)=> {
  //   let searchTerm = event.target.value;
  //   let searchedPersonalities = this.state.personalities.filter((personalities)=> (
  //     personalities.name.indexOf(searchTerm) >= 0
  //   ))  
  //   this.setState({displayContact: searchedPersonalities})
  // }

  render() {

    const contactComponents = this.state.displayContact.map((contact) => (
      <Contact 
        index={contact.index}
        pictureUrl = {contact.pictureUrl} 
        name = {contact.name} 
        popularity = {contact.popularity} 
        removePerson={this.remove}
        /> 
    ))
  

   return (
    <div className = "center-box">
      <h1>Iron Contact</h1>
      <button className="random-contact" onClick={this.addContact}>Add random contact</button>

      <div className="title-box">
        <div className="picture">Picture</div>
        <div className="name">Name</div>
        <div className="popularity">Popularity</div>
      </div>

      <div className="personality-box">
        {contactComponents}
      </div>
    </div>
    )
  }
}


export default App;
