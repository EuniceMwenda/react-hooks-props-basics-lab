import React from "react";
import Links from './Links'; 


function About(props){

const { githubLink, linkedinLink }= props;

  return (
    <div id="about">
      <h2>About Me</h2>
      
      {props.bio && (
        <p>{props.bio}</p>
      )}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />

      
      <Links github={githubLink} linkedin={linkedinLink} />
    </div>
  );
}

export default About;
