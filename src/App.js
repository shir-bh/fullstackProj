import './App.css';
import React , {useEffect,useState} from "react";
import axios from "axios";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopBar from "./components/TopBar";
import Home from "./components/Home"
import DisplayAll from "./components/DisplayAll"
import Find from "./components/Find"
import Add from "./components/Add"
import Links from  "./components/Links"
import DisplayOne from "./components/DisplayOne";
function App() {
  const [show,set_show]=useState(false);
  const [data,set_data]=useState([]);
  useEffect(() => {
    async function fetchData(){
      try{
        const result=await axios.get('http://localhost:3030/api/users');
        const users_data=result.data;
        set_data(users_data);
      }catch(error){
        throw new Error(error);
      }
    }
    fetchData();
  }, [])
  const toggleShow=()=>{
    set_show(!show);
  }
  return (
    // <div className="App">
        <Router>
    <Box>
      <TopBar>
        <Links />
      </TopBar>
      {/* <Users/> */}
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/add" render={() => <Add changeShow={toggleShow}/>} />
        <Route path="/display/:id" render={() => <DisplayOne data={data}/>}/>
        <Route path="/display" render={() => <DisplayAll data={data}/>}/>
        <Route path="/find" render={() => <Find data={data}/>}/>
      </Switch>
      </Box>
      </Router>

    // {/* </div> */}
  );
}

export default App;
const Box = styled.div`
background-color:whitesmoke;
padding: 3rem 7.5rem;
  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
`;