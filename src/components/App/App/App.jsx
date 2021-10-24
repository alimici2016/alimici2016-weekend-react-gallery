import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';//import axios for Get route
import GalleryList from '../GalleryList/GalleryList'; //import GalleryList gallery data whole sale

function App() {


  let [gallery, setGallery] = useState([]);//state still sorta in the dark about this however I know that gallery turns
  //into a variable and setGallery does that but declaration in fetchData function
  //Create a get route to grab data from server

  useEffect(() => {
    //get route
    fetchData();//GET route function will render data on page load
  }, []);
  
  
  const fetchData = () => {
    axios ({
      method: 'GET',
      url: '/gallery'
    })
    .then((response) => {
      console.log(response)
      setGallery(response.data)
    }).catch((error) => {
      console.log(error)
    })
  };
  //end GET route

  const updateLike = (gallery) => {
    axios({
      method: 'PUT',
      url: `/gallery/like/${gallery.id}`
    })
    .then((response)  =>{
      console.log('in put', response)
      fetchData();
    }).catch((error) => {
      console.log('error in the PUT', error)
    })
  };
  //end PUT route


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        {/* <p>Gallery goes here</p> */}
        <GalleryList 
        gallery ={gallery}
        updateLike = {updateLike} /> 
        {/* <img src="images/goat_small.jpg"/> */}
      </div>
    );
};

export default App;