import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectRedirect from './pages/ProjectRedirect';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects/:slug" element={<ProjectRedirect />} />
    </Routes>
  );
}
