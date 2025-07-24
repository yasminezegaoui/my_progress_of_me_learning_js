function changeStyle(){
    let name = prompt()
    let span = document.getElementById('span');
    span.textContent = name
    span.style.color = 'red';
    let heading = document.getElementById('h1')
    heading.style.fontSize = '40px'
}

function getUserInput(event){
    event.preventDefault();
    let form = document.getElementById('form')
    let userName = form.elements.username.value
    let email = form.elements.email.value
    let password = form.elements.password.value
    console.log(userName)
    console.log(email)
    console.log(password)
    storeUserInput(userName, email, password);
    form.reset();
}

function storeUserInput(userName, email, password){
    let table = document.getElementById('userTable');
    let newRow = table.insertRow(); 

    let nameCell = newRow.insertCell(0);
    let emailCell = newRow.insertCell(1);
    let passwordCell = newRow.insertCell(2);

    nameCell.textContent = userName;
    emailCell.textContent = email;
    passwordCell.textContent = password;
}