import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

const Application = () => {
    //form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        funfact: ''
    })
    //form validation
    const [validated, setValidated] = useState(false)

    const { name, email, funfact } = formData
    //getting data from form
    const onChange = i =>
        setFormData({ ...formData, [i.target.name]: i.target.value })
    //submition
    const onSubmit = async e => {
        const form = e.currentTarget
        //check if inputs are valid
        if (form.checkValidity() === false) {
            e.preventDefault()
            e.stopPropagation()
        }
        setValidated(false)
        try {
            const res = await axios
                .get('https://hack-uci-test-endpoint.herokuapp.com/test', {
                    params: {
                        name,
                        email,
                        funfact
                    }
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
            <h1>Hack UCI Application</h1>
            <Form
                noValidate
                validated={validated}
                className='form'
                onSubmit={i => onSubmit(i)}
            >
                <Form.Group
                    controlId='validationCustom01'
                    className='form-group'
                >
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Name'
                        name='name'
                        value={name}
                        onChange={i => onChange(i)}
                        required
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type='invalid'>
                        Please enter a name.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                    controlId='validationCustom02'
                    className='form-group'
                >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={email}
                        onChange={i => onChange(i)}
                        required
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type='invalid'>
                        Please enter a valid email.
                    </Form.Control.Feedback>
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
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type='invalid'>
                        Please enter a fact.
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant='primary' type='submit'>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Application
