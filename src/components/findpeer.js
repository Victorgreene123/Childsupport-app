










import { Link } from 'react-router-dom';
import '../App';
import '../index.css'
import React from 'react';
import SearchComponent from './searchcomponent';


export default function FindPeer(){
const data = ['Victor Okereafor', 'Korede Ajayi', 'Ilo timilehin', 'Omolayo Ed', 'Obinali Francis','Adeyemo Aderinsola' , 'Oke faith']
    
     return(
        <>
            <h1>Search for peers</h1>
            <SearchComponent names={data} />
        </>

     )
}