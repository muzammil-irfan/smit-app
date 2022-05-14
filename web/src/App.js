import { Container } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Router from './Router';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
    <Container maxW='7xl'>
      <Router />
    </Container>
    </BrowserRouter>
    </>
  );
}

export default App;
