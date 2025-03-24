import { Container, Title, TitleContacts } from "./App.styled";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addContact, deleteContact } from "../../redux/contactsSlice";
import { filteredContacts } from "../../redux/filterSlice";
import AddContacts from "../AddContacts/AddContacts";
import FilteredContacts from "../FilteredContacts/FilteredContacts";
import ContactsList from "../ContactsList/ContactsList";



export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
 

  
  const  addNewContact = ({ name, number }) => {
    
    const id = nanoid();
    const newContact = {
      id,
      name,
      number
    };

    const isFind = contacts.find((el) => el.name === name);
   
    if (isFind) {
      alert("go home mazafacka!!!");
      return;
     };
 
     dispatch(addContact(newContact));
  };
 
  const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };


  const onChangeFilter = (e) => {
    const string = e.currentTarget.value;
    dispatch(filteredContacts(string));
  };


  const normalaizeFilter = filter?.toLocaleLowerCase();


  const filteredArr = contacts.filter(contact => {
    return contact.name?.toLowerCase().includes(normalaizeFilter);
  });


   
    return (<Container>
      <Title>Phonebook</Title>
      <AddContacts onGetData={addNewContact}/>    
      <TitleContacts>Contacts</TitleContacts>
      <FilteredContacts
        onFilter={onChangeFilter}
        sort={filter} /> 
      <ContactsList
        onDeleteById={onDeleteContact}
        data={filteredArr} />
    </Container>)
  };









