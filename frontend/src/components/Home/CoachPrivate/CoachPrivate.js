import React,{useEffect,useState} from 'react'
import "./CoachPrivate.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import {setUsers} from "../../Redux/Reducers/CoachPrivate/index"
const CoachPrivate = () => {
const dispatch =useDispatch()
const {token,userId,users}=useSelector((state)=>{
  return{
     token:state.auth.token,
  userId:state.auth.userId,
  users:state.coachPrivate.users
}
 
})
  const getAllUsers=()=>{
    axios.get(`http://localhost:5000/coachs/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((result)=>{
      console.log(result);
    }).catch((err)=>{
      console.log(err);
    })
  }
  useEffect(() => {
getAllUsers()
  }, [])
  
let users_1=["ahmed","mohammed","ali","abed","ahmed","mohammed","ali","abed","ahmed","mohammed","ali","abed","ahmed","mohammed","ali","abed","ahmed","mohammed","ali","abed","ahmed","mohammed","ali","abed"]
let messages=[{name:"Mohammed Odat",message:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."},{name:"Mohammed Odat",message:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."},{name:"Mohammed Odat",message:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.iterature from 45 BC, making it over 2000 years old."},{name:"Mohammed Odat",message:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."},{name:"Mohammed Odat",message:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."},{name:"Mohammed Odat",message:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.111"},]
const [header, setHeader] = useState("")
  return (
    <div className='Coach-Private-Page'>
        <div className='Left-Side'>
          <div className='User-Filter'>
          <Form.Select
          style={{alignSelf:"center",width:"85%" ,paddingLeft:"5px",backgroundColor:"#3d3939",color:"white"}}
          aria-label="Default select example">
      <option>All Users</option>
      <option value="1">Premium Users</option>
      <option value="2">Gold Users</option>
      <option value="3">Lite Users</option>
    </Form.Select>
          </div>
            <div className='User-List'>
            {users_1.map((user,i)=>
                <div className='User-Name' onClick={()=>{
                  setHeader(user)
                }}># {user}</div>
            )}
            </div>
            <div className='My-Private'>
              <div className='img-title'> 
                <div className='Private-img'>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="white" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
                </div>
                <div className='Private-Title'>
                    My Private
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0"/>
  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z"/>
</svg>
                </div>
               
                <svg className='icon' 
                style={{cursor:"pointer"}}
                xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
</svg>
            </div>
        </div>
        <div className='Right-Side'>
          <div className='Header'>
            {header}
          </div>
          <div className='message'>
            {messages.map((ele,i)=>
              <div className='msg'>
                <div className='user-pic'>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>
                </div>
                <div className='user-message'>
                  <p>{ele.name}</p>
                  <p>{ele.message}</p>
                  
                </div>
              </div>
            )}
          </div>
          <div className='Input-Button'>
            <div className='Input'>
            <Form.Control

        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
            </div>
            <div className='Buttons'>
              <div className='left'>
              <Button>Image</Button>
                <Button>Video</Button>
                  <Button>File</Button>
              </div>
              <div className='right'>
              <Button>Send</Button>
              </div>
            </div>
          </div>
        </div>
    </div>
   
  )
}

export default CoachPrivate