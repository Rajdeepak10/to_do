const button = document.getElementById("add")

const list_container = document.getElementById("list_container")
const save_to_local_storage=()=>{
    localStorage.setItem("tasks",list_container.innerHTML)
}
const onClick = ()=>{
    const new_task=document.getElementById("input_box").value 
    if (new_task==="") {
        alert("Please enter some tasks")   
    }
    else{
        const listItem = document.createElement("li")
        listItem.innerHTML=new_task
        list_container.appendChild(listItem)

        const span = document.createElement("span")
        span.innerHTML="\u00d7"
        listItem.appendChild(span) 
        save_to_local_storage()
        
    }
    input_box.value=""
}
list_container.addEventListener("click",function(e){
        if(e.target.tagName=="SPAN"){
            e.target.parentElement.remove()
            save_to_local_storage()
        }
        else if (e.target.tagName=="LI"){
            e.target.classList.toggle("checked")
            save_to_local_storage()
        }
})
const show_data_from_local=()=>{
    list_container.innerHTML=localStorage.getItem("tasks")
}
show_data_from_local()



button.addEventListener("click",onClick)