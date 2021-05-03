import React from "react";
import styled from "styled-components"
import axios from "axios";
const Add =({changeShow})=> {
  let first_name_ref="";
  let last_name_ref="";
  let email_ref="";
  let gender_ref="";

  const handleSubmit= async (e)=>{
    e.preventDefault();
    changeShow();
    const toAdd={
      first_name:first_name_ref.value,
      last_name:last_name_ref.value,
      email:email_ref.value,
      gender:gender_ref.value
    };
    // console.log(toAdd);
    try{
      await axios.post('http://localhost:3030/api/users', toAdd);
    }catch(err){
        throw new Error(err);
    }
  }

  return (
    <Div id="root">
      <Form onSubmit={(e)=>handleSubmit(e)}>
        {/* <Label ><b>first name</b></Label> */}
        <Input ref={(elem)=>first_name_ref=elem} type="text" placeholder="Enter first name"/>

        {/* <Label ><b>last name</b></Label> */}
        <Input ref={(elem)=>last_name_ref=elem} type="text" placeholder="Enter last name"/>

        {/* <Label ><b>Email</b></Label> */}
        <Input ref={(elem)=>email_ref=elem} type="text" placeholder="Enter Email"/>

        {/* <Label ><b>Gender</b></Label> */}
        <Input ref={(elem)=>gender_ref=elem} type="text" placeholder="Enter Gender"/>

        <Button type="submit" >Register</Button>
      </Form> 
    </Div>
  )}
export default Add;

const Div=styled.div`
    height:100vh;
    display:flex;
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
