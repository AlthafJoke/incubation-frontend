import React from 'react'
import { Form } from 'rsuite'

const LoginForm = () => {
  return (
    <div>
        <Form>
            <input type="text" name="username"  placeholder='Enter username'/>
            <input type="password" name="password" placeholder='Enter password'/>
            <input type="submit" />
        </Form>
    </div>
  )
}

export default LoginForm