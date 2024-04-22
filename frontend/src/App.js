
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import About from './Pages/About';
import Footer from './Components/Footer/Footer';
import soap_banner from './Components/Assests/Soap_Banner.png'
import shampoo_banner from './Components/Assests/shampoos_banner.jpg'
import oil_banner from './Components/Assests/oil_banner.webp'
function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Shop/>}></Route>
          <Route path='/oil' element={<ShopCategory banner={oil_banner} category="oil"/>}></Route>
          <Route path='/soap' element={<ShopCategory banner={soap_banner}  category="soap"/>}></Route>
          <Route path='/shampoo' element={<ShopCategory banner={shampoo_banner} category="shampoo"/>}></Route>
          <Route path='/allproduct' element={<ShopCategory banner={shampoo_banner} category="allproduct"/>}></Route>
          <Route path='/Product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          
          <Route path='/About' element={<About/>}/>
          <Route path="/Cart" element={<Cart/>}></Route>
          <Route path="/Login" element={<LoginSignup/>}></Route>

        </Routes>
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
