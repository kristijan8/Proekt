        
        
        function func1()
        {
                let nameId=document.getElementById("kid");                
                let name=nameId.value;
                
                // Data to be stored
                
            
                // Save data to localStorage
                localStorage.setItem('name', name);
            
            

        }
        function func()
        {
        
            window.alert("Uspesno vneseni podatoci");
            window.location.href="index.html";
        }

        