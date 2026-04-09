import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import FloatingActions from './components/FloatingActions';
import Home from './pages/Home';
import Services from './pages/Services';
import PatientPortal from './pages/PatientPortal';
import Booking from './pages/Booking';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ChronicCare from './pages/ChronicCare';
import PalliativeCare from './pages/PalliativeCare';
import LabDiagnostics from './pages/LabDiagnostics';
import Emergency from './pages/Emergency';
import Diagnostics from './pages/Diagnostics';
import Clinics from './pages/Clinics';
import Careers from './pages/Careers';
import Staff from './pages/Staff';
import DoctorDetail from './pages/DoctorDetail';
import PostDetail from './pages/PostDetail';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import PatientRights from './pages/PatientRights';
import MedicalUnits from './pages/MedicalUnits';

// Static stub for Compliance if needed, or redirect to Terms
const Compliance = () => <div className="pt-32 px-8 max-w-7xl mx-auto"><h1 className="text-4xl font-black">Cumplimiento Normativo</h1><p className="mt-8 text-on-surface-variant">Documentación de cumplimiento en proceso de carga.</p></div>;

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="chronic-care" element={<ChronicCare />} />
          <Route path="palliative-care" element={<PalliativeCare />} />
          <Route path="labs" element={<LabDiagnostics />} />
          <Route path="emergency" element={<Emergency />} />
          <Route path="diagnostics" element={<Diagnostics />} />
          <Route path="clinics" element={<Clinics />} />
          <Route path="portal" element={<PatientPortal />} />
          <Route path="booking" element={<Booking />} />
          <Route path="about" element={<About />} />
          <Route path="medical-units" element={<MedicalUnits />} />
          
          <Route path="staff" element={<Staff />} />
          <Route path="staff/:id" element={<DoctorDetail />} />
          
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<PostDetail />} />
          
          <Route path="contact" element={<Contact />} />
          <Route path="careers" element={<Careers />} />
          <Route path="terms" element={<Terms />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="patient-rights" element={<PatientRights />} />
          <Route path="compliance" element={<Compliance />} />
        </Route>
      </Routes>
      <FloatingActions />
    </Router>
  );
}

export default App;
