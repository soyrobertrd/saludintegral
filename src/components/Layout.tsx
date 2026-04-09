import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  const location = useLocation();
  const isPortal = location.pathname.startsWith('/portal');

  return (
    <div className="flex flex-col min-h-screen bg-background text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed antialiased">
      {!isPortal && <Navbar />}
      <main className="flex-1">
        <Outlet />
      </main>
      {!isPortal && <Footer />}
    </div>
  );
}
