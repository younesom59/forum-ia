import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { FavoritesProvider } from './context/FavoritesContext';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import IrritantPage from './pages/IrritantPage';
import UseCasesListPage from './pages/UseCasesListPage';
import UseCaseDetailPage from './pages/UseCaseDetailPage';
import FavoritesPage from './pages/FavoritesPage';

const pageVariants = {
  initial: { opacity: 0, x: 28 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, x: -20, transition: { duration: 0.22, ease: [0.4, 0, 1, 1] } },
};

function Page({ children }: { children: ReactNode }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  );
}

function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Page><HomePage /></Page>} />
        <Route path="/service" element={<Page><ServicePage /></Page>} />
        <Route path="/service/:id" element={<Page><UseCasesListPage filterType="service" /></Page>} />
        <Route path="/irritant" element={<Page><IrritantPage /></Page>} />
        <Route path="/irritant/:id" element={<Page><UseCasesListPage filterType="irritant" /></Page>} />
        <Route path="/usecase/:id" element={<Page><UseCaseDetailPage /></Page>} />
        <Route path="/favoris" element={<Page><FavoritesPage /></Page>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <FavoritesProvider>
      <AppRoutes />
    </FavoritesProvider>
  );
}
