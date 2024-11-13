// App.js
import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import { CreateContainer, CreateProduct, MainContainer } from './components';
import { useStateValue } from './context/StateProvider';
import { getAllCategoryProductItems } from './utils/firebaseFunctions';
import { actionType } from './context/reducer';
import Product from './components/Product';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './pages/LoginForm';
import Dashboard from './pages/Dashboard';

const App = () => {
  const [{ categoryProduct }, dispatch] = useStateValue();
  const location = useLocation();

  const fetchData = async () => {
    try {
      const data = await getAllCategoryProductItems();
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    } catch (error) {
      console.error("Error fetching food items:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  const isDashboardOrProductPath = 
    location.pathname.startsWith('/dashboard') || 
    location.pathname.startsWith('/product');

  return (
    <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard/*" element={<Dashboard />}>
              <Route path="createItem" element={<CreateContainer />} />
              <Route path="createProduct" element={<CreateProduct />} />
            </Route>
          </Routes>
        </main>
        {!isDashboardOrProductPath && <Footer />}
      </div>
    </AnimatePresence>
  );
};

export default App;
