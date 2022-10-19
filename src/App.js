import './App.scss';
import Navbar from './components/navbar/navbar.component';
import { ProductHero } from './components/product-hero/product-hero';
import { Footer } from './components/footer/footer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <ProductHero />
        <Footer />
    </div>
  );
}

export default App;
