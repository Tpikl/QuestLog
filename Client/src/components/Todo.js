import React from 'react';

const Todo = () => {


    return (
        <div className='todo'>
            <div className='titleHeader pointer'>
                <h3>To Do:</h3>&nbsp;&nbsp;
                <div className='flexCenter'>
                    <i className='addBtn pointer far fa-plus-square' onClick={() => {}}></i>
                </div>
            </div>
        </div>
    );
}

export default Todo;