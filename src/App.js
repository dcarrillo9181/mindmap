import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectsDirectoryPage from './pages/ProjectsDirectoryPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='directory' element={<ProjectsDirectoryPage />} />
          <Route 
              path='directory/:projectId'
              element={<ProjectDetailPage />}
          />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
