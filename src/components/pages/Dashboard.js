import React from 'react'
import '../../App.css'
import './Dashboard.css';
import Navbar from "../dashboard/NavBar";
import ScreenReplication from '../screen/ScreenReplication';
import FormBasic from './Form';

function Dashboard() {
    return (
        <div>
            <h1 className='Screen'>Dashboard Page</h1>
            <Navbar/>
            <ScreenReplication/>
            <FormBasic/>
            
        </div>
    );
}

export default Dashboard;