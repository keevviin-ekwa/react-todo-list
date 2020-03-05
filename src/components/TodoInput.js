import React, {Component} from 'react';

class TodoInput extends Component {
    render() {
        const {item, handleChange, handleSubmit, editItem}= this.props;
        return (
           <div className="card body my-3">
               <form onSubmit={handleSubmit }>
                <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text bg-primary text-white">
                          <i className="fa fa-book"/>
                      </div>
                    </div>
                    <input type="text" className="form-control" placeholder="add todo Item"
                        value={item}
                        onChange={handleChange}
                    />
                </div>
                    <button
                        disabled={item ? false:true}
                        className="btn btn-block btn-primary mt-3 text-uppercase" type="submit">
                        {editItem ? 'edit item': 'add item'}
                        </button>
               </form>
           </div>
        );
    }
}

export default TodoInput;