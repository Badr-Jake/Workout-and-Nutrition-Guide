function toggleMenu() {
  var menu = document.getElementById("menu");
  var burger = document.getElementById("burger");

  if (menu.style.right === "-100%" || menu.style.right === "") {
    menu.style.right = "0";
    burger.innerHTML = "&#10006;";
    burger.classList.add("active"); // Add the "active" class
  } else {
    menu.style.right = "-100%";
    burger.innerHTML = "&#9776;";
    burger.classList.remove("active"); // Remove the "active" class
  }
}


let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;

  for (let slide of slides) {
    slide.style.display = 'none';
  }

  slides[slideIndex].style.display = 'block';
}

function changeSlide(step) {
  showSlide(slideIndex += step);
}

showSlide(slideIndex); // Initial call to show the first slide

// to change slides every few seconds
setInterval(() => {
  changeSlide(1);
}, 2000);

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyArMof7FsZeSc5apBepTwaDEJX64m42LIk",
  authDomain: "workout-nutriton-guide.firebaseapp.com",
  databaseURL: "https://workout-nutriton-guide-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "workout-nutriton-guide",
  storageBucket: "workout-nutriton-guide.appspot.com",
  messagingSenderId: "552847584062",
  appId: "1:552847584062:web:43820a7a059d0d0b4ada6f",
};


// Function to open the login form modal
function openLoginForm() {
  document.getElementById('login-form').style.display = 'block';
}

// Function to open the sign up form modal
function openSignUpForm() {
  document.getElementById('signup-form').style.display = 'block';
}

// Function to close the modal
function closeModal() {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('signup-form').style.display = 'none';
}

// Function to display the welcome message and hide auth buttons
function displayWelcomeMessage(username) {
  document.getElementById('auth-buttons').style.display = 'none';
  document.getElementById('welcome-message').style.display = 'block';
  document.getElementById('user-name').textContent = username;
}

// Dummy function to simulate a successful login
// In a real application, you would replace this with a function that validates the user's credentials
function login() {
  // Simulate a login with a static username
  displayWelcomeMessage('User');
  closeModal();
}

// Add event listeners for login and sign up functionality
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('signup-form').addEventListener('submit', signUp);
  // Add any other DOMContentLoaded-related code here
});





// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const auth = firebase.auth();
const database = firebase.database();

// Sign up function
function signUp(event) {
  console.log('signUp function triggered'); // Check if function is triggered
  event.preventDefault(); // This prevents the form from submitting the default way

  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

 
  
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // You can save additional user info to the database here
      database.ref('users/' + user.uid).set({
        email: email
        // other profile information
        
      });
      // redirect to home page or somewhere else
      console.log('SignUp complete');
      window.location.href = 'index.html';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // .. handle errors here
      console.error(errorCode, errorMessage);
    });
}

// Login function
function login() {
  const email = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // redirect or do something else
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // .. handle errors here
      console.error(errorCode, errorMessage);
    });
}