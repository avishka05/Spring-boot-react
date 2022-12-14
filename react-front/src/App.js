
import './App.css';
import ListEmployeeComponent from './Components/ListEmployeeComponents';
import AddEmployee from './Components/AddEmployee/AddEmployee';
import 'react-toastify/dist/ReactToastify.css';
import Header from './layout/header/Header';
import { BrowserRouter as Router,Routes, Route,  } from 'react-router-dom';
import EditeEmployee from './Components/EditeEmployee/EditeEmployee';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  

  return (
    <div className="App">    


    
  <Router>
    <Header/>
    
    <ToastContainer />
       <Routes>    
            < Route exact path='/' element={<ListEmployeeComponent />}> </Route>
            < Route exact path='/add' element={<AddEmployee />}> </Route>
            < Route exact path='/edite' element={<EditeEmployee />}> </Route>
        </Routes>
        
  </Router>
 
     
    </div>
  );
}

export default App;
