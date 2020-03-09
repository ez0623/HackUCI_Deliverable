import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Application = () => {
    //form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        funfact: ''
    })
    const { name, email, funfact } = formData
    const onChange = i => {
        setFormData({ ...formData, [i.target.name]: i.target.value })
    }

    const onSubmit = event => {
        event.preventDefault()
        axios
            .get('https://hack-uci-test-endpoint.herokuapp.com/test', {
                params: formData
            })
            .then(res => {
                setFormData({
                    name: '',
                    email: '',
                    funfact: ''
                })
                toast.success('Successful Submission!', {
                    position: 'top-center',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false
                })
                console.log(res)
            })
            .catch(err => {
                toast.error('Successful Error!', {
                    position: 'top-center',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: false
                })
                console.log(err)
            })
    }
    return (
        <div className='App'>
            <ToastContainer
                position='top-center'
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange={false}
                draggable={false}
                pauseOnHover={false}
            />
            <Form className='form' onSubmit={i => onSubmit(i)}>
                <h2>Hack UCI Application</h2>
                <Form.Group className='form-group'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Name'
                        name='name'
                        value={name}
                        onChange={i => onChange(i)}
                        required
                    />
                </Form.Group>
                <Form.Group className='form-group'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={i => onChange(i)}
                        pattern='^([A-Za-z0-9]+)@([A-Za-z0-9_\-\.]+)\.([A-Za-z]+)$'
                        required
                    />
                </Form.Group>
                <Form.Group className='form-group'>
                    <Form.Label>Fun Fact</Form.Label>
                    <Form.Control
                        as='textarea'
                        rows='2'
                        type='text'
                        placeholder='Fun Fact'
                        name='funfact'
                        value={funfact}
                        onChange={i => onChange(i)}
                        required
                    />
                </Form.Group>
                <button className='button' type='submit'>
                    Submit
                </button>
            </Form>
        </div>
    )
}

export default Application
