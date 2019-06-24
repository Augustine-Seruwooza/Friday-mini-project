//Styles the H1
var h1 = document.querySelector("h1");
h1.style.color = "#900C3F";
h1.style.textAlign="center";var allcontacts = [];// Function stores variable on clicking save
function contact_function(ev) {
    // ev.preventDefautl();
firstname = document.querySelector("#firstname").value;
    //alert(fname);
    secondname = document.querySelector("#secondname").value;
    phone = document.querySelector("#phone").value;
    email = document.querySelector("#email").value;
    address = document.querySelector("#address").value;
    city = document.querySelector("#city").value;
    Submitted = "true";    
    if (firstname.length > 10 ) {
       alert("The First name must have no more than 10 characters");
       Submitted = "false";
    }
    if (secondname.length >10) {
       alert("The Second name must have no more than 10 characters");
       Submitted = "false";
    }
    if (firstname.length=="" || secondname.length=="" || phone.length==""|| email.length==""|| address==""|| city=="") {
       alert("Name field can not be empty!");
       Submitted = "false";
    }
    else{
        var contact = [firstname,secondname,phone,email,address,city];
        allcontacts.push(contact);
        console.log(allcontacts);
    }    alert("Saved!");
    //alert(array[0]);
    }
//Function to search through saved contacts
function search_function(){
var phrase = document.querySelector("#search-id").value;
for (var y=0; y<allcontacts.length; y++){
    var contactarray = allcontacts[y];
    if(contactarray[0].includes(phrase)){
        console.log(contactarray);
        document.getElementById("search").innerHTML = contactarray[0];
    }
}
}     
//  contactFields.appendChild(div);
//}
// contactFields.style.display = "block";
//  var div = document.createElement("div");
//  div.innerHTML = fname.value;// 