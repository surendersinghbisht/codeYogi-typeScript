import React from 'react';
import {Link} from "react-router-dom";
import { FC } from 'react';


const Sidebar: FC=()=>{
return(
  

<div className=' sticky top-0 bg-gray-700 pr-10 h-screen '>
  <div className='flex flex-col space-y-4  py-4'>
  <h1 className='text-3xl text-white font-bold ml-6'>CODEYOGI</h1>
  <Link to="/assignments" className='hover:bg-gray-500 text-white text-xl ml-6'>Assignments</Link>
      <Link to="/lectures" className='hover:bg-gray-500 text-white text-xl ml-6'>Lectures</Link>
  <Link to="/users"className='hover:bg-gray-500 text-white text-xl ml-6' >Users</Link>
    <span className='h-80'></span>
    <h1  className='hover:bg-gray-500 text-white text-xl ml-6'>Logout</h1>
    </div>
    </div>
);
}
 export default Sidebar;