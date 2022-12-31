import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import React from 'react'
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';

const SHOP = () => {
  return (
    <div>
        <h1>Hello i am shop page</h1>
    </div>
  )
}




const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
      <Route index element={<Home />}/>
      <Route path='shop' element={<SHOP />} />
      <Route path='sign-in' element={<Authentication  />} />
      </Route>
    </Routes>
  );
};

export default App;