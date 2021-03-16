import React,{useState} from "react";
import List from "./List";

const App = () => {
    const [inputItem,setInputItem] = useState("");
    const [items,setItems] = useState([]);

    const inputEvent = (event) =>{
        setInputItem(event.target.value)
    }
    const itemList = () =>{
        setItems((preItems) => {
            return [...preItems, inputItem];
        });
        setInputItem("");
    };
    const deleteItem = (id) =>{
        console.log("deleted");

        setItems((preItems) => {
            return preItems.filter((arrayElement, index) =>{
                return index !== id;
            })
        });
    }

    return(
        <>
            <div className="mainDiv">
                <div className="centerDiv">
                    <br/>
                    <h1>To Do List App</h1>
                    <br/>
                    <input type="text" placeholder="Add a item"
                     onChange={inputEvent}
                     value={inputItem} />
                    <button onClick={itemList} > + </button>

                    <ol>
                        <div className="list_area">
                           {items.map((itemvalue,index) => {
                         return   <List text = {itemvalue} id={index} key={index} onSelect={deleteItem}/>
                        })
                        } 
                        </div>
                        
                    </ol>
                </div>
            </div>
        </>
    )
};

export default App;