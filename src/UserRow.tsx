import { FC } from "react";
import { User } from "./models/User";

type UseRowProps = {User:User}


const UserRow: FC<UseRowProps> = ({User}) => {
    return(
        
            <div className="my-4 rounded-md shadow-sm w-44 sm:w-72 bg-white ">
                 
                 <div className="flex flex-col ml-4 space-y-2">
                    <div className="font-semibold">{User.name.title} {User.name.fisrt} {User.name.last}</div>
                
                    <div className="font-semibold text-indigo-500"> <span></span> </div>
                    
                    <div className="font-semibold text-indigo-500">AGE: {User.dob.age} <span>,</span> EMAIL: {User.email}</div>
                    <div className="flex pb-4 space-x-4"></div>
                 </div>
                 <hr/>
            </div>
           
      );
      }
    

export default UserRow;