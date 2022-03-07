document.querySelector(".button").onclick = function(){
    if(document.querySelector(".todo-input").value.length == 0){
         
        alert("please enter a task");
    } else{ 
        document.querySelector(".list").innerHTML += `
            <div class= "task">
               <span>
                 ${ document.querySelector(".todo-input").value}
               </span>
              <div>
                    <button class="check">
                        <i class="fa fa-check"></i>
                    </button>
                    <button class="delete">
                        <i class="fa fa-trash"></i>
                    </button>
              </div>
               
            </div>
        
        `;
      
};   // deleting task
let current_tasks = document.querySelectorAll(".delete");
for(let i=0; i<current_tasks.length; i++){
    current_tasks[i].onclick = function(){
    document.querySelector(".task").remove();
   // this.parentNode.remove();
}

    }
    let tasks = document.querySelectorAll(".task");
for(let i=0; i<tasks.length; i++){
    tasks[i].onclick = function(){
   this.classList.toggle('completed');
   // this.parentNode.remove();

}

    }
    document.querySelector(".todo-input").value = "";
    document.querySelector(".no-task").remove();
}

/////////// pop up the plus tab add
let plusButton = document.querySelector(".b");
   plusButton.onclick = function(){
       let plus = document.querySelector(".plus");
       plus.classList.toggle("plus-visible");
   }
   // remove
//    let removeBtn = document.querySelector(".plus-remove");
//    removeBtn.onclick = function(){
//        let plus = document.querySelector(".plus");
//        plus.classList.toggle("plus-not-visible");
//    }


/////// pop up notifications
let notButton = document.querySelector(".a");
   notButton.onclick = function(){
     //  alert("ITS CLICKED");
        document.querySelector(".notifications").style.opacity = "1";
        document.querySelector(".notifications").style.transition = "ease-in-out 0.5s";
       
   }


$(document).ready( function(){
   $(".cancel").click(function(){
        $(".notifications").hide();
   });
});
document.querySelector(".cancel").style.cursor = "pointer";


document.querySelector("")






















// //selectors
//  const todoInput = document.querySelector('todo-input');
//  const todoButton = document.querySelector('add');
//  const todoList = document.querySelector('list');

// // event listeners
// todoButton.addEventListener("click", addTodo);

// //functions
// function addTodo(event){
//     // prevent form from submitting
//     event.preventDefault();
//     //create todo div
//     const todoDiv = document.createElement("div");
//     todoDiv.classList.add("todo");
//     // creating li 
//     const newTodo = document.createElement('li');
//     newTodo.innerText = 'hey';
//     newTodo.classList.add('todo-item' );
//     todoDiv.appendChild(newTodo);
//     // check button
//     const completedButton = document.createElement('button');
//     completedButton.innerHTML = '<i class="fa fa-check"> </i>';
//     completedButton.classList.add("complete-btn")
//     todoDiv.appendChild(completedbutton);
//      // trash button
//      const trash = document.createElement('button');
//      trash.innerHTML = '<i class="fa fa-trash"> </i>';
//      trash.classList.add("trash-btn")
//      todoDiv.appendChild(trash);
//      // append to list
//      todoList.appendChild(todoDiv);
// }