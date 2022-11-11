import './App.css';
import Container from 'react-bootstrap/Container';
import NavBar from './components/navbar';
import Footer from './components/footer';
import StaticTable from './components/table';
import RandomImage from './components/randomImage';
import WikiFrame from './components/wikiFrame';
import NewsFrame from './components/newsFrame';
import ClockFrame from './components/clock';

function App() {
  return (
    <>
        <NavBar />
        <Container style={{marginTop:'20px'}}>
        
          Web Assignment<br/><br/>
          <div className='d-flex flex-row justify-content-around'>
          <ClockFrame />
          <RandomImage />
          </div>
          <StaticTable />
          <div className='d-flex mb-5 flex-row justify-content-around'>
          <NewsFrame />
          <WikiFrame/>
          </div>
          
        </Container>
        <Footer/>
        

      </>
  );
}

export default App;