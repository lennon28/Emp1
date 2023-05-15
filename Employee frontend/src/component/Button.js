import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import "./Button.css"

const ButtonGroup = (props) => {



  
  return (
    <div className="button-group">
      <button className="button" onClick={props.handleSubmit}>
        <FontAwesomeIcon icon={faSave} />
        Save
      </button>
      <button className="button" >
        <FontAwesomeIcon icon={faTrash} />
        Clear
      </button>
      <button className="button">
        <FontAwesomeIcon icon={faEdit} />
        Edit
      </button>
    </div>
  );
};

export default ButtonGroup;
