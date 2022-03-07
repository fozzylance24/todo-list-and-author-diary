// declaration of variables
let textarea = document.querySelector("#textarea");
let appendButton = document.querySelector(".appending");
let storypad = document.querySelector(".content");



// event and funtions
appendButton.onclick = function(){
    if(textarea.value.length == 0){
          alert("Start writting your story");
    }
    else{ storypad.innerHTML += `
          
       <span id="story-content">
       ${document.querySelector("#textarea").value}
       </span>
    `;
    // remove or disable
    appendButton.style.backgroundColor = "#020003"; 
    appendButton.style.color = "gray"; 
    appendButton.style.opacity = "0.3"; 
    appendButton.style.pointerEvents = "none"; 
   

    }
    // clear textarea
   textarea.value = "";   
   
}

// edit code 
let editable = document.querySelectorAll(".edit");


for(let i=0; i<editable.length; i++){
    
    editable[i].onclick = function(){
        textarea.value = document.querySelector("#story-content").innerHTML;
        document.querySelector("#story-content").innerHTML = textarea.nodeValue ;
        // if( newTextarea = textarea.value) {
        //     document.querySelector("#story-content").innerHTML = textarea.value;
        // }
        
        appendButton.style.pointerEvents = "auto"; 
        appendButton.style.backgroundColor = "purple"; 
        appendButton.style.opacity = "1"; 
        appendButton.style.color = "white"; 
}

    }

    let input = document.getElementById("upload");
    let imageName = document.getElementById("imageName")

    input.addEventListener("change", ()=>{
        let inputImage = document.querySelector("input[type=file]").files[0];

        imageName.innerText = inputImage.name;
    })