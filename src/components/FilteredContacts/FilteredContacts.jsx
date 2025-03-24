import { nanoid } from "nanoid";
import { Input , Label} from "./FilteredContacts.styled";


export default  function FilteredContacts({onFilter, filter})  {
    const labelId = nanoid();
   
    const onChangeName = (e) => {
        onFilter(e);
    };
    
        return (<>
            <Label htmlFor={labelId}>Enter contact name</Label>
            <Input
            id={labelId}
            onChange={onChangeName}
            type="text"
            placeholder="cat"
            value={filter}  
        />
        </>)
    
};
