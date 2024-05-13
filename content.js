document.addEventListener('DOMContentLoaded', () => {
    const storageData = Object.entries(localStorage).map(([key, value]) => ({key, value}));
    const canvasDetected = detectCanvasFingerprint();
    console.log("Canvas detected: ", canvasDetected);
    browser.runtime.sendMessage({ storageData, canvasDetected });
});

function detectCanvasFingerprint() {
    const getContext = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function() {
        console.log("Canvas fingerprint attempt detected!");
        return getContext.apply(this, arguments);
    };
}
