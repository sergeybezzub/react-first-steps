import React from "react";
import ToDjRow from './ToDoRow'

const RenderComponent = () => {
    const toDos = [
        {id: 1, todo: 'firstTodo'},
        {id: 2, todo: 'secondTodo'},
        {id: 3, todo: 'thirdTodo'},
        {id: 4, todo: 'fourthTodo'}
    ];

    const rander1 = false;
    const rander2 = true;

    const rander3 = ''; // false
    const rander4 = 'abc'; // true

    const rander5 = []; // true
    const rander6 = [1, 2, 3]; // true

    if(rander1) {
        return <>
            {rander1 && <p>It's Rander1</p>}
        </>
    } else if (rander3) {
        return <>
            {rander3 && <p>It's Rander3</p>}
        </>
    } else if( rander5.length > 0) {

        return <>
        
           {rander2 && <p>It's Rander2</p>}
            {rander4 && <p>It's Rander4</p>}
            {rander5 && <p>It's Rander5</p>}
            {rander6 && <p>It's Rander6</p>}

            {rander5.length ? <p>Massiv5 is not empty</p> : null}
            {rander6.length ? <p>Massiv6 is not empty</p> : null}
        </>;
    } else {
        return <div>
            {toDos.map((todo) => {
                console.log(todo);
                return <ToDjRow key={todo.id} todo={todo.todo} />;
            })    
        }
        </div>
    }
    
};

export default RenderComponent;