import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.css'

class Item extends Component {

    render() {
        const {title,handleDelete, handleEdit} = this.props;
        return (
          <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
            <h6>{title}</ h6>
              <div className="todo-icon">
                  <span className="mx-2 text-success" onClick={handleEdit}>
                      <i className="fa fa-pencil"></i>
                  </span>
                  <span className="mx-2 text-success" onClick={handleDelete}>
                      <i className="fa fa-trash"></i>
                  </span>
              </div>
          </li>
        );
    }
}

export default Item;