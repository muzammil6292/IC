// Page1.js
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './page1.css';

const Page1 = () => {
  const history = useHistory();

  return (
    <Container>
      <h1>Welcome to our app!</h1>
      <Button onClick={() => history.push('/page2')}>Get Started</Button>
    </Container>
  );
};

export default Page1;