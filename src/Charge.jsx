import axios, { Axios } from "axios";
import { useEffect,useState } from "react";
import React from "react";
import App from './App.css';
import Script from './Dom.js'
import {IoIosShareAlt} from 'react-icons/io';
import {BiRupee} from 'react-icons/bi';
import {AiFillStar} from 'react-icons/ai';
import {FaTag} from 'react-icons/fa';
const api = "https://fakestoreapi.com/products";


const Charge = ()=>{
   
    const [category,setCategory] = useState([]);
    const [rating,setRating] = useState([]);
    const [id,setId] = useState([]);
    const [image,setImage] = useState([]);
    const [price,setPrice] = useState([]);
    const [title,setTitle] = useState([]);
    
    useEffect(()=>{
        async function getInformation(){
            const fakeData = await axios.get(`${api}/4`,()=>{

            }).then((result)=>setCategory(result.data.category)+setTitle(result.data.title)
            +setRating(result.data.rating.rate)+setId(result.data.id)+setPrice(result.data.price)+setImage(result.data.image)+console.log(result.data)
            
            
            );
            
            

        }
        getInformation();
    },[]);
    
return(
       <div>
           <div className="container">
               <div className="row">
                   <div className="col-6 mt-5 d-flex justify-content-start">
                       
                       <p className="h4 btn btn-success btn-md ">Power Source Shoping</p>
                      
                    </div>
                   <div className="col-6 mt-5 d-flex justify-content-end">
                       <div className="charge"></div>
                    </div>
                </div>
                <div class="container">
                <div className="title-tag d-flex justify-content-end">
                    <p className="h4 title ">{title}</p>
                    </div>
                    <div className=" d-flex justify-content-center mt-4 h3 container-fulid">
                       
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1440 320"><path fill="#00cba9" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                        </div>
                    <div className="row">

                        <div className="col-6 img-fluid rounded mt-5 d-flex justify-content-evenly"> <img src={image} alt="image" Width="160px" /> </div>
                        <div className="col-6 mt-5">
                            <div className="share mt-3"><IoIosShareAlt/> Share</div>
                            <div className="discription mt-1"><p>Striped Men Round Neck</p></div>
                            <div className="price"><span className="text-success">Spical price</span><br />
                            <BiRupee/>{price}
                            </div>
                            <div className="mt-3"><span className="badge bg-success me-3"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></span>
                             Rateing  <span className="text-white badge bg-warning">{rating}</span></div>
                            

                            
                        </div>
                    </div>
                </div>
        </div>
        <div className="container mt-4">
            <div className="offer">
                <div className="ava-offer text-start ms-4">Avalable Offers!</div>
                <ul class="list-group mt-1">
            <li class="list-group-item border-0"><span className="text-success me-2"><FaTag/></span> Special PriceGet at flat ₹199 <span className="text-primary">T&C</span> </li>
            <li class="list-group-item border-0"><span className="text-success me-2"><FaTag/></span>  Flipkart Gift Card worth ₹100<span className="text-primary">*Know More</span> </li>
              <li class="list-group-item border-0"><span className="text-success me-2"><FaTag/></span>  Bank Offer5% on Flipkart Axis Bank Card <span className="text-primary">T&C</span></li>
  
</ul>
            </div>
        </div>
        <div className="order-button  container mt-3 mb-5">
            <div className="row">
                <div className="col-6"> <button className="btn btn-success btn-md btn-block">Buy Now</button></div>
                <div className="col-6"> <button className="btn btn-outline-success btn-md btn-block">Add Cart</button></div>
            </div>
            
           
        </div>
       </div>
    );
}


export default Charge