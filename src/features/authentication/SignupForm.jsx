import Form from "../../ui/Form"
import FormRow from "../../ui/FormRow"
import Input from "../../ui/Input"
import Button from '../../ui/Button'

function SignupForm() {
    return (
        <Form>
            <FormRow label='full name' error={''}>
              <Input type='text' id='fullname'/>
            </FormRow>
            <FormRow label='Email address' error={''}>
                <Input type='eamil' id='email'/>
            </FormRow>
            <FormRow label='password' error={''}>
                <Input type='password' id='password'/>
            </FormRow>
            <FormRow label="Repeat password" error={""}>
            <Input type="password" id="passwordConfirm" />
            </FormRow>
            <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Create new user</Button>
      </FormRow>
        </Form>
    )
}

export default SignupForm