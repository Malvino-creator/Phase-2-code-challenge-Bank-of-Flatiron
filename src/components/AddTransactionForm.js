import React, {useState} from "react";


export const AddTransaction = () => {
const[date, setDate] = useState ('');
const[description,setDescription] = useState (0);
const[category,setCategory] = useState (1);
const[number,setAmount] = useState (2);


}

function AddTransactionForm() {
  return (
    <div className="ui segment">
      <form className="ui form">
        <div className="inline fields">
          <input type="date" name="date" />
          <input type="text" value={description} onChange={(e)=> setDescription(e.target.value)} name="description" placeholder="Description" />
          <input type="text" name="category" placeholder="Category" />
          <input type="number" name="amount" placeholder="Amount" step="0.01" />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
