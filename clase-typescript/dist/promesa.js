"use strict";
function getData(url) {
    return new Promise((reject, resolve) => {
        setTimeout(() => {
            resolve({ nombres: "Daniel" });
        }, 2000);
    });
}
async function getInitialData() {
    let result;
    try {
        result = await getData("https://google.com");
        return result;
    }
    catch (error) {
        console.log(error);
        return new Error("Se ha presentado un error" + error);
    }
}
