import React from 'react';
import {apiUrl,filterData} from './data';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards  from './components/Cards';
import {useEffect, useState} from 'react';
import { Spinner } from './components/Spinner';
import {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function App(){

    const [courses, setCourses] = useState(null);  // the initial value when set to null helps us show loader untill the data hasn't come otherwise giving empty array[] would do the work, won't cause any error but won't show any loader
    const [loading, setLoading] = useState(true);
    const [category,setCategory] = useState(filterData[0].title);
    
        
    const fetchdata = async ()=> {

        setLoading(true);

        try{
            const response = await fetch(apiUrl);
            const output = await response.json();
            setCourses(output.data);  
            
        }
        catch(error){
            toast.error("network error");
        }
        setLoading(false);
     

    }


    useEffect(()=>{
        fetchdata();

    },[] )


    return(

        <div className='min-h-screen  bg-bgDark2 flex flex-col'>
            <div className='bg'>
               <Navbar/>
            </div>

            <div className='bg-bgDark2'>
                <div>
                    <Filter 
                    filterData={filterData} 
                    category={category}
                    setCategory={setCategory} />
                </div>

            
                <div className="w-10/12 max-w-{1200px} flex-wrap mx-auto flex justify-center items-center min-h-[50vh]">
                    {loading ? ( <Spinner/> ): (<Cards courses={courses} category={category}/>)}
                </div>  
            </div>

                      
        </div>
    )
}