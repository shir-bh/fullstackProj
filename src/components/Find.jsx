import axios from "axios";
import React,{useState} from "react";
import styled from "styled-components"
const Find =()=> {
let id_ref="";
const [user,set_user]=useState({});
const [display_user,set_display_user]=useState(false);
const handleSubmit=async(e)=>{
  e.preventDefault();
    try{
      console.log(id_ref.value);
      const result=await axios.get(`http://localhost:3030/api/users/${id_ref.value}`);
      set_user(result.data);
      set_display_user(true);
    }catch(err){
      throw new Error(err);
    }
}
  return (
    <Div>
      <Form onSubmit={(e)=>handleSubmit(e)}>
        <Input ref={(elem)=>id_ref=elem} type="text" placeholder="Enter id:"/>
        <Button type="submit" >Find</Button>
      </Form> 
      {display_user && 
        <UserWrapper>
          <H1>First Name : {user.first_name}</H1>
          <H1>Last Name : {user.last_name}</H1>
          <H1>Email : {user.email}</H1>
          <H1>Gender : {user.gender ? user.gender : "unspecified"}</H1>
        </UserWrapper>
        }
    </Div>
  )}
export default Find;

    const Div=styled.div`
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    `;
const Form=styled.form`
    display:flex;
    flex-direction:column;
    width:50vw;
    justify-content:center;
    align-items:center;
`;

const Input=styled.input`
width: 100%;
padding: 12px 20px;
margin: 8px 0;
display: inline-block;
border: 3px solid #FFAFCC;
border-radius: 4px;
box-sizing: border-box;
background-color:#FFC8DD;
`;
const Button=styled.button`
height:3rem;
width:6rem;
border-radius:5%;
    background-color: white;
    color: black;
    border: 2px solid #FFAFCC;
  :hover {background-color: #FFAFCC;}
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

