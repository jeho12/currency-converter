const rates = {
  USD: 410, // 1 USD to NGN (Nigerian Naira)
  EUR: 480, // 1 EUR to NGN (Nigerian Naira)
  GBP: 570, // 1 GBP to NGN (Nigerian Naira)
  NGN: 1 / 410, // 1 NGN to USD (US Dollar)
};

const amountEl = document.getElementById("amount");
const fromEl = document.getElementById("from");
const toEl = document.getElementById("to");
const resultEl = document.getElementById("result");
const convertEl = document.getElementById("convert");
const usdRateEl = document.getElementById("usd-rate");
const eurRateEl = document.getElementById("eur-rate");
const gbpRateEl = document.getElementById("gbp-rate");
const ngnRateEl = document.getElementById("ngn-rate");

// Check if a result is stored in local storage
if (localStorage.getItem("currencyResult")) {
  resultEl.innerText = localStorage.getItem("currencyResult");
}

convertEl.addEventListener("click", function() {
  const amount = amountEl.value;
  const from = fromEl.value;
  const to = toEl.value;

  const resultValue = (amount * rates[to] / rates[from]).toFixed(2);
  resultEl.innerText = `Result: ${amount} ${from} = ${resultValue} ${to}`;

  // Store the result in local storage
  localStorage.setItem("currencyResult", resultEl.innerText);
});

// Display exchange rates
usdRateEl.innerText = `USD: 410 NGN`;
eurRateEl.innerText = `EUR: 480 NGN`;
gbpRateEl.innerText = `GBP: 570 NGN`;
ngnRateEl.innerText = `NGN: 1/410 USD`;
