const baseurl="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";


const dropdowns = document.querySelectorAll(".dropdown select");
const button=document.querySelector(".btn");
// // for (code in countryList) {
// //     console.log(code, countryList[code]);
// // }
const fromcurr=document.querySelector(".from select");
const tocurr=document.querySelector(".to select");

const msg=document.querySelector(".msg");

window.addEventListener("load",()=>{
    updateexchangerate();
})
for(let select of dropdowns){
    for(codec in countryList){
        let newoption=document.createElement("option");
        newoption.innerText=codec;
        newoption.value=codec;
        if(select.name==="from" && codec==="USD"){
            newoption.selected="selected";
        }else if (select.name==="to" && codec==="INR"){
            newoption.selected="selected";
        }
        select.append(newoption);
    }
    select.addEventListener("change",(evt)=>{
        updateflag(evt.target)
    })
}


const updateflag=(element)=>{
    // console.log(element);
    let currcode=element.value;
    let countrycode=countryList[currcode];
    let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newsrc;

}

button.addEventListener("click",(evt)=>{
    evt.preventDefault();
    updateexchangerate();
})

const updateexchangerate=async ()=>{
    let amount=document.querySelector("form input");
    let amtval=amount.value;
    // console.log(amtval);
    if(amtval==="0"|| amtval<1){
        amtval=1;
        amount.value="1";
    }
    // console.log(fromcurr,tocurr);
    // console.log(fromcurr.value,tocurr.value);
    const URL= `${baseurl}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;

    let response= await fetch(URL);
    // console.log(response);
    let data= await response.json();
    // console.log(data);
    let rate=data[tocurr.value.toLowerCase()];
    // console.log(rate);

    let finalamount=amtval*rate;
    msg.innerText=`${amtval} ${fromcurr.value} = ${finalamount} ${tocurr.value}`;
}