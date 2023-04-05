import React, { useEffect, useState } from 'react';
import { getAllCategories } from '../Api';
import CatalogList from '../CatalogList';
import Loader from '../Loader';
import Search from '../Search';
import { useLocation, useNavigate } from 'react-router-dom';

function Home() {

  const [catalog, setCatalog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

 const {pathname, search} = useLocation();
 const {push} = useNavigate();


  const handleSearch = (str) =>{
     setFilteredCatalog(catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase())))
     push({
      pathname,
      search: `?search=${str}`
     })
  }

  useEffect(() => {
     getAllCategories().then(data => {
        setCatalog(data.categories);
        setFilteredCatalog( search ? data.categories.filter(item => item.strCategory.toLowerCase().includes(search.split('=')[1].toLocaleLowerCase()))
         : data.categories
        ); 
        setLoading(false) });
    },[search]);

  return (
     <>
     <Search  handleSearch={handleSearch} />
    <div className='container'>  
        {
           loading ? <Loader /> 
           :
          <CatalogList catalog = {filteredCatalog} />
        }
    
    </div> 
    </>
  )
}

export default Home;