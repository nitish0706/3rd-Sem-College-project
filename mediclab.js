//Hamburger Menu
// let mobileMenu = document.querySelector("#mobile-menu");
// let hamburgerLine = document.getElementsByClassName("hamburger-line");
// document.getElementById("hamburger-menu").addEventListener("click", function(){
//     if(mobileMenu.classList.contains("slidedown") === false ){
//         mobileMenu.classList.add("slidedown");
//         mobileMenu.style.opacity = 1;
//         mobileMenu.style.transform = ("translateY(0vh)");
//         hamburgerLine[1].style.width = "2rem";
//         hamburgerLine[2].style.width = "1rem";
//     }
//     else{
//         mobileMenu.classList.remove("slidedown");
//         mobileMenu.style.opacity = 0;
//         mobileMenu.style.transform = ("translateY(-100vh)");
//         hamburgerLine[1].style.width = "3rem";
//         hamburgerLine[2].style.width = "3rem";
//     }
// })



// Change header on Scroll
function changeHeaderColor(){
    let navigationBar = document.querySelector("#logoNav");
    let navText = document.querySelectorAll('.nav-text')
    if (window.scrollY >= 32 ){
        navigationBar.style.backgroundColor = "white";
        navText[0].style.color = "#5B5B5B"
        navText[1].style.color = "#5B5B5B"
        navText[2].style.color = "#5B5B5B"
        navText[3].style.color = "#5B5B5B"
        navText[4].style.color = "#5B5B5B"
        navText[5].style.color = "#5B5B5B"
        navText[6].style.color = "#5B5B5B"
    }
    else{
        navigationBar.style.backgroundColor = "#ffffff00";
        navText[0].style.color = "white"
        navText[1].style.color = "white"
        navText[2].style.color = "white"
        navText[3].style.color = "white"
        navText[4].style.color = "white"
        navText[5].style.color = "white"
        navText[6].style.color = "white"
    }
    }
window.addEventListener("scroll", changeHeaderColor);



//Close Mobile Menu on Click
let moblileMenuList = document.querySelectorAll(".mobile-menu-list")
function closeMenu(){
    mobileMenu.classList.remove("slidedown");
    mobileMenu.style.opacity = 0;
    mobileMenu.style.transform = ("translateY(-100vh)");
    hamburgerLine[1].style.width = "3rem";
    hamburgerLine[2].style.width = "3rem";

}
moblileMenuList[0].addEventListener("click", closeMenu)
moblileMenuList[1].addEventListener("click", closeMenu)
moblileMenuList[2].addEventListener("click", closeMenu)
moblileMenuList[3].addEventListener("click", closeMenu)
moblileMenuList[4].addEventListener("click", closeMenu)
moblileMenuList[5].addEventListener("click", closeMenu)
moblileMenuList[6].addEventListener("click", closeMenu)



//Background Image Slider
window.onload = function () {

    function changeImage() {   
        var BackgroundImg=[
            "images/bg1.jpg",
            "images/bg2.jpg",
            "images/bg3.jpg",
            "images/bg4.jpg",
            "images/bg5.jpg",
            "images/bg6.jpg",
            "images/bg7.jpg"
        ];
        var i = Math.floor((Math.random() * 7));
        document.querySelector("header").style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
    }
    window.setInterval(changeImage, 5000);
}



//FAQ Accordion
var accordion = document.querySelectorAll(".accordion");
var panel = document.querySelectorAll(".panel");

function dropdownZero() {
    if (panel[0].classList.contains("slide-down")) {
        panel[0].classList.remove("slide-down")
        panel[0].style.opacity = 0
        panel[0].style.height = 0
    }
    else {
        panel[0].classList.add("slide-down")
        panel[0].style.opacity = 1
        panel[0].style.height = "7rem"
    }
};

function dropdownOne() {
    if (panel[1].classList.contains("slide-down")) {
        panel[1].classList.remove("slide-down")
        panel[1].style.opacity = 0
        panel[1].style.height = 0
    }
    else {
        panel[1].classList.add("slide-down")
        panel[1].style.opacity = 1
        panel[1].style.height = "7rem"
    }
};

function dropdownTwo() {
    if (panel[2].classList.contains("slide-down")) {
        panel[2].classList.remove("slide-down")
        panel[2].style.opacity = 0
        panel[2].style.height = 0
    }
    else {
        panel[2].classList.add("slide-down")
        panel[2].style.opacity = 1
        panel[2].style.height = "7rem"
    }
};

function dropdownThree() {
    if (panel[3].classList.contains("slide-down")) {
        panel[3].classList.remove("slide-down")
        panel[3].style.opacity = 0
        panel[3].style.height = 0
    }
    else {
        panel[3].classList.add("slide-down")
        panel[3].style.opacity = 1
        panel[3].style.height = "7rem"
    }
};

function dropdownFour() {
    if (panel[4].classList.contains("slide-down")) {
        panel[4].classList.remove("slide-down")
        panel[4].style.opacity = 0
        panel[4].style.height = 0
    }
    else {
        panel[4].classList.add("slide-down")
        panel[4].style.opacity = 1
        panel[4].style.height = "auto"
    }
};

function dropdownFive() {
    if (panel[5].classList.contains("slide-down")) {
        panel[5].classList.remove("slide-down")
        panel[5].style.opacity = 0
        panel[5].style.height = 0
    }
    else {
        panel[5].classList.add("slide-down")
        panel[5].style.opacity = 1
        panel[5].style.height = "7rem"
    }
};

function dropdownSix() {
    if (panel[6].classList.contains("slide-down")) {
        panel[6].classList.remove("slide-down")
        panel[6].style.opacity = 0
        panel[6].style.height = 0
    }
    else {
        panel[6].classList.add("slide-down")
        panel[6].style.opacity = 1
        panel[6].style.height = "7rem"
    }
};

function dropdownSeven() {
    if (panel[7].classList.contains("slide-down")) {
        panel[7].classList.remove("slide-down")
        panel[7].style.opacity = 0
        panel[7].style.height = 0
    }
    else {
        panel[7].classList.add("slide-down")
        panel[7].style.opacity = 1
        panel[7].style.height = "auto"
    }
};

function dropdownEight() {
    if (panel[8].classList.contains("slide-down")) {
        panel[8].classList.remove("slide-down")
        panel[8].style.opacity = 0
        panel[8].style.height = 0
    }
    else {
        panel[8].classList.add("slide-down")
        panel[8].style.opacity = 1
        panel[8].style.height = "auto"
    }
};

function dropdownNine() {
    if (panel[9].classList.contains("slide-down")) {
        panel[9].classList.remove("slide-down")
        panel[9].style.opacity = 0
        panel[9].style.height = 0
    }
    else {
        panel[9].classList.add("slide-down")
        panel[9].style.opacity = 1
        panel[9].style.height = "auto"
    }
};
accordion[0].addEventListener("click", dropdownZero);
accordion[1].addEventListener("click", dropdownOne);
accordion[2].addEventListener("click", dropdownTwo);
accordion[3].addEventListener("click", dropdownThree);
accordion[4].addEventListener("click", dropdownFour);
accordion[5].addEventListener("click", dropdownFive);
accordion[6].addEventListener("click", dropdownSix);
accordion[7].addEventListener("click", dropdownSeven);
accordion[8].addEventListener("click", dropdownEight);
accordion[9].addEventListener("click", dropdownNine);


document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault()
    alert(`Sorry ${document.getElementById("fullname").value}, we have not started accepting responses.`)
    document.getElementById("fullname").value = ""
    document.getElementById("email").value = ""
    document.querySelector("textarea").value = ""
    
})

// Wait for the HTML document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    // 1. Find your new button
    const findNearbyButton = document.getElementById('find-nearby-btn');

    // 2. If the button exists, add a 'click' listener to it
    if (findNearbyButton) {
        findNearbyButton.addEventListener('click', function() {
            
            // 3. When clicked, run the function to get the location
            getUserLocation();
        });
    }
});


// 4. This function holds your geolocation code
// function getUserLocation() {
//     console.log("Asking for user location...");

//     // Check if the browser supports geolocation
//     if (navigator.geolocation) {
        
//         // This is your code, with an error handler added (which is very important)
//         navigator.geolocation.getCurrentPosition(
            
//             // SUCCESS Callback (what to do if it works)
//             function(position) {
//                 let userLat = position.coords.latitude;
//                 let userLng = position.coords.longitude;
                
//                 console.log('Location found:', userLat, userLng);
                
//                 // For testing, show the user their location.
//                 // You will replace this alert with your map logic.
//                 alert('We found you! Latitude: ' + userLat + ', Longitude: ' + userLng);
//             },
            
            // ERROR Callback (what to do if it fails)
        //     function(error) {
        //         console.error("Error getting location:", error.message);
        //         if (error.code == 1) {
        //             alert("Error: You denied the request for Geolocation. Please enable it in your browser settings to use this feature.");
        //         } else {
        //             alert("Error: Unable to get your location. " + error.message);
        //         }
        //     }
        // );

//     } else {
//         // Browser doesn't support geolocation
//         alert('Geolocation is not supported by your browser.');
//     }
// }

// This function is called by the Google Maps script, but we can leave it empty
// because we are loading the map after a button click.
function initMap() {
    // Google script requires this function, but we don't need to put anything here
    // if we're not loading a map on page load.
}

// Wait for the HTML document to be fully loaded

// document.addEventListener('DOMContentLoaded', function() {

//     const findNearbyButton = document.getElementById('find-nearby-btn');
//     if (findNearbyButton) {
//         findNearbyButton.addEventListener('click', function() {
//             getUserLocation();
//         });
//     }
// });

// // This function holds your geolocation code
// function getUserLocation() {
//     console.log("Asking for user location...");
    
//     // Show a "loading" message in the map div
//     document.getElementById('map').innerHTML = "<p>Loading your location...</p>";

//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
            
//             // SUCCESS Callback (This is where we change the code)
//             function(position) {
//                 let userLat = position.coords.latitude;
//                 let userLng = position.coords.longitude;
                
//                 console.log('Location found:', userLat, userLng);
                
//                 // --- THIS IS THE NEW CODE ---
                
//                 // 1. Create a coordinate object for Google Maps
//                 const userLocation = { lat: userLat, lng: userLng };
                
//                 // 2. Find the map div
//                 const mapDiv = document.getElementById('map');
                
//                 // 3. Create a new Google Map
//                 const map = new google.maps.Map(mapDiv, {
//                     zoom: 15, // How close to zoom in (15 is like a neighborhood)
//                     center: userLocation, // Center the map on the user
//                 });
                
//                 // 4. Add a marker (the pin) on the user's location
//                 const marker = new google.maps.Marker({
//                     position: userLocation,
//                     map: map,
//                     title: "Your Location",
//                 });
//                 // --- END OF NEW CODE ---
//             },
            
//             // ERROR Callback (what to do if it fails)
//             function(error) {
//                 console.error("Error getting location:", error.message);
//                 let errorMessage = "";
//                 if (error.code == 1) {
//                     errorMessage = "Error: You denied the request for Geolocation. Please enable it in your browser settings to use this feature.";
//                 } else {
//                     errorMessage = "Error: Unable to get your location. " + error.message;
//                 }
//                 // Show error message in the map div
//                 document.getElementById('map').innerHTML = `<p style="color:red;">${errorMessage}</p>`;
//             }
//         );

//     } else {
//         // Browser doesn't support geolocation
//         alert('Geolocation is not supported by your browser.');
//     }
// }


