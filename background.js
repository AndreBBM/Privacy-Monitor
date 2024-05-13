let data = {
    thirdPartyDomains: new Set(),
    cookies: [],
    canvasFingerprintAttempts: 0,
    canvasFingerprint: "",
    localStorage: [],
    sessionStorage: []
};

browser.webRequest.onBeforeRequest.addListener(
    details => {
        let url = new URL(details.url);
        let hostname = url.hostname;
        let mainDomain = new URL(details.originUrl).hostname; // Usando originUrl para obter a URL da página de origem
        let requestDomain = new URL(details.url).hostname;
        if (mainDomain !== requestDomain) {
            console.log("Third-party request to:", requestDomain);
            if (!data.thirdPartyDomains.has(hostname)){
                data.thirdPartyDomains.add(hostname);}
        }
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
);

browser.cookies.onChanged.addListener(changeInfo => {
    if (!changeInfo.removed) {
        if (!data.cookies.some(cookie => cookie.name === changeInfo.cookie.name)){
            data.cookies.push(changeInfo.cookie);
        }
            //data.cookies.push(changeInfo.cookie);
    }
});

function detect() {
    var storageData = Object.keys(browser.sessionStorage);
    var canvasDetected = detectCanvasFingerprint();
    var localStorageItems = detectLocalStorage();

    data.sessionStorage = storageData;
    data.canvasFingerprint = canvasDetected;
    data.localStorage = localStorageItems;

};

browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "requestData") {
        sendResponse(data);
    }
}
);

function detectCanvasFingerprint() {
    const getContext = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function() {
        console.log("Canvas fingerprint attempt detected!");
        return getContext.apply(this, arguments);
    };
}

function detectLocalStorage() {
    const localStorage = Object.keys(browser.localStorage);
    return localStorage;
}


browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "requestData") {
        detect();
        sendResponse(data);
    }
});