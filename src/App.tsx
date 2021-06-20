import React from 'react';

import Card from './components/Card';

import GlobalStyles from './styles/GlobalStyles';
import { Container, Title } from './styles';

const App: React.FC = () => {
  return (
    <div>
      <Container>
        <Title>Sudoku</Title>
        <Card>{/* <Grid/> */}</Card>
      </Container>
      <GlobalStyles />
    </div>
  );
};

export default App;
