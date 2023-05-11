import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, List, FormItem, Label, Input, Btn } from './RegisterForm.styled';
export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.PreventDefault();
    const form = event.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <List>
        <FormItem>
          <Label>Username</Label>
          <Input type="text" name="name" />
        </FormItem>
        <FormItem>
          <Label>Email</Label>
          <Input type="email" name="email" />
        </FormItem>
        <FormItem>
          <Label>Password</Label>
          <Input type="password" name="password" />
        </FormItem>
      </List>
      <Btn type="submit">Register</Btn>
    </Form>
  );
};
