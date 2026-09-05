import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Courses from '@/pages/Courses';
import CourseDetail from '@/pages/CourseDetail';
import About from '@/pages/About';
import WhyAeroin from '@/pages/WhyAeroin';
import Projects from '@/pages/Projects';
import Contact from '@/pages/Contact';
import LegalPlaceholder from '@/pages/LegalPlaceholder';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:slug" element={<CourseDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/why-aeroin" element={<WhyAeroin />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<LegalPlaceholder />} />
        <Route path="/privacy" element={<LegalPlaceholder />} />
        <Route path="/refund" element={<LegalPlaceholder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
