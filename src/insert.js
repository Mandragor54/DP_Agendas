const nav = document.getElementById('navbar');
fetch('/src/navbar.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML = data
});