import Header from './components/Header';
import Footer from './components/Footer';
import ProjectsList from './features/projects/ProjectsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ProjectsList />
      <Footer />
    </div>
  );
}

export default App;
