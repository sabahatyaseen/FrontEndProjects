import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRouter from './components/Router';

const App = () => {
  return (
    <>
    <div>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
        <Footer/>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App