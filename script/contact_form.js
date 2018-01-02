// Initialize Firebase
var config = {
    apiKey: "AIzaSyDfx8yY9FEAF8ky_Vno-n0QE76j8SkQeKE",
    authDomain: "jakashuralievcontactform.firebaseapp.com",
    databaseURL: "https://jakashuralievcontactform.firebaseio.com",
    projectId: "jakashuralievcontactform",
    storageBucket: "jakashuralievcontactform.appspot.com",
    messagingSenderId: "64127462043"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for Form Submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit Form
function submitForm(e){
    e.preventDefault();
    
    // Get Form Values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    // Save mesaage
    saveMessage(name, email, phone, message);

    // Show Success-Message
    document.querySelector('.success-message').style.display = 'block';

    // Hide Success-Message after 5 seconds
    setTimeout(function(){
        document.querySelector('.success-message').style.display = 'none';
    }, 5000);

    // Clear the form after submit
    document.getElementById('contactForm').reset();
}

// Function to get from values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save messages to firebase
function saveMessage(name, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
        message: message
    });
}