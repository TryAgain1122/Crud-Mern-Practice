import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams} from 'react-router-dom'

const Create = () => {
  const {id} = useParams()
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:3000/getUser/"+id)
    .then(result => {
      console.log(result)
      setName(result.data.name)
      setEmail(result.data.email)
      setAge(result.data.age)
    })
    .catch(err => console.log(err))
  }, [])

  const Submit = (e) => {
   
    e.preventDefault();
    axios.put("http://localhost:3000/updateUser/"+id, {name, email, age})
    .then((result) => {
      console.log(result)
      navigate('/')
    }).catch(err => console.log(err))

  }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={Submit}>
          <h2>Update User</h2>
          <div className='mb-2'>
            <label htmlFor="">Name</label>
            <input type="text" className='form-control' onChange={e => setName(e.target.value)} value={name}/>
          </div>
          <div className='mb-2'>
            <label htmlFor="">Email</label>
            <input type="text" className='form-control' onChange={e => setEmail(e.target.value)} value={email}/>
          </div>
          <div className='mb-2'>
            <label htmlFor="">Age</label>
            <input type="text" className='form-control' onChange={e => setAge(e.target.value)} value={age}/>
          </div>
          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Create