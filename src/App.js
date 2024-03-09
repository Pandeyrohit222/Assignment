import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleJump = () => {
    setPosition({ top: position.top - 1, left: position.left + 1 });
  };

  return (
    <div className="app" onClick={handleJump}>
      <video
        src={require('./assets/logo.gif.mp4')} 
        autoPlay
        loop
        muted
        style={{
          position: 'relative',
          top: `${position.top * 100}px`,
          left: `${position.left * 100}px`,
          height: '100px',
          transition: 'top 0.3s ease-in-out, left 0.3s ease-in-out'
        }}
      />
    </div>
  );
}

export default App;
