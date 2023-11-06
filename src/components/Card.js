import {FcLike,FcLikePlaceholder} from 'react-icons/fc';
import {toast} from 'react-toastify'
export default function Card({course,likedCourses,setLikedCourses}){

        function clickHandler(){
                if(likedCourses.includes(course.id)){       // already liked

                    setLikedCourses((prev)=> prev.filter((cid)=>(cid !==course.id))); // .filter((cid)=>{ cid !==course.id   })   // if already liked than take all other ids other than this one 
                    toast.warning("like removed");
                }   // here prev shows the previous state ie the prev value of array and by (prev) => prev..... shows that (prev)=>{ }

                else{
                        // not already liked

                        if(likedCourses.length===0){
                    setLikedCourses([course.id]);       //the array formed from that id 
                    }
                    else{
                        //non-empty 

                         setLikedCourses((prev)=>[...prev,course.id])   // add the id in it
                    }                          //NOTE: if same thing is done using push method than we sometimes get error on clicking different cards

                    toast.success("Liked Succesfully");
                }
    }

    return(
            <div className='w-[300px] bg-bgDark bg-opacity-90 rounded-md overflow-hidden'>
                <div className='relative '>
                     <img src={course.image.url}></img>

                    <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-15px] grid place-items-center '>
                        <button onClick={clickHandler}>
                        {
                            (likedCourses.includes(course.id))?
                            <FcLike fontSize = "1.75rem"/>
                            :<FcLikePlaceholder fontSize = "1.75rem"/>    
                       
                        
                        }
                            
                        </button>
                    </div>
                    

                </div>
 
            
       

                <div className='p-4'>
                    <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
                    <p className='mt-2 text-white'>
                    {
                        course.description.length<100 ?
                        course.description + "..."  :
                        course.description.substr(0,100) + "..."
                        
                    }</p>
                </div>

            </div>    

     
    );
}