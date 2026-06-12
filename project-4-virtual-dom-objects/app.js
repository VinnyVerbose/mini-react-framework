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
                text: 'Todo App',
                props: {
                    id: 'appHeader'
                }
            }, 
            {
                type: 'div', 
                text: '',
                children: [
                    {
                        type: 'p',
                        text: 'Learn React',
                        props: {
                            class: 'paragraph'
                        }
                    },
                    {
                        type: 'p',
                        text: 'Build Framework',
                        props: {
                            class: 'nextParagraph'
                        }
                    }
                ]
            }
        ]
    }

document.body.appendChild(render(tree));
function render(obj){
    let elem = document.createElement(obj.type);

    if(obj.props){
        for(const [key, value] of Object.entries(obj.props)){
            elem.setAttribute(key, value);
        }
        
    }

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


