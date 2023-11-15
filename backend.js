function start()
{
    accessStoredName();
}
function accessStoredName() {
    // Retrieve data from localStorage
    let storedName = localStorage.getItem('name');

    if (storedName) {
        // Do something with the retrieved name
        console.log('Stored name:', storedName);
        // You can use the storedName variable wherever you need it in this file
    } else {
        console.log('Name not found in localStorage');
    }
    let ime=document.getElementById("name");
    ime.innerHTML="<span>"+storedName+"</span>";
}

// Call the function to access the stored name




window.addEventListener("load",start)