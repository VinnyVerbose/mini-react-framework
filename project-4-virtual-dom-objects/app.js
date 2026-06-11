function ToDo(task){
    return {
        type: 'div',
        text: task.taskText
    }
}



let tree = 
    {
        type: 'div',
        children: [
            {
                type: 'h1', 
                text: 'Todo App'
            }, 
            {
                type: 'div', 
                text: '',
                children: [
                    {
                        type: 'p',
                        text: 'Learn React'
                    },
                    {
                        type: 'p',
                        text: 'Build Framework'
                    }
                ]
            }
        ]
    }


    
/*
Case 1: obj has text
Set the element's text

Case 2: obj has children
Loop through the children
Render each child
Append each rendered child to the parent element
*/
 document.body.appendChild(render(tree));

function render(obj){
    let elem = document.createElement(obj.type);
    if(obj.text){
        elem.innerText = obj.text;
    }

    if(obj.children){
        for(let i = 0; i < obj.children.length; i++){
            elem.appendChild(render(obj.children[i]));
        }
    }
    return elem;
}