import { FC } from "react";
import { Lecture } from "./models/lecture";

type LectureRowProps={lecture:Lecture};

const LectureRow: FC<LectureRowProps> = ({lecture}) =>{

  return (
    
    <div className="p-4 m-5 font-semibold bg-white border-2 border-gray-50 rounded-md shadow-md ">
   
        <div className='flex flex-col ml-4 '>
        <div className='flex justify-start space-x-2 '>
<h1 className='font-bold'>Lecture #{lecture.id}</h1>
<h3 className=' text-gray-500 font-semibold'>{lecture.created_at}</h3>
</div>
<h3 className='text-sm text-gray-600 mt-2 '> Duration :({lecture.start_time})</h3>
</div>

<div className="p-2 rounded-md"> {lecture.topic} </div>

<div className='py-2'>
<h3 className='text-sm text-gray-600 text-center font-semibold '>watch/download</h3>
</div>

    </div>
   
  );

}

export default LectureRow;