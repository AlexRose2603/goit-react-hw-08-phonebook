import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Field, Label, Input, Btn } from './LoginForm.styled';
export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field>
        <Label>Email</Label>
        <Input type="email" name="email" />
      </Field>
      <Field>
        <Label>Password</Label>
        <Input type="password" name="password" />
      </Field>
      <Btn type="submit">Log in</Btn>
    </Form>
  );
};
