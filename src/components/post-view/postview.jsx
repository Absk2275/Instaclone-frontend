import React,{useState, useEffect} from "react";
import axios from 'axios'

import Card from "../card/card";
import ldata from "../../mock-data/data.json"


const LandingPage = () => {
    const [data, setData] = useState([]);
  
    const [localdata, setlocalData] = useState([]);


    useEffect( () => {
        axios.get("https://insta-clone-application.onrender.com/api/v1/posts").then((res)=>{
        
            setData(res.data.post)
            setlocalData(ldata.user)
                
        })  
    }, [])
    return (
        <div className="post-container">
            {
                 localdata.map((post, index) => {
                    return (
                        <Card post={post} key={index} />
                    )
                })
            }
            {
                data.map((post, index) => {
                    return (
                        <Card post={post} key={index} />
                    )
                })
            }
        </div>
    )
}

export default LandingPage;