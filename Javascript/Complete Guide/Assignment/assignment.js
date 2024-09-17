const task3Element = document.getElementById('task-3');
task3Element.addEventListener('click', One);


function One(){
    alert("Hello");
}

function Two(name){
    alert(name);
}
alert( Three(1,2,3) );
function Three(one, two , three){
    return `${one} ${two} ${three}`;
}

One();
Two("Pokemon");