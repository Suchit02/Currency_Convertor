 const Base_Url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/btc.json";
const dropdowns = document.querySelectorAll(".dropdowun select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select")



for (let select of dropdowns) {
   for (Currcode in countryList) {
      let newOption = document.createElement("option");
      newOption.innerText = Currcode;
      newOption.value = Currcode;
      if (select.name === "from" && Currcode === "USD") {
         newOption.selected = "selected"
      }
      else if (select.name === "to" && Currcode === "INR") {
         newOption.selected = "selected"
      }
      select.append(newOption);
   }
   select.addEventListener("change", (event) => {
      UpdateFlg(event.target)
   })
}



const UpdateFlg = (element) => {
   let Currcode = element.value;
   let countryCode = countryList[Currcode];
   let linkSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
   let img = element.parentElement.querySelector("img");
   console.log(img)
   img.src = linkSrc;

}

btn.addEventListener("click", async (event) => {
   event.preventDefault();
   let amount = document.querySelector(".amount input")
   let amountval = amount.value;
   if (amountval === "" || amountval < 1) {
      amountval = 1;
      amountval.value = "1"
   }

   console.log(fromCurr.value, "and ", toCurr.value)
   const url = `${Base_Url}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
   let response = await fetch(url);
   let data = await response.json();
   console.log(data)
   // exchange rate 
   let rate = data(toCurr.value.toLowerCase());

   // final amaont 
})