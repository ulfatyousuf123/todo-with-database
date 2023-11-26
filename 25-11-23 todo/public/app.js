var firebaseConfig = {
    apiKey: "AIzaSyB5hnjPKcVpUq63bSQMWKp2dA4qZTFaDdQ",
    authDomain: "todo-application-9dbf6.firebaseapp.com",
    databaseURL: "https://todo-application-9dbf6-default-rtdb.firebaseio.com",
    projectId: "todo-application-9dbf6",
    storageBucket: "todo-application-9dbf6.appspot.com",
    messagingSenderId: "820340295115",
    appId: "1:820340295115:web:428b58e95b98b76459e24e"
  };
  
  var app = firebase.initializeApp(firebaseConfig);
// console.log(database)



firebase.database().ref('user_todos').on('child_added',function(data){
   
   
    
   
   
   
        var li = document.createElement("li")
        var litext = document.createTextNode(data.val().value);
    
    
        li.appendChild(litext)
        list.appendChild(li)
        console.log(userInput.value)
    
        var delBtn = document.createElement("button")
        var delText = document.createTextNode("DELETE")
    
        delBtn.setAttribute("class", "btn")
        delBtn.setAttribute("id",data.val().key)
        delBtn.setAttribute("onclick", "deleteOnce(this)")
    
        delBtn.appendChild(delText)
        li.appendChild(delBtn)
        list.appendChild(li)
        // userInput.value= "";
        console.log(li.value);
    
     var editBtn = document.createElement("button")
     var editText = document.createTextNode("Edit")
    
     editBtn.appendChild(editText)
     editBtn.setAttribute("class","btnw")
     editBtn.setAttribute("id",data.val().key)

     editBtn.setAttribute("onclick","editItem(this)")
     editBtn.appendChild(editText)
     li.appendChild(editBtn)
     list.appendChild(li)
    console.log(li)
   
    console.log(data.val())



})




// var list = document.getElementById("list");

function addTodo () {
    var userInput = document.getElementById("userInput")
    var database = firebase.database().ref('user_todos')
    var key = database.push().key
    var todo = {
        value: userInput.value,
        key : key
    }
    
    database.child(key).set(todo)
    userInput.value= "";


// var key = firebase.database().ref('todos').push().key;
// console.log(key)





 }


function deleteOnce(e){
    firebase.database().ref("user_todos").child(e.id).remove()
    e.parentNode.remove()
// console.log(e.id)
    
}

function DELETEALL(){
    // var list = document.getElementById("list");
    firebase.database().ref("user_todos").remove()
    list.innerHTML = "";

}
 
function editItem(e){
    var val = prompt("enter update value");
    e.parentNode.firstChild.nodeValue = val;
    
    var editTodo = {
        value : val,
        key : e.id
    }
    firebase.database().ref("user_todos").child(e.id).set(editTodo)
console.log(editTodo)


}