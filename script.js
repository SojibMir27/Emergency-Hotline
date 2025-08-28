/**----------function to get input number values----------*/
function getInputValueNumber(id) {
  let inputField = document.getElementById(id);
  let inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);

  return inputFieldValueNumber;
}

/** Funciton to get innerText */
function getInnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueCoin = parseInt(elementValue);

  return elementValueCoin;
}

/** Funciton to set innerText */
function setInnerText(value) {
  const availableBlanceCoin = document.getElementById("available-coin");
  availableBlanceCoin.innerText = value;
}

/** reuseable  function */
function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

// service history start....
const callButtons = document.getElementsByClassName("btn-call");

for (let callbtns of callButtons) {
  callbtns.addEventListener("click", function () {
    const serviceTitle = callbtns.parentNode.parentNode.children[0].innerText;

    const serviceDiscription =
      callbtns.parentNode.parentNode.children[1].innerText;

    const serviceNumber = callbtns.parentNode.parentNode.children[2].innerText;

    const amount = parseInt("20");
    const availableBlance = getInnerText("available-coin");
    const totalAvailableBlance = Number(availableBlance) - Number(amount);

    if (amount <= availableBlance) {
      alert(`📞 Calling ${serviceDiscription} ${serviceNumber}.......`);
    }

    if (amount <= 0 || amount > availableBlance) {
      alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
      return;
    }

    setInnerText(totalAvailableBlance);

    const date = new Date().toLocaleTimeString();

    const historyContainer = getElement("history-container");
    const newCart = document.createElement("div");
    newCart.innerHTML = `
                <div class="rounded-xl flex justify-between p-2">
                    <div>
                      <h3 class="font-bold text-[10] text-[#111111]">${serviceTitle}</h3>
                      <h5 class="font-semibold text-[#5c5c5c] text-sm">${serviceNumber}</h5>
                    </div>
                    <div><h2 class="mt-2">${date}</div>
                </div>
    `;

    historyContainer.append(newCart);
  });
}

// button clear start....
// document.getElementById("clear-btn").addEventListener("click", function () {
//   const historyContainer = getElement("history-container");
//   historyContainer.innerHTML = "";
// });

// // copy button start....
const copyButtons = document.getElementsByClassName("btn-copy");

for (let copybtn of copyButtons) {
  copybtn.addEventListener("click", function () {
    const serviceNumber = copybtn.parentNode.parentNode.children[2].innerText;

    alert(`নম্বর কপি হয়েছে : ${serviceNumber}`);

    navigator.clipboard.writeText(serviceNumber);

    const copy = getElement("total-copy").innerText;
    const currentCopy = Number(copy) + 1;

    getElement("total-copy").innerText = currentCopy;
  });
}

// heart button start.....
const heartButtons = document.getElementsByClassName("btn-heart");

for (let heartbtn of heartButtons) {
  heartbtn.addEventListener("click", function () {
    const heart = getElement("total-heart").innerText;
    const currentHeart = Number(heart) + 1;

    getElement("total-heart").innerText = currentHeart;
  });
}
