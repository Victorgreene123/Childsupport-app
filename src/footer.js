import logo from './logo.svg';
import './App';
import './index.css'
export default function Footer(props){
    return(
        <div className='footer'>
            <a href=""><span className='fa-brands fa-twitter'></span></a>
            <a href=""><span className='fa-brands fa-github'></span></a>
            <a href=""><span className='fa-brands fa-facebook-f'></span></a>
            <a href=""><span className='fa-brands fa-instagram'></span></a>
        </div>
    )
}