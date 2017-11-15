

/* submit button pop-up */

  	function clicked(e) 
{var name = document.getElementsByName("name")[0].value;
    if(!confirm("Ah, " + name + ", you sure you want me to keep bugging you?"))e.preventDefault();
}



