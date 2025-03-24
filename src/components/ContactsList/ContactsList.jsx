import {
    ContactItem,
    ContactName,
    ContactPhone,
    BtnDelete
} from "./ContactsList.styled";

export default function ContactsList ({onDeleteById,data}) {
 
    const onDelete = (id) => {
        onDeleteById(id);
    };
        
        return (
            <ul>
                {data.map(contact => (
                    <ContactItem key={contact.id}>
                        <ContactName>{contact.name}</ContactName>
                        <ContactPhone>{contact.number}</ContactPhone>
                        <BtnDelete
                        onClick={()=> onDelete(contact.id)}    
                        type="button">Delete</BtnDelete>
                    </ContactItem>
                ))}
            </ul>
        );

};


