import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

const Application = () => {
    //form inputs
    const [formData, setFormData] = useState({
        name: 'asdf',
        email: 'asdf@asdf',
        funfact: 'asdf'
    })
    const { name, email, funfact } = formData
    const onChange = i =>
        setFormData({ ...formData, [i.target.name]: i.target.value })

    const onSubmit = async e => {
        try {
            const res = await axios
                .get('https://hack-uci-test-endpoint.herokuapp.com/test', {
                    params: formData
                })
                .then(
                    setFormData({
                        name: '',
                        email: '',
                        funfact: ''
                    })
                )
            console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='App'>
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
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={i => onChange(i)}
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
