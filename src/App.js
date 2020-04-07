import React from 'react';
import './App.css';
import './bootstrap.min.css';
import Card from './components/Card';

function App() {
  return (
    <div className="container">
      <Card
        title="Card title"
        text="Some quick example text bla-bla-bla.">
        <svg className="bd-placeholder-img card-img-top" width="100%" height="180" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Image cap">
          <rect width="100%" height="100%" fill="#868e96"></rect>
          <text x="37%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text>
        </svg>
      </Card>
      <Card
        title="Special title treatment"
        text="With supporting text bla-bla-bla."
      />
    </div>
  );
}

export default App;
