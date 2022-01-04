let input = document.getElementById("newtask");
let clear = document.getElementById("clear");

input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        let chkb = document.createElement("input");
        chkb.type = "checkbox";
        chkb.classList.add("taskcb");
        chkb.checked = false;

        let lbl = document.createElement("label");
        lbl.classList.add("labletask");
        lbl.innerHTML = event.target.value;

        let todolist = document.getElementById("todo");
        todolist.appendChild(chkb);
        todolist.appendChild(lbl);
        todolist.appendChild(document.createElement("br"));
        todolist.appendChild(document.createElement("br"));

        chkb.addEventListener("change" , (event) =>{
            let checkedlab = event.target.nextSibling;
            checkedlab.classList.add("finish");
        });

        event.target.value = "";
    }
});


clear.addEventListener("click", (event) => {
    let todolist = document.getElementById("todo");
    let checked = document.querySelectorAll(".taskcb:checked");
    for(let i = 0; i < checked.length; i++){
        let cb = checked[i];
        let lbl = cb.nextSibling;

        todolist.removeChild(cb);
        todolist.removeChild(lbl);



    }
});

