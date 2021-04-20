import { Container } from '@material-ui/core';
import './App.css';
import HospitalList from './components/HospitalList';
import SearchIcu from './components/SearchField';

function App() {
  return (
    <div className="App">
      <div style={{ position: 'fixed', width: '100%', zIndex: '10' }}>
        <header className="App-header">Search ICU around you</header>
        <Container>
          <SearchIcu />
        </Container>
      </div>
      <Container>
        <HospitalList />
      </Container>
    </div>
  );
}

export default App;
