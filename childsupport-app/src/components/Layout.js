
import '../App';
import '../index.css'
import Navbar from './navbar'
import Footer from './footer'
import { Outlet,Link } from 'react-router-dom';
export default function Layout(){
    return(
        
        
          <>
          <Navbar />
           <Outlet />
          <Footer />
          
          </>
        
        
    )
}
