import app from "./App.css"
//Components
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className={app}>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
