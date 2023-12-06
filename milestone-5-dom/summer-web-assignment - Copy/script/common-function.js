function itemCardText(item){
    const items = document.getElementById(item);
    const itemsText = items.innerText;
    return itemsText;
   }
   function cardAndCartInnerText(taka){
    const cardTaka = document.getElementById(taka);
    const cardTakaTextString = cardTaka.innerText;
    const cardTakaText = parseFloat(cardTakaTextString);
    return cardTakaText;
}

function enableButton(totalP, applyButton) {
    const t1 = document.getElementById(totalP);
    const a2 = document.getElementById(applyButton);
    if (t1.innerText > 200) {
        a2.removeAttribute('disabled');
    }
  }

  function enableButton2(totalP, applyButton) {
    const t1 = document.getElementById(totalP);
    const a2 = document.getElementById(applyButton);
    if (t1.innerText > 0) {
        a2.removeAttribute('disabled');
    }
  }

  function applyDiscount(discountCode, totalPriceElement, discountElement) {
    const applyInput = document.getElementById('apply-input');
 
    if (applyInput.value !== discountCode) {
       alert('Enter the correct discount code');
       return;
    }
 
    applyInput.value = '';
 
    const totalPriceTextString = totalPriceElement.innerText;
    const totalPriceText = parseFloat(totalPriceTextString);
 
    const discountTotal = totalPriceText * 0.2;
    discountElement.innerText = discountTotal;
 }