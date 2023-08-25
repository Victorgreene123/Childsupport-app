









import { Link } from 'react-router-dom';
import '../App';
import '../index.css'
import React from 'react';




export default function Sectionlink(){
    
    const sectionlinks= [
        {
            name : 'Dashboard',
            isActive: true,
            icon : 'statistics-3.png',
            className:'dashboard'

        } ,
        {
            name : 'Reports',
            isActive: false,
            icon : 'report.png',
            className:'reports'

        },
        {
            name : 'Meetings',
            isActive: false,
            icon : 'video-call.png',
            className:'sessions'

        },
         {
            name : 'Scholarships',
            isActive: false,
            icon:'scholarship-1.png',
            className:'Scholarship'
        },
        {
            name : 'Resources',
            isActive: false,
            icon:'resource.png',
            className:'Resources'
        },
        {
            name : 'Peers',
            isActive: false,
            icon:'peer.png',
            className:'Peers'
        },  {
            name : 'Mentors',
            isActive: false,
            icon:'mentor.png',
            className:'Mentor'
        }

       
];
const [linkstates,setlinkstates] = React.useState(sectionlinks)

const component = linkstates.map((link) =>{
    return (
    <Link to={`/dashboard/${link.name === 'Dashboard' ? '' : link.name}`}>
    <li key={link.name}  className={`sections-link ${link.className}`}>
        <span className='sectionlinkholder'>
        <img src={`http://localhost:3000/images/${link.icon}`} className='sectionlinkicon'></img>
        <span className='sectionlinkname'>{link.name}</span>
        </span></li>
        </Link>
        
        )
})
function handleClick(name){
   
     setlinkstates( prevState => {
        return prevState.map((link) =>{
            if (link.name === name){
               return {...link , isActive : !link.isActive}
            
        }
    })
     } )
     console.log(linkstates)
}
return(
   <>
   {component}
   </>
)
}
