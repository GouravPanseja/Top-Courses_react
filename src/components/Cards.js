import Card from './Card';
import {React,useState} from 'react';


export default  function Cards(props){

   
    let courses = props.courses;
    let category= props.category;                          //initially none course is liked, it can be considered an array of all undefineds or undefined overall
    const [likedCourses,setLikedCourses]= useState([]);     // made state var so that every time it is updated bcz of liking we must re-render
    
    if(courses===undefined || courses===null){
        return ( 
        <div className="error-screen">
            <div>
                <p>Courses Not found</p>
            </div>
        </div>
            )

           
        
    }
    function getCourses(){  
      
        if(category==="All"){

           let allCourses= [];                              //likedCourses[] will contain the id of all the cards that are liked
            Object.values(courses).forEach( array=>{
                array.forEach((courseData)=>{
                    allCourses.push(courseData);
                })
            })   
            
            return allCourses;    
        }

        else{
            //return only the array of only specific spaces
            return courses[category];
        }
                                                        
                                    
  
    }
  

    return(
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {
            getCourses().map((course)=> {
              return(
                <Card course= {course}
                    likedCourses={likedCourses}
                    setLikedCourses={setLikedCourses}

                />);
                
            })
        
        }
        </div>
    );
}