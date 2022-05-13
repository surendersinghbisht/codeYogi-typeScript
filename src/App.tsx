import React from 'react';
import LectureList from './LectureList';
import {Navigate ,BrowserRouter ,Routes, Route } from 'react-router-dom';
import UserList from './UserList';
import MainLayout from './MainLayout';
import AssignmentList from './AssignmentList';

function App() {
  return (
    
<BrowserRouter>
    <div className='flex'>

    <Routes>
      <Route path="/" element={<Navigate to="lectures"/>} />
      <Route path="/" element={<MainLayout />}>
    <Route path="lectures" element={<LectureList />}></Route>
    <Route path="assignments" element={<AssignmentList />}></Route>
    <Route path="users" element={<UserList />}></Route>
    </Route>
    
    </Routes>
    </div>

    </BrowserRouter>
  );
}


export default App;