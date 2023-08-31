









import { Link } from 'react-router-dom';
import '../App';
import '../index.css'
import React from 'react';
import Custombutton from './custombutton';

export default function SearchComponent(props){
    const [searchQuery, setSearchQuery] = React.useState('');
    const [searchResult, setSearchResult] = React.useState([]);
    function handleSearch (query){
        const filteredResults = props.names.filter(item =>{
                return item.toLowerCase().includes(query.toLowerCase())
    });
        setSearchResult(filteredResults);
      

    }
    function handleChange(e){
        const query= e.target.value;
        setSearchQuery(query)
        
        if (query == ''){
            return ;
        }
        handleSearch(query);

    }
     

    return(
        <>
            <div className='searchbar'>
                <input 
                    type='text'
                    placeholder='Search for Peers...'
                    value={searchQuery}
                    onChange={handleChange}
                    className='searchinput'
                />
                <ul className='searchresultlist'>
                    {searchResult.map((result, index) =>{
                    
                   return ( <li key={index} className='searchresult'><div className='peer'>
                   <Link to='/dashboard/profile/johndoe' className='profilelink'>
                      <img src='http://localhost:3000/images/profile.png' className='profilepic'></img>
              
                  <h4 className='peername'>{result} </h4>
                  </Link>    
               
                  <Custombutton default ='Request ' other ='Cancel'></Custombutton>

                  
                  </div></li>)
                })}
                </ul>
            </div>
        
        </>
    )
}