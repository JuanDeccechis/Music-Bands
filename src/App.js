import './App.css';
import Router from './pages/Router';

function App() {

  localStorage.setItem("isLogged", "false");
  return (
    <div className="app">
      <Router />
    </div>
  );

}

export default App;
