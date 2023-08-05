import React from 'react';
import { Card } from 'react-bootstrap';
// import './CategoryCard.css';

function CategoryCard(props){
  return (
    <Card className="category-card" style={{ "--color": "351, 83%, 61%" }}>
      <div className="card-icon">
        <img src={process.env.PUBLIC_URL + props.image} width="140" height="140" loading="lazy" alt="Non-Degree Programs" className="img" />
      </div>
      <Card.Body>
        <Card.Title as="h3">
          <a href="/" className="card-title">{props.title}</a>
        </Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CategoryCard;
