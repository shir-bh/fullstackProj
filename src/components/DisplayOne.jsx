import React,{useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components"
const DisplayOne =({data})=> {
    const [user, setuser] = useState({});
    useEffect(()=>{
        async function getOneUser(){
            const url=window.location.pathname;
        const id=url.split("/display/")[1]; 
        try{
            const result=await axios.get(`http://localhost:3030/api/users/${id}`);
            setuser(result.data);
          }catch(err){
            throw new Error(err);
          }
        }
        getOneUser();
    },[]);
  return (
      <Div>
           <UserWrapper>
          <H1>First Name : {user?.first_name}</H1>
          <H1>Last Name : {user?.last_name}</H1>
          <H1>Email : {user?.email}</H1>
          <H1>Gender : {user?.gender ? user.gender : "unspecified"}</H1>
        </UserWrapper>
      </Div>
       
  )}
export default DisplayOne;
const Div=styled.div`
height:100vh;
background-color:whitesmoke;
display:flex;
justify-content:center;
align-items:center;
`;
const UserWrapper=styled.div`
      margin:3rem;
      padding:1rem;
      height:30vh;
      background-color:#EBF5FF;
      width:50vw;
      box-shadow:-1em -1em 2em darkgrey;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
`;
const H1=styled.h1`
        color:#70BAFF;
        align-self:flex-start;
`;

