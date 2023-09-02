







import { Link } from 'react-router-dom';
import '../App';
import '../index.css'
import React from 'react';




export default function Reports(){
return(
    <>
    <div className='report-container'>

        <h2 className='page-heading'>Reports</h2>
        <div class>


        </div>
        <button className='addreport' onClick={() => {
            const link =`${process.env.PUBLIC_URL}/report-case`
            window.location.href = link;
            console.log('aDDED REPORT')
            }}>Add Report</button>


    </div>
    
    
    </>
)

}