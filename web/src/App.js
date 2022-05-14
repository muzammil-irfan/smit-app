import { Container } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Router from './Router';

function App() {
  return (
    <>
    <BrowserRouter>
    <Container maxW='8xl'>
      <Header />
      <Router />
    </Container>
    </BrowserRouter>
    </>
  );
}

export default App;
