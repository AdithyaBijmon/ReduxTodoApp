import React, { useState } from 'react'
import { useSelector } from 'react-redux';

function Todo() {
    const todos = useSelector(state => state.todo)
    
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const listItemClasses = `list-group-item p-3 ${isChecked ? 'bg-success-subtle' : ''}`;

    // const todo = useSelector(state =>state.todo)

    return (
        <div className='d-flex justify-content-center align-items-center w-100   flex-column' style={{ marginTop: '80px' }}>


            <ul className="list-group w-75 mt-4">
                {
                    todos?.length > 0 ?
                        todos?.map(todo => (
                            <li key={todo?.id} className={listItemClasses}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <input checked={isChecked} onChange={handleCheckboxChange} className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" />
                                        <label className="form-check-label ms-3" htmlFor="firstCheckbox">{todo?.title}</label>
                                    </div>
                                    <button className='btn'><i className="fa-solid fa-trash text-danger fs-5"></i></button>
                                </div>
                            </li>
                        ))
                        :
                        <p>No todo!!!</p>

                }
              
            </ul>

        </div>
    )
}

export default Todo