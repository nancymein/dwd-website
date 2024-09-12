document.addEventListener('DOMContentLoaded', () => {
    // Handle login form submission
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        // Handle login logic here
    });

    // AI Bot functionality
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');

    function appendMessage(text, isUser) {
        const message = document.createElement('div');
        message.textContent = text;
        message.style.textAlign = isUser ? 'right' : 'left';
        chatBox.appendChild(message);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function getBotResponse(userMessage) {
        // Define bot responses
        const responses = {
            "beginner": "Let's start with the basic 'Finger Heart' move! 🖤 Step 1: Extend your thumb and index finger. Step 2: Cross them to form a heart shape. Give it a try!",
            "intermediate": "Great! Time for 'The Wave'. 🕺 Step 1: Start by raising your arms. Step 2: Shift one shoulder up and follow with your arm. Step 3: Let the wave flow through your body!",
            "advanced": "Awesome! Let's level up with 'Body Rolls'. 💃 Step 1: Start by moving your chest forward. Step 2: Slowly roll your chest and hips backward, then repeat the movement.",
            "video-beginner": "Here's a video to guide you through the 'Finger Heart' move.<br><iframe width='560' height='315' src='https://www.youtube.com/embed/CZR4LjSt6gs' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>",
            "video-intermediate": "Watch this video to master 'The Wave' dance.<br><iframe width='560' height='315' src='https://www.youtube.com/embed/OY8oS1SBpas' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>",
            "video-advanced": "Follow along with this video to perfect your 'Body Rolls'.<br><iframe width='560' height='315' src='https://www.youtube.com/embed/OY8oS1SBpas' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>",
            "thanks": "You're welcome! Keep practicing, and you'll be a pro in no time!",
            "package": "We offer a variety of packages. Please visit our Services page for more details.",
            "membership": "Our membership gives you access to exclusive content. You can sign up on the Members Only page.",
            "new user promotion": "New users can enjoy a special discount. Check our Promotions section for details.",
            "level test": "You can take a level test to find the right class for you. Please contact us for more information.",
            "schedule": "Our class schedules are available on the Schedule page.",
            "payment method": "We accept various payment methods including credit cards and PayPal.",
            "refund policy": "For information on our refund policy, please visit our Refund Policy page.",
            "access classes": "Once you are logged in, you can access all the classes through your account dashboard.",
            "miss a class": "If you miss a class, please contact us for rescheduling options.",
            "teaching classes": "Our classes are taught by professional K-pop dancers.",
            "class size": "We maintain small class sizes to ensure personalized attention.",
            "class duration": "Classes typically last for one hour.",
            "dance styles": "We offer a range of K-pop styles including the latest hits.",
            "try a class": "You can try a class by signing up for a trial session on our website."
        };

        // Basic keyword matching for responses
        const lowerCaseMessage = userMessage.toLowerCase();
        for (const key in responses) {
            if (lowerCaseMessage.includes(key)) {
                return responses[key];
            }
        }

        // Default response for unknown questions
        return "For more information, please contact us.";
    }

    sendBtn.addEventListener('click', () => {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            appendMessage(userMessage, true);
            const botResponse = getBotResponse(userMessage);
            setTimeout(() => appendMessage(botResponse, false), 500);
            userInput.value = '';
        }
    });

    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendBtn.click();
        }
    });
});
