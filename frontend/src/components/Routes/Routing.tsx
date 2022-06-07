import { AnimatePresence } from 'framer-motion';
import { Route, Routes } from 'react-router-dom';
import MainRoute from './MainRoutes';


export default function Routing() {
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes>        
        <Route path="/main/*" element={<MainRoute />} />
      </Routes>
    </AnimatePresence>
  );
}