// chat bot
document.addEventListener('DOMContentLoaded', function() {
    
    // --- DOM ELEMENTS ---
    const chatWindow = document.getElementById('chat-window');
    const chatToggleBtn = document.getElementById('chat-toggle-btn');
    const closeChatBtn = document.getElementById('close-chat');
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const messagesContainer = document.getElementById('chat-messages');

    // --- 1. OPEN / CLOSE CHAT ---
    if(chatToggleBtn){
        chatToggleBtn.addEventListener('click', () => {
            // Toggle display: flex or none
            if (chatWindow.style.display === 'none' || chatWindow.style.display === '') {
                chatWindow.style.display = 'flex';
            } else {
                chatWindow.style.display = 'none';
            }
        });
    }

    if(closeChatBtn){
        closeChatBtn.addEventListener('click', () => {
            chatWindow.style.display = 'none';
        });
    }

    // --- 2. SEND MESSAGE FUNCTION ---
    function sendMessage() {
        const text = userInput.value.trim();
        
        // Don't send empty messages
        if (text === "") return;

        // A. Display User Message
        addMessage(text, 'user-message');
        
        // Clear input
        userInput.value = '';

        // B. Generate Bot Response (simulate thinking delay)
        setTimeout(() => {
            const botReply = getBotResponse(text);
            addMessage(botReply, 'bot-message');
        }, 500);
    }

    // Event Listeners for Sending
    if(sendBtn) sendBtn.addEventListener('click', sendMessage);
    
    if(userInput) {
        userInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') sendMessage();
        });
    }

    // --- 3. HELPER: Add Message to UI ---
    function addMessage(text, className) {
        const div = document.createElement('div');
        div.classList.add('message', className);
        div.textContent = text;
        messagesContainer.appendChild(div);
        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // --- 4. THE BRAIN: Keyword Logic ---
    function getBotResponse(input) {
        // Convert input to lowercase to make matching easier
        input = input.toLowerCase();

        // LOGIC: If input contains "keyword", return "answer"
        
        if (input.includes("hello") || input.includes("hi")) {
            return "Hello there! How can Dr. Smile help you today?";
        } 
        else if (input.includes("hours") || input.includes("open") || input.includes("time")) {
            return "We are open Monday to Saturday, from 8:00 AM to 8:00 PM.";
        } 
        else if (input.includes("location") || input.includes("address") || input.includes("where")) {
            return "We have clinics in  Bhagwan Dutta Wadhwa Marg Block C, Vijay Nagar New Delhi, 110009.";
        } 
        else if (input.includes("price") || input.includes("cost") || input.includes("consultation")) {
            return "Consultations start at ₹500. Specific treatments depend on the diagnosis.";
        } 
        else if (input.includes("appointment") || input.includes("book")) {
            return "You can book an appointment by clicking the 'Ask an Expert' button above.";
        } 
        else if (input.includes("bad breath") || input.includes("halitosis")) {
            return "Halitosis is our specialty! It can be caused by hygiene, diet, or health issues. We can help treat it.";
        }
        else if (input.includes("bleed") || input.includes("blood") || input.includes("gum")) {
            return " Bleeding gums are often an early sign of gingivitis (gum disease). Paradoxically, the solution is usually to brush and floss more gently and consistently";
        }
        else if (input.includes("pain") || input.includes("sensitive")) {
            return "Sensitivity often occurs when the enamel wears down or gums recede. Try using a toothpaste for sensitive teeth.";
        }
        else if (input.includes("root canal") || input.includes("painful")) {
            return "This is a common myth! With modern anesthesia, a root canal is usually no more painful than getting a filling";
        }
        else if (input.includes("crown") || input.includes("bridge")) {
            return "A crown is a 'cap' used to cover a damaged tooth. A bridge is used to fill a gap created by a missing tooth by anchoring to the teeth on either side";
        }

        else {
            return "I'm just a bot, so I didn't understand that. Please try asking about 'hours', 'location', or 'appointments'.";
        }
    }
});
