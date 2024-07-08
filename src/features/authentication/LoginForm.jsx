import Form from "../../ui/Form"
import FormRowVertical from "../../ui/FormRowVertical"
import Input from "../../ui/Input"


function LoginForm() {
    return (
        <Form>
            <FormRowVertical label='Email address'>
             <Input type='email' id='email' autoComplete='username'/>
            </FormRowVertical>
            <FormRowVertical label='password'>
                <Input
                type='password' id='password' autoComplete='password'/>
            </FormRowVertical>
            <FormRowVertical>
                <button size='large'>Login</button>
            </FormRowVertical>
        </Form>
    )
}

export default LoginForm
