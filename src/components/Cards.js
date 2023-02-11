import React from 'react';
import './Cards.css';

function Cards() {
  return (
    <div className="card-container">
      <div className="cards">
        <div className="card-image card-1"></div>
        <h3>Card-1</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, provident? Quia molestias cum a quidem nobis laudantium animi voluptates nisi, distinctio id, reiciendis aut asperiores dolorem ullam et tenetur voluptatem.</p>
      </div>
      <div className="cards">
        <div className="card-image card-2"></div>
        <h3>Card-1</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, provident? Quia molestias cum a quidem nobis laudantium animi voluptates nisi, distinctio id, reiciendis aut asperiores dolorem ullam et tenetur voluptatem.</p>
      </div>
      <div className="cards">
        <div className="card-image card-3"></div>
        <h3>Card-1</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, provident? Quia molestias cum a quidem nobis laudantium animi voluptates nisi, distinctio id, reiciendis aut asperiores dolorem ullam et tenetur voluptatem.</p>
      </div>
    </div>
  );
}

export default Cards;