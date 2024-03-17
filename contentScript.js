if (typeof browser === "undefined") {
    var browser = chrome;
}

function inject() {

    console.log("Removing standalone footer...");

    if (!document.title === 'WordleBot: Your Daily, Personalized Wordle Score - The New York Times') {
        return;
    }

    searchAndGetElementById('standalone-footer', (element) => {
        element.remove();
    })
}

function searchAndGetElementById(element_id, callback) {
    setTimeout(function() {
        if ((element = document.getElementById(element_id)) === null) {
            searchAndGetElementById(element_id, callback);
        } else {
            callback(element);
        }
    }, 50)
}

inject();