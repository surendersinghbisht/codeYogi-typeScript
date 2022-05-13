import axios from "axios";
import { Lecture } from "./models/lecture";
import { User } from "./models/User";

type UserResponse = { results: User[] };

const Codeyogi_Base_Url = "https://api.codeyogi.io/";
const RandomUser_Base_Url = "https://randomuser.me/api/";

export const getLectures= async ()=>{
const response= await axios.get<Lecture[]>(Codeyogi_Base_Url+ 'batches/1/sessions',{withCredentials: true});

return response.data;
};

export const getUsers = async ()=>{
    const response =await axios.get<UserResponse>(RandomUser_Base_Url+ '?results=10',
    );

    return response.data.results;
};


export const getAssignments = async ()=>{
    const response = await axios.get(Codeyogi_Base_Url + 'batches/1/assignments',
    {withCredentials: true});

    return response.data;
}

