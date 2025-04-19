import { useState } from 'react'
import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import ReadProject1 from './pages/ReadProject1'
import CreateProject1 from './pages/CreateProject1'
import EditProject1 from './pages/EditProject1'
import Home from './pages/Home'

import { Link } from 'react-router-dom'
import ViewProject1 from './pages/ViewProject1';






const App = () => {
 
  const descr = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'


  const posts = [
     
  ]
 


  // Sets up routes
  let element = useRoutes([

    { path: "/", element: <Home /> },

    { path: "/create", element: <CreateProject1 /> },
    { path: "/gallery", element: <ReadProject1 data={posts} /> },
    { path: "/edit/:id", element: <EditProject1 data={posts} /> },
    {
      path: "/view/:id",
      element: <ViewProject1 />
    }
  ]);


  return (


    <div className="App">

<div className="PageContainer">
  <div className="Sidebar">
        <h1>Crewmate Time!</h1>
        <Link to="/"><button className="headerBtn">Home</button></Link>
        <Link to="/gallery"><button className="headerBtn"> Crewmate Gallery🔍  </button></Link>
        <Link to="/create"><button className="headerBtn"> Create a Crewmate! </button></Link>
      </div>

      <div className="MainContent">
        {element}
      </div>

    </div>
  </div>
  );
}


export default App;


