// cache-buster.js
document.addEventListener("DOMContentLoaded", function () {
    // Check if the cache-buster has already run this session
    if (!sessionStorage.getItem("cacheBusterRan")) {
        // Set the flag to prevent further reloads in the same session
        sessionStorage.setItem("cacheBusterRan", "true");

        // Force a reload from the server
        location.reload(true);
    }
});
