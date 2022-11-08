import React from "react";
import { Button, Card } from "react-bootstrap";

function Profile({ name, pro, bio, img }) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {pro} {bio}
          </Card.Text>
          <Button variant="primary" onClick={()=>{alert("Hello")}}>Click Me</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Profile;
