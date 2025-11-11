import { lazy, Suspense } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import { ErrorBoundary } from './components/ErrorBoundary';
import { FloatingShapes } from './components/ui/floating-shapes';

const About = lazy(() => import('./components/About'));
const Stats = lazy(() => import('./components/Stats'));
const Experience = lazy(() => import('./components/Experience'));
const Education = lazy(() => import('./components/Education'));
const Skills = lazy(() => import('./components/Skills'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        <FloatingShapes />
        <Navigation />
        <main id="home">
          <Hero />
          <Suspense fallback={<LoadingFallback />}>
            <About />
            <Stats />
            <Experience />
            <Education />
            <Skills />
            <Testimonials />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;
