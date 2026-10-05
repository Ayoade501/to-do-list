let userInput = document.getElementById('userInput');
let list =[]

userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addItem();
    }
});
userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Delete') {
        deleteLastItem();
    }
});
function addItem(){
    if (userInput.value.trim() === "") {
        alert('input cannot be empty')
    }else {
        list.push(userInput.value)
        document.getElementById('userInput').value = ""
       displayItems()
    }

}

function displayItems (){
    document.getElementById('display').innerHTML = ""
        for (let index = 0; index < list.length; index++) {
            const element = list[index];

            document.getElementById('display').innerHTML += `<p>${index +1 }. ${element}</p>`

            
        }
}
function deleteLastItem(){
    if (list.length < 1) {
        alert("There's no item to delete")
    }else{
        let check = confirm('Are you sure you want to delete the last item on the list')
        if (check) {
            list.pop()
            displayItems()
  
        }
    }
}

function deleteAllItem(){
    if (list.length < 1) {
        alert("There's no item to delete")
    }else{
        let check = confirm("Are you sure you want to delete")
        if (check) {
            list.splice(0, list.length)
            displayItems()  
        }
    }
}





// function deleteAllItem(){
//     if (cart.length < 1) {
//         alert("There's no item to delete")
//     }else{
//         let check = confirm("Are you sure you want to delete all items?")
//         if (check) {
//             cart.splice(0, cart.length)
//             displayItem()   // ← matches the actual function name
//         }
//     }
// }