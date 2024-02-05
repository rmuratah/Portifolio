import Habilidades from '../../sections/habilidades/habilidades';
import Repositorios from '../../sections/repositorios/repositorios';
import SocialMedia from '../../sections/social-media/social-media';
import Header from '../header/header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Habilidades />
      <Repositorios />
      <SocialMedia />
    </div>
  );
}

export default App;
