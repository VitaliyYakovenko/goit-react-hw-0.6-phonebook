import { useState } from "react";
import { nanoid } from "nanoid";
import { Label,Input, BtnAddContact} from "./AddContacts.styled";



export default function AddContacts({onGetData}) {
    const nameId = nanoid();
    const telId = nanoid();
  
    const [name, setName] = useState("");
    const [number, setNumber] = useState(""); 


    const  onInputName = (e) => {
        
        const name = e.target.name;
        const value = e.target.value;
    
        switch (name) {
            case "name":
                setName(value);
                break;
            case "number":
                setNumber(value);
                break;
            default:
                return;
        };
    }
   
    const onAddContact = (e) => {
        e.preventDefault();
        const data = { name, number };

        onGetData(data);
        reset();
        
    }

    const reset = () => {
        setName("");
        setNumber("");
    }


    
        return (<form onSubmit={onAddContact}>
            <Label htmlFor={nameId}>Name</Label>
            <br/>
            <Input
            onChange={onInputName}    
            id={nameId} 
            value={name}    
            type="text"
            name="name"
            required
            />
            <br/>
            <Label htmlFor={telId}>Number</Label>
            <br/>
            <Input
            onChange={onInputName}    
            id={telId}
            value={number}    
            type="tel"
            name="number"
            required
            />
            <br/>
            <BtnAddContact type="submit">Add Contact</BtnAddContact> 
            </form>)
};







