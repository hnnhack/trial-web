import './App.css';
import Countdown from './Countdown/Countdown'

const App = () => {
  return (
    <div className="App">
      <Countdown 
        timeTillDate="07 15 2022, 6:00 am" 
        timeFormat="MM DD YYYY, h:mm a" 
      />
      <header className="App-header">
        <h1>Welkom naar Fotapijt!</h1>
        <h3>Onze website gaat gauw active zijn.</h3>
        <p>
          Vraag stellen:<br /><br />
          <b>Telefoon:</b>  +31 6 53166015
        </p>
      </header>
    </div>
  );
}

export default App;
