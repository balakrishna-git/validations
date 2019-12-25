function formValidation() {

    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var addr = document.getElementById('addr').value;
	var address = document.getElementById('address').value;
    var city = document.getElementById('town').value;
    var pin = document.getElementById('pin').value;
    var state = document.getElementById('state').value;
    var mobileno = document.getElementById('mobileno').value;
    var email = document.getElementById('email').value;

    var firstname1 = document.getElementById('firstname1').value;
    var lastname1 = document.getElementById('lastname1').value;
    var addr1 = document.getElementById('addr1').value;
	var address1 = document.getElementById('address1').value;
    var city1 = document.getElementById('town1').value;
    var pin1 = document.getElementById('pin1').value;
    var state1 = document.getElementById('state1').value;
	
	if (firstname.length == "") {
               document.getElementById("p1").innerHTML = "Enter your first name";
			   document.getElementById('firstname').style.borderColor = "red";
           }
      if (lastname.length == "") {
               document.getElementById("p2").innerHTML = "Enter your last name";
			   document.getElementById('lastname').style.borderColor = "red";
           }
		   if (email.length == "") {
               document.getElementById("p3").innerHTML = "Enter your email";
			   document.getElementById('email').style.borderColor = "red";
           }
		   if (addr.length == "") {
               document.getElementById("p4").innerHTML = "Enter your address";
			   document.getElementById('addr').style.borderColor = "red";
           }
		   if (city.length == "") {
               document.getElementById("p5").innerHTML = "Enter city name";
			   document.getElementById('town').style.borderColor = "red";
           }
		   if (state == "Please Choose") {
               document.getElementById("p6").innerHTML = "Select state";
			   document.getElementById('state').style.borderColor = "red";
           }
		   if (pin.length == "") {
               document.getElementById("p7").innerHTML = "Enter your pincode";
			   document.getElementById('pin').style.borderColor = "red";
           }
		   if (mobileno.length == "") {
               document.getElementById("p8").innerHTML = "Enter your mobileno";
			   document.getElementById('mobileno').style.borderColor = "red";
           }
		   if (document.getElementById("form1").style.display === "block") {
		   if (firstname1.length == "") {
               document.getElementById("p11").innerHTML = "Enter your first name";
			   document.getElementById('firstname1').style.borderColor = "red";
           }
      if (lastname1.length == "") {
               document.getElementById("p2").innerHTML = "Enter your last name";
			   document.getElementById('lastname1').style.borderColor = "red";
           }
		   if (addr1.length == "") {
               document.getElementById("p44").innerHTML = "Enter your address";
			   document.getElementById('addr1').style.borderColor = "red";
           }
		   if (city1.length == "") {
               document.getElementById("p55").innerHTML = "Enter city name";
			   document.getElementById('town1').style.borderColor = "red";
           }
		   if (state1 == "Please Choose") {
               document.getElementById("p66").innerHTML = "Select your state ";
			   document.getElementById('state1').style.borderColor = "red";
           }
		   if (pin1.length == "") {
               document.getElementById("p77").innerHTML = "Enter your pincode";
			   document.getElementById('pin1').style.borderColor = "red";
           }
		   if(firstname1.match(/^[a-zA-Z]{4,}$/)&&lastname1.match(/^[a-zA-Z]{1,}$/) && addr1.match(/^[0-9a-zA-Z]{10,}$/) && state1 !== "Please Choose" && pin1.match(/^[0-9]{6}$/)){
		console.log(firstname1+","+lastname1+","+addr1+","+city1+","+state1+","+pin1);
        }
		   return false;
		   }
        //firstname.focus();
		if(firstname.match(/^[a-zA-Z]{4,}$/)&&lastname.match(/^[a-zA-Z]{1,}$/) && email.match(/^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/) && addr.match(/^[0-9a-zA-Z]{10,}$/) && state !== "Please Choose" && pin.match(/^[0-9]{6}$/) && mobileno.match(/^[0-9]{10}$/)){
		console.log(firstname+","+lastname+","+email+","+addr+","+city+","+state+","+pin+","+mobileno);
		}
		
		return false;
    }


    function formVal1() {
        var firstname = document.getElementById('firstname');

        
        if(firstname.value.match(/^[a-zA-Z]{4,}$/)) {
            document.getElementById('p1').innerHTML = "";
            document.getElementById('firstname').style.borderColor = "green";
			return true;
        }
   if(!firstname.value.match(/^[a-zA-Z]{4,}$/)) {
            document.getElementById('firstname').style.borderColor = "red";
			document.getElementById('p1').innerHTML = "<span style='color:red;'> For your first name please enter minimum 4 charactors. </span>";
			//firstname.focus();
			return false;
        }
		


    }
    function formVal2() {
        var lastname = document.getElementById('lastname');
        if(lastname.value.match(/^[a-zA-Z]{1,}$/)) {
            document.getElementById('p2').innerHTML = "";
            document.getElementById('lastname').style.borderColor = "green";
			return true;
        }
   if(!lastname.value.match(/^[a-zA-Z]{1,}$/)) {
            document.getElementById('lastname').style.borderColor = "red";
			document.getElementById('p2').innerHTML = "<span style='color:red;'> For your last name please enter minimum one charactor. </span>";
			//lastname.focus();
			return false;
        }
    }
    function formVal3() {
        var email = document.getElementById('email');
         if(email.value.match(/^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/)) {
            document.getElementById('p3').innerHTML = "";
            document.getElementById('email').style.borderColor = "green";
			return true;
        }
		if(!email.value.match(/^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/)) {
            document.getElementById('p3').innerHTML = "Please enter valid mail id";
            document.getElementById('email').style.borderColor = "red";
			return false;
        }


    }

    function formVal4() {
        var addr = document.getElementById('addr').value;

         if(addr.match(/^[0-9a-zA-Z]{10,}$/)){
            document.getElementById('p4').innerHTML = "";
            document.getElementById('addr').style.borderColor = "green";
			return true;
        }
		if(!addr.match(/^[0-9a-zA-Z]{10,}$/)){
            document.getElementById('p4').innerHTML = "Please enter minimum 10 charactors";
            document.getElementById('addr').style.borderColor = "red";
			return false;
        }
    }
    function formVal5() {
        var city = document.getElementById('town').value;
        if(!city.match(/^[a-zA-Z]{5,}$/)){
            document.getElementById('p5').innerHTML = "Please enter valid City/Town name";
            document.getElementById('town').style.borderColor = "red";
			return false;
        } if(city.match(/^[a-zA-Z]{5,}$/)) {
            document.getElementById('p5').innerHTML = "";
            document.getElementById('town').style.borderColor = "green";
			return true;
        }


    }
    function formVal6() {
        var state = document.getElementById('state');
        if (state.value == "Please Choose") {

            document.getElementById('state').style.borderColor = "red";
			document.getElementById('p6').innerHTML = "Please select one state";
            return false;
        } 
		if (state.value !== "Please Choose") {
            document.getElementById('p6').innerHTML = "";
            document.getElementById('state').style.borderColor = "green";
			return true;
        }


    }
    function formVal7() {
        var pin = document.getElementById('pin').value;

        if (!pin.match(/^[0-9]{6}$/)) {
             document.getElementById('p7').innerHTML = "Please enter valid pincode";
            document.getElementById('pin').style.borderColor = "red";
            return false;
        } 
          if (pin.match(/^[0-9]{6}$/)){
            document.getElementById('p7').innerHTML = "";
            document.getElementById('pin').style.borderColor = "green";
			return true;
        }



    }
    function formVal8() {
        var mobileno = document.getElementById('mobileno').value;

        if (!mobileno.match(/^[0-9]{10}$/)) {
            document.getElementById('p8').innerHTML = "Please enter valid mobile number";
            document.getElementById('mobileno').style.borderColor = "red";
            return false;
        } 
         if (mobileno.length == 10 && mobileno.match(/^[0-9]{10}$/))
		{
            document.getElementById('p8').innerHTML = "";
            document.getElementById('mobileno').style.borderColor = "green";
			return true;
        }



    }



    function myFun() {
        document.getElementById("formid").reset();
		document.getElementById("formid1").reset();
    }


    
function formVal11() {
        var firstname1 = document.getElementById('firstname1');
        if(firstname1.value.match(/^[a-zA-Z]{4,}$/)) {
            document.getElementById('p11').innerHTML = "";
            document.getElementById('firstname1').style.borderColor = "green";
			return true;
        }
   if(!firstname1.value.match(/^[a-zA-Z]{4,}$/)) {
            document.getElementById('firstname1').style.borderColor = "red";
			document.getElementById('p11').innerHTML = "<span style='color:red;'> For your first name please enter minimum 4 charactors. </span>";
			//firstname.focus();
			return false;
        }
	}
    
	function formVal22() {
        var lastname1 = document.getElementById('lastname1');
        if(lastname1.value.match(/^[a-zA-Z]{1,}$/)) {
            document.getElementById('p22').innerHTML = "";
            document.getElementById('lastname1').style.borderColor = "green";
			return true;
        }
   if(!lastname1.value.match(/^[a-zA-Z]{1,}$/)) {
            document.getElementById('lastname1').style.borderColor = "red";
			document.getElementById('p22').innerHTML = "<span style='color:red;'> For your last name please enter minimum one charactor. </span>";
			lastname.focus();
			return false;
        }
    }
	
    
  function formVal44() {
        var addr1 = document.getElementById('addr1').value;

         if(addr1.match(/^[0-9a-zA-Z]{10,}$/)){
            document.getElementById('p44').innerHTML = "";
            document.getElementById('addr1').style.borderColor = "green";
			return true;
        }
		if(!addr1.match(/^[0-9a-zA-Z]{10,}$/)){
            document.getElementById('p44').innerHTML = "Please enter minimum 10 charactors";
            document.getElementById('addr1').style.borderColor = "red";
			return false;
        }
    }  
function formVal55() {
        var city = document.getElementById('town1').value;
        if(!city.match(/^[a-zA-Z]{5,}$/)){
            document.getElementById('p55').innerHTML = "Please enter valid City/Town name";
            document.getElementById('town1').style.borderColor = "red";
			return false;
        } if(city.match(/^[a-zA-Z]{5,}$/)) {
            document.getElementById('p55').innerHTML = "";
            document.getElementById('town1').style.borderColor = "green";
			return true;
        }


    }
        function formVal66() {
        var state = document.getElementById('state1');
        if (state.value == "Please Choose") {

            document.getElementById('state1').style.borderColor = "red";
			document.getElementById('p66').innerHTML = "Please select one state";
            return false;
        } 
		if (state.value !== "Please Choose") {
            document.getElementById('p66').innerHTML = "";
            document.getElementById('state1').style.borderColor = "green";
			return true;
        }


    }
    
    
    
	function formVal77() {
        var pin = document.getElementById('pin1').value;

        if (!pin.match(/^[0-9]{6}$/)) {
             document.getElementById('p77').innerHTML = "Please enter valid pincode";
            document.getElementById('pin1').style.borderColor = "red";
            return false;
        } 
          if (pin.match(/^[0-9]{6}$/)){
            document.getElementById('p77').innerHTML = "";
            document.getElementById('pin1').style.borderColor = "green";
			return true;
        }



    }
	
    