import React from 'react';

function FilterButton (props) {
    return (
        <>
<div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Montrer </span>
          <span>{props.name}</span>
          <span className="visually-hidden"> les tâches</span>
        </button>
      </div>
        </> 
        );
    }
    export default FilterButton;
        