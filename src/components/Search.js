import React,{useState} from 'react'

function Search({ handleSearch = Function.prototype}) {
  const [value, setValue] = useState("");

  const handleKey = (e) =>{
    if(e.key === 'Enter'){
         handleSubmit()
    }
  }

  const handleSubmit = () =>{
    handleSearch(value);
  }

  return (
    <div className='container'>
            <div className="row">
              <div className='input-field col s12'>
                <input type="search"
                       placeholder='Search....'
                       id='search-field'
                       value={value}
                       onChange={(e)=> setValue(e.target.value)} 
                       onKeyDown={handleKey}
                       />
                   <button className='btn' style={{position:'absolute', right:'0', top:'0'}} onClick={handleSubmit}>Search</button>    
              </div>
            </div>
    </div>
  )
}

export default Search;