import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ContactList } from '../../components/ContactList/ContactList';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { Container, Title, Section, Total } from './Contacts.styled';
import { fetchContacts } from 'redux/operations';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Filter />
      <Section>Contacts</Section>
      {isLoading && !error && <b>Wait for it...</b>}
      <ContactList />
      <Total>Total number of contacts: {contacts.length}</Total>
    </Container>
  );
};
