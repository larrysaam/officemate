import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import './App.css';
import { Home } from './pages/Home';
import { Pricing } from './pages/Pricing';
import { Navigation } from './components/navigation';
import { PDFtoDOCX } from './pages/PDFtoDOCX';

// Replace with your actual Clerk publishable key
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/pdftodocx' element={<PDFtoDOCX />} />
            <Route
              path="/pricing"
              element={
                <>
                  <SignedIn>
                    <Pricing />
                  </SignedIn>
                  <SignedOut>
                    <RedirectToSignIn />
                  </SignedOut>
                </>
              }
            />
          </Routes>
          <Navigation />
        </div>
      </Router>
    </ClerkProvider>
  );
}

export default App;
