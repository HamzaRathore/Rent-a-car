import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RentCar from './pages/RentCar';
import About from './pages/About';
import LoginPage from './pages/LoginPage';
import Contact from './pages/Contact';
import CarBooking from './components/CarBooking';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Booking from './pages/Booking';
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path:'rent-car',
      element:<RentCar/>,
    },
    {
      path:'car-booking',
      element:<CarBooking/>,
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/login-page',
      element:<LoginPage/>
    },
    {
      path:'/contact',
      element:<Contact/>
    },
    {
      path:'/car-booking',
      element:<Booking/>
      
      
    }
    
  ]);
  return (
    
    <>
    <RouterProvider router={router} />;
    
     
    </>
  )
}

export default App
