document.getElementById('card-1').addEventListener('click', function () {

    const item1 = document.getElementById('item-1');
    const item1Text = item1.innerText;
 
    const setName = document.getElementById('set-name');
    const p = document.createElement('p');
    p.innerText = item1Text;
 
    setName.appendChild(p);
 
    const card1Taka = document.getElementById('card-1-taka');
    const card1TakaTextString = card1Taka.innerText;
    const card1TakaText = parseFloat(card1TakaTextString);
 
 
    const totalPrice = document.getElementById('total-price');
    const totalPriceTextString = totalPrice.innerText;
    const totalPriceText = parseFloat(totalPriceTextString);
 
 
    const totalTakaCalculation = card1TakaText + totalPriceText;
    totalPrice.innerText = totalTakaCalculation;
 
    const applyButton = document.getElementById('apply-button');
    if (totalPrice.innerText > 200) {
       applyButton.removeAttribute('disabled');
    }
 
    const btnMakePurchase = document.getElementById('btn-make-purchase') ;
    if(totalPrice.innerText >0){
       btnMakePurchase.removeAttribute('disabled');
     }
 
    const discountTk = document.getElementById('discount');
    const discountTkTextString = discountTk.innerText;
    const discountTkText = parseFloat(discountTkTextString);
 
    const totalEnd = document.getElementById('total-end');
    const totalEndTextString = totalEnd.innerText;
    const totalEndText = parseFloat(totalEndTextString);
 
    const totalEndCalculation = discountTkText + totalTakaCalculation;
    totalEnd.innerText = totalEndCalculation;
 
 });
 document.getElementById('apply-button').addEventListener('click',function(){
 
    const applyInput = document.getElementById('apply-input');
    
    if(applyInput.value !== 'SELL200'){
           alert('Enter Right discount code');
           return;
    }
    applyInput.value = '';
    const totalPrice = document.getElementById('total-price');
    const totalPriceTextString = totalPrice.innerText;
    const totalPriceText = parseFloat(totalPriceTextString);
 
    const discountTk = document.getElementById('discount');
 
    const discountTotal = totalPriceText * 0.2;
    discountTk.innerText = discountTotal;
 });