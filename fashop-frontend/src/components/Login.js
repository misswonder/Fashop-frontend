import React from 'react';
import { Button, Form, Segment, Divider, Grid } from 'semantic-ui-react';

const Login = () => (

    <Segment placeholder>
        <Grid columns={2} relaxed='very' stackable>
        <Grid.Column>
            <Form>
            <Form.Input
                icon='user'
                iconPosition='left'
                label='Email'
                placeholder='Email'
            />
            <Form.Input
                icon='lock'
                iconPosition='left'
                label='Password'
                type='password'
            />

            <Button content='Login' primary />
            </Form>
        </Grid.Column>

        <Grid.Column verticalAlign='middle'>
            <Button content='Sign up' icon='signup' size='big' />
        </Grid.Column>
        </Grid>

        <Divider vertical>Or</Divider>
    </Segment>

    //   <Segment inverted>
    //     <Form inverted>
    //         <Form.Field inline >
    //             <label>Email</label>
    //                 <Input placeholder='Email' />
    //         </Form.Field>
    //         <Form.Field inline>
    //             <label>Password</label> 
    //                 <Input placeholder="Password" /> 
    //         </Form.Field>
    //         {/* <Form.Group widths="equal">
    //             <Form.Input fluid label='Email' placeholder='Email' />
    //             <Form.Input fluid label='Password' placeholder='Password' />
    //         </Form.Group> */}
    //         <Form.Checkbox label='I agree to the Terms and Conditions' />
    //         <Button type='submit'>Submit</Button>
    //     </Form>
    //   </Segment>

//     <Form>
//     <Form.Field>
//       <label>Email</label>
//       <input placeholder='Email' />
//     </Form.Field>
//     <Form.Field>
//       <label>Password</label>
//       <input placeholder='Password' />
//     </Form.Field>
//     <Form.Field>
//       <Checkbox label='I agree to the Terms and Conditions' />
//     </Form.Field>
//     <Button type='submit'>Submit</Button>
//   </Form>
   
)

export default Login;