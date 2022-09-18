import { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
const Index = lazy(() => import('@/pages/Index'));
const Shopping = lazy(() => import('@/pages/Shopping'));
function RouterComp() {
  return (
    <Router>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shopping" element={<Shopping />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default RouterComp;
