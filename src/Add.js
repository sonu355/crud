import React,{useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Employees from './Employees'


export default function Add() {
    const[name, setName] = useState()
    const[age, setAge] = useState()

    let history = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const ids = Math.random();
        console.log(ids);
        let uniqueId = ids.toString(36).substring(2, 9)
      

        let a = name,
        b = age;

        Employees.push({id: uniqueId, Name : a, Age : b})
        history('/')
    }

  return (
    <div>
      <Form className='d-grid gap-2' style={{margin:"15rem"}}>
        <Form.Group className='mb-3' controlId='formName'>
            <Form.Control type='text'placeholder='Enter your Name' required
            onChange={(e) => setName(e.target.value)}>
            </Form.Control>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formAge'>
            <Form.Control type='text'placeholder='Enter your Age' required
            onChange={(e) => setAge(e.target.value)}>
            </Form.Control>
        </Form.Group>
        <Button onClick={(e) => handleSubmit(e)} type='submit'>Submit</Button>
      </Form>
    </div>
  )
}
