import React  from 'react';

const Todos = (props)=>{
    const projects = props.projects ?  [ ...props.projects] : []
    const todoslist =  projects.length > 0 ? projects.map(item=>{
        return(   
            <div className='collection-item container' key={item.id} >
                <span class="center-align">{item.content}  </span>
                <button onClick={()=>{props.deletetodo(item.id)}}>delete</button>
            </div>
           
        )
         })
         : (
         <p className="center">you have no todos left</p>
     )
    return(
     <div className="todos collections"> 
            {todoslist}
    </div>
    )


}

export default Todos;