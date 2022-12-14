

import React from 'react'
import Card from './practice/Card'
import './practice/style.css'
import Data from './practice/Data.json';
import List from './practice/List';
import STATE from './practice/STATE';
import ConditionalRendaring from './practice/ConditionalRendaring';
import EVENTHANDLER from './practice/eventHalderClass/EVENTHANDLER';
import UseState from './practice/reactHook/UseState';
import FORM from './practice/reactHook/FORM';
import Child from './practice/stateLifting/Child';
import Home from './practice/stateLifting/Home';
import Toggle from './practice/Toggle/Toggle';
import FAQS from './practice/faq/FAQS';
import UseEffectExample from './practice/useEffectExample/UseEffectExample';
import DataFetch from './practice/useEffectExample/DataFetch';
import UserForm from './practice/useRef/UserForm';
import UseReducer from './practice/useReducer';
import Component1 from './practice/useContext/Component1';




// import React, { useState } from 'react'
// import Message from './components/Memo/Message';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Blog from './components/reactRouting/pages/Blog';
// import Contact from './components/reactRouting/pages/Contact';
// import Home from './components/reactRouting/pages/Home';
// import Error from './components/reactRouting/pages/Error';
// import Navbar from './components/reactRouting/pages/Navbar';



const cssStyle = {
  color:"white",
  textAlign:"center",
  backgroundColor:"red",
  padding:"15px",
}



function App() {
  
  const childToParent=(fromChild)=>{
    console.log(fromChild);
  }

  return (
     <div>
     
      <div className="pageStyle">
        <h1 style={cssStyle}>Todo App</h1>
        {Data.map((item, index)=><Card key={index} title={item.title} desc={item.desc} /> )}
        </div>
        <List/>


            <STATE/>
            <ConditionalRendaring/>
            <EVENTHANDLER/>
            <UseState/>
            <FORM/>

            <Child  onChildData={childToParent} />
            <Home/>
            <Toggle/>
            <FAQS/>
            <UseEffectExample/>
            {/* <DataFetch/> */}
            <UserForm/>
            <UseReducer/>
            <Component1/>
            

 
     </div>




    // <BrowserRouter>
    // <Navbar/>
    //     <Routes>
    //     <Route path="/" element={  <Home />} />
    //     <Route path="/contact" element={<Contact/>}  />
    //     <Route path='/blog' element={<Blog/>} />
    //     <Route path='*' element={<Error/> } />
    //   </Routes>
    // </BrowserRouter>

  );
}

export default App;
