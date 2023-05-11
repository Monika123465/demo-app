import React, { useState } from 'react'
import axios from 'axios';
import '../styles/form.css'
const url = 'http://localhost:8000/api/form'
const initialState = {
    name: "",
    email: "",
    password: "",
};

const Form = () => {
    const [form, setForm] = useState(initialState);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const hanldeSubmit = async () => {
        try {
            await axios.post(url, form);
            alert('form submitted')
        } catch (error) {
            alert(error.message);
        }
    }

  return (
    <div className='form'>
        <h1>Form</h1>
        <input className='input' type="text" value={form.name} onChange={handleChange} name="name" placeholder='enter your name' /><br/>
        <input className='input' type="text" value={form.email} onChange={handleChange} name="email" placeholder='enter your email' /><br/>
        <input className='input' type="text" value={form.password} onChange={handleChange} name="password" placeholder='enter your password' /><br/>

            <button onClick={hanldeSubmit
            } className='submit'>submit</button>
    </div>
  )
}

export default Form