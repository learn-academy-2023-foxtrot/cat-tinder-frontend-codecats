import './App.css';
import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import CatEdit from './pages/CatEdit';
import CatIndex from './pages/CatIndex';
import CatNew from './pages/CatNew';
import CatShow from './pages/CatShow';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Routes, Route} from 'react-router-dom';
// import codeCats from './MockCats';

const App = () => {
  const [cats, setCats] = useState([])
  // console.log("codeCats:", cats)
  
  const readCat = () => {
    fetch("http://localhost:3000/cats")
    .then((response) => response.json())
    .then((payload) => setCats(payload))
    .catch((error) => console.log(error))
  }
  
  useEffect(() => {
    readCat()
  }, [])

  const createCat = (newCat) => {
    fetch("http://localhost:3000/cats", {
      body: JSON.stringify(newCat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then((response) => response.json())
    .then(() => readCat())
    .catch((errors) => console.log("Cat create error", errors))
  }

  const updateCat = (editCat, id) => {
    fetch(`http://localhost:3000/cats/${id}`, {
      body: JSON.stringify(editCat),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then((response) => response.json())
    .then(() => readCat())
    .catch((errors) => console.log("Cat update error", errors))
  }

 return (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<CatIndex cats={cats} />} />
      {/* <Route path="/catindex" element={<CatIndex cats={cats} />} /> */}
      <Route path="/catshow/:id" element={<CatShow cats={cats} />} />
      <Route path="/catnew" element={<CatNew createCat={createCat}/>} />
      <Route path="/catedit/:id" element={<CatEdit cats={cats} updateCat={updateCat} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />

  </>
 )
}

export default App;
