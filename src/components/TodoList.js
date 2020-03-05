import React, {Component} from 'react';
import  Item from './TodoItem'

class TodoList extends Component {
    render() {
        const {items, clearList, handleDelete,handleEdit}= this.props;
        return (
           <ul className="list-group my-5">
               <h3 className="text-capitalize text-center"> Todo list </h3>
                   {items.map(item=>{return(<Item key={item.id} title={item.title} handleDelete={()=>handleDelete(item.id)}
                   handleEdit={()=>handleEdit(item.id)}
                   />)})}


                   <button className="btn btn-danger btn-block text-uppercase mt-5" onClick={clearList}>
                    clear list
                   </button>

           </ul>
        );
    }
}

export default TodoList;