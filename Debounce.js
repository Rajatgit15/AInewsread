let counter = 0;

const getData = () => { 
    console.log("fetching data", counter++)
}

const Debounce = (fn, delay)=>{
    let timer;
    return ()=>{
        let context = this;
        args = arguments
 clearInterval(timer)
 timer  = setInterval(()=>{
     getData.apply(context, arguments)
 }, delay)
    }
}
const betterFunction = Debounce(getData, 3000)