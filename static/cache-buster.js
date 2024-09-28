window.addEventListener('load', function () {
    // Check if the page was loaded from the cache
    if (performance.navigation.type === 1) {
        // If loaded from the cache, force reload from the server
        window.location.reload(true);
    }
});
