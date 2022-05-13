import React from 'react';
import { useEffect, useState } from 'react';
import {  getUsers } from './api';
import { User } from './models/User';
import UserRow from './UserRow';



const UserList=()=>{

    const [User, setUser] = useState<User[]>([]);

    useEffect(()=>{
      getUsers().then((data)=>{
        setUser(data);
      });
    }, []);


    return(
        <div>
            <div>
     {User.map(u=><UserRow User={u}/>)}
    </div>
        </div>
    );
}

export default UserList;