
import '../App';
import '../index.css'
import Navbar from './Navbar'
import Footer from './Footer'
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
