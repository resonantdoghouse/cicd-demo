import React from 'react';

const Greeting = ({ name }) => {
  return (
    <div>
      {name ? <h1>Hello, {name}!</h1> : <h1>Hello, World!</h1>}
    </div>
  );
};

export default Greeting;
