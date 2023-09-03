import React from 'react';

const Links = ({ github, linkedin }) => {
  return (
    <div>
      <h3>Links</h3>
      <ul>
        <li>
          <a href={github} target="_blank" rel="noopener noreferrer" style={{color:"blue"}}>
          https://github.com/liza
          </a>
        </li>
        <li>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" style={{color:"blue"}}>
          https://www.linkedin.com/in/liza
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Links;