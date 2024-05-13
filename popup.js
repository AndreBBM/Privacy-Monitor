document.addEventListener('DOMContentLoaded', function() {
    browser.runtime.sendMessage({action: "requestData"}, function(response) {
        document.getElementById('thirdPartyDomains').textContent = `Third-Party Domains: ${Array.from(response.thirdPartyDomains).join(', ')}`;
        document.getElementById('cookies').textContent = `Cookies: ${response.cookies.map(cookie => cookie.name).join(', ')}`;
        document.getElementById('localStorage').textContent = `Local Storage: ${response.localStorage.map(item => `${item.key}: ${item.value}`).join(', ')}`;
        document.getElementById('canvasFingerprint').textContent = `Canvas Fingerprint Attempts: ${response.canvasFingerprintAttempts}`;
        document.getElementById('sessionStorage').textContent = `Session Storage: ${response.sessionStorage.map(item => `${item.key}: ${item.value}`).join(', ')}`;
    });
});
