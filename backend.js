function start()
{
    accessStoredName();
}
function accessStoredName() {
    
    let storedName = localStorage.getItem('name');

    if (storedName) {
        
        console.log('Stored name:', storedName);

    } else {
        console.log('Name not found in localStorage');
    }
    let ime=document.getElementById("name");
    ime.innerHTML="<span>"+storedName+"</span>";
}





window.addEventListener("load",start)