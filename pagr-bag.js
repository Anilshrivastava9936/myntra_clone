const CONVENIENCE_FEES=99;
let bagItemObjects ;
onLoad();


function onLoad(){
    loadBagItemObjects()
    displayBagItem();
    displayBagSummary();

    
}

function displayBagSummary(){
    let bagSummaryElement = document.querySelector('.bag-summary');

    let totalItem =bagItemObjects.length;
    let totalMRP =0;
    let totalDiscount =0;
    let totalPayment =0;

    bagItemObjects.forEach(bagItem =>{
        totalMRP += bagItem.original_price;
        totalDiscount +=bagItem.original_price-bagItem.current_price;
    })
    let finalPayment=totalMRP-totalDiscount+CONVENIENCE_FEES;

    bagSummaryElement.innerHTML=` <div class="bag-details-container">
    <div class="price-header">PRICE DETAILES OF ITEMS(${totalItem} item)</div>


        <div class="price-item">
            <span class="total-mrp-tag">Total MRP</span>
            <span class="total-mrp-value">₹${totalMRP}</span>

        </div>
        <div class="price-item">
                <span class="total-discount-tag">Discount on MRP</span>
                <span class="total-discount-value">-₹${totalDiscount}</span>

        </div>
        <div class="price-item">
                <span class="total-mrp-tag">Convenience Fee</span>
                <span class="total-mrp-value">Rs.89</span>
                <div class="line">
        </div>
        <div class="price-item">
                <span class="total-amount-tag">Total Amount</span>
                <span class="total-amount-value">₹${finalPayment}</span>
         </div>

    </div>



<button class="btn-place-order">
<div class="css-xjhrni">Place order</div>
</button>`;
}
function loadBagItemObjects(){
    console.log(bagItems);

    bagItemObjects=bagItems.map(itemId =>{
        for(let i=0; i < items.length;i++){
            if(itemId==items[i].id){
                return items[i];
            }

        }
    });
    console.log(bagItemObjects);
}


function displayBagItem(){

    let containerElements= document.querySelector('.bag-items-container');
    let innerHTML='';
    bagItemObjects.forEach(bagItem=> {
        innerHTML+=generateItemHTML(bagItem);
        
    });
    containerElements.innerHTML = innerHTML;
}

function removeFromBag(itemId){
    bagItems=bagItems.filter(bagItemId => bagItemId != itemId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    loadBagItemObjects();
    displayBagIcon();
    displayBagItem();
    displayBagSummary()

}

function generateItemHTML(item){
    return `<div class="bag-item-container">
    <div class="item-left-part">
        <img class="bag-item-img" src="${item.item_image}" alt="">
    </div>

    <div class="item-right-part">
        <div class="company">${item.company_name}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price-container">
            <span class="price">
               <span> <div class="current-price">Rs.${item.current_price}</div></span>
               <span> <div class="original-price">Rs.${item.original_price}</div></span>
               <span> <div class="discount">${item.discount}%</div></span>
            </span>
                </div>
                <div class="return-period">
                    <span class="return-period-days">${item.return_period}</span>
                    return available
                </div>
                <div class="delivery-detailes">
                    Deliver by
                    <span class="delivery-detailes-days">${item.delivery_detailes}</span>
                </div>

        </div>
        <div class="remove-from-cart" onclick="removeFromBag(${item.id})">x</div>
    </div></span> 
</div>`;}