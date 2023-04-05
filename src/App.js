import Header from './components/Header';
import Footer from './components/Footer';
import NavLinks from './components/NavLinks';
function App() {
  return (
    <div className="App">
        <Header />
           <main className='main'>
             <NavLinks />  
           </main>
         <Footer />
    </div>
  );
}

export default App;
