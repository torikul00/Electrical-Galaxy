
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import SignUp from './components/SignUp/SignUp';
import NotFound from './components/notFound/NotFound'
import Footer from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout';
import RequireAuth from './components/RequireAuth/RequireAuth';
import ForgotPassword from './components/ForgotPassword/ForgotPassword'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div >
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: '#000000',
            color: '#fff',
          }
        }}
      />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='about' element={<About />} />
        <Route path='login' element={<Login />} />
        <Route path='signUp' element={<SignUp />} />
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        } />
        <Route path='/resetPassword' element={<ForgotPassword />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
