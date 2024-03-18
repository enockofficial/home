
window.onload = function() {
    // Angalia ikiwa ukurasa umeingiwa moja kwa moja kutoka "home.page"
    if(document.referrer !== "https://enockofficial.github.io/SMG-OFFICE-2024/login.php.html") {
        // Ikiwa sio hivyo, rudisha mtumiaji kwenye "home.page"
        window.location.href = "https://enockofficial.github.io/SMG-OFFICE-2024/login.php.html";
    }
}
