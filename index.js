var firebaseConfig = {
    //   copy your firebase config informations

        apiKey: "AIzaSyDRKitqWQWx2k8OBD2CPdSEPaNeLj-_k6k",
        authDomain: "pottfolio-8674f.firebaseapp.com",
        projectId: "pottfolio-8674f",
        storageBucket: "pottfolio-8674f.appspot.com",
        messagingSenderId: "948505961185",
        appId: "1:948505961185:web:48520e69745debeebe8da0"    
  };

  
  
//Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

//Variable to access database collection
const db = firestore.collection("contactform");

//Get Submit Form
let submitButton = document.getElementById("submit");

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault();

  //Get Form Values
  let firstName = document.getElementById("fname").value;
  let lastName = document.getElementById("lname").value;
  let enquries = document.getElementById("enquries").value;
  let phone = document.getElementById("phone").value;

  firestore
    .collection("contactform")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        const fn = doc.data().fname;
        if (firstName === fn) {
          console.log("Already Exists");
        }

        // console.log("data", doc.data().fname);
      });
    });
  //Save Form Data To Firebase
  db.doc()
    .set({
      fname: firstName,
      lname: lastName,
    //   country: country,
      phone : phone,
      enquries:enquries,
    })
    .then(() => { })
    .catch((error) => {
      console.log(error);
    });

  //alert
  alert("Your Form Has Been Submitted Successfully");

  //clear form after submission
  function clearForm() {
    document.getElementById("clearFrom").reset();
  }
  clearForm()
});
