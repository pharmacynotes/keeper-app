//1. Create a new React app.
import React from "react";
import  ReactDOM  from "react-dom";
import App from "./components/App";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img 
        src={props.img}
        alt="avatar_img"

      />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  )
}

ReactDOM.render(
  <div>
    <h1>My contacts</h1>
    <Card name="Beyonce" img="https://th.bing.com/th/id/OIP.OJI1pdGG-pXP2N-_xaEXXwHaE8?w=253&h=180&c=7&r=0&o=5&pid=1.7" tel="+3083452085028" email="oweuljaf@gmail.com"/>
    <br></br>
    <Card name="Beyonce" img="https://th.bing.com/th/id/OIP.mrOGiAOJfi7FR0ud4FfxewHaEo?w=282&h=180&c=7&r=0&o=5&pid=1.7" tel="+324440258" email="oafdf@gmail.com"/>
  </div>,
  document.getElementById("root")

);






//2. Create a App.jsx component.
//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.
//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.
