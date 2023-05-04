function getData(url: string) : Promise<object> {
    return new Promise((reject, resolve)=>{
        setTimeout(()=>{
            resolve({nombres: "Daniel"})
        },2000)
    })
}

async function getInitialData(): Promise<object>{
    let result : object;
    try {
        result = await getData("https://google.com");        
        return result;
    } catch (error) {
        console.log(error);
        return new Error("Se ha presentado un error" + error)
    }    
}