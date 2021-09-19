import './App.css';
import Router from './pages/Router';

function App() {

  localStorage.setItem("isLogged", "false");
  localStorage.setItem("APIURL", "https://my-json-server.typicode.com/improvein/dev-challenge")
  return (
    <div className="app">
      <Router />
    </div>
  );

}

export default App;
