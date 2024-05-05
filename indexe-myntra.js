let bagItems = [];
onLoad();

function onLoad (){
    let bagItemsStr=localStorage.getItem('bagItems');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
displayItemsOnHomePage();
displayBagIcon();
}


function addToBag(itemid){
    
    bagItems.push(itemid);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon(){
    let bagItemCountElement=document.querySelector('.bag-item-count');
    if(bagItems.length>0){
       bagItemCountElement.style.visibility='visible';
    bagItemCountElement.innerText=bagItems.length;
    }
    else{
        bagItemCountElement.style.visibility='hiddne';

    }
}
function displayItemsOnHomePage(){
    let itemsContainerElement = document.querySelector('.items-container');
    if (!itemsContainerElement){
        return;
    }
    // const items=[{
    //     id:'001',
    //     item_image:'1.jpeg',
    //     rating: {
    //         stars:4.5,
    //         noOfReviews:14000
    //     },
    //     company_name:'TITAN',
    //     item_name:'neclesh',
    //     current_price:'RS.1,40,666',
    //     original_price:'RS.1,58,200',
    //     discount:'42%'},
    // {
    //     id:'002',

    //     item_image:'2.jpeg',
    //     rating: {
    //         stars:4.5,
    //         noOfReviews:14000
    //     },
    //     company_name:'TITAN',
    //     item_name:'neclesh',
    //     current_price:'RS.1,40,666',
    //     original_price:'RS.1,58,200',
    //     discount:'42%'},
    // {        
    //     id:'003',
    //     item_image:'3.jpeg',
    //     rating: {
    //         stars:4.5,
    //         noOfReviews:14000
    //     },
    //     company_name:'TITAN',
    //     item_name:'neclesh',
    //     current_price:'RS.1,40,666',
    //     original_price:'RS.1,58,200',
    //     discount:'42%'},
    // {
    //     id:'004',
    //     item_image:'4.jpeg',
    //     rating: {
    //         stars:4.5,
    //         noOfReviews:14000
    //     },
    //     company_name:'TITAN',
    //     item_name:'neclesh',
    //     current_price:'RS.1,40,666',
    //     original_price:'RS.1,58,200',
    //     discount:'42%'},
    // {
    //     id:'005',
    //     item_image:'5.jpeg',
    //     rating: {
    //         stars:4.5,
    //         noOfReviews:14000
    //     },
    //     company_name:'TITAN',
    //     item_name:'neclesh',
    //     current_price:'RS.1,40,666',
    //     original_price:'RS.1,58,200',
    //     discount:'42%'},
    // {
    //     id:'006',
    //     item_image:'1.jpeg',
    //     rating: {
    //         stars:4.5,
    //         noOfReviews:14000
    //     },
    //     company_name:'TITAN',
    //     item_name:'neclesh',
    //     current_price:'RS.1,40,666',
    //     original_price:'RS.1,58,200',
    //     discount:'42%'
    // }
    // ]
    
    let innerHtml='';
    items.forEach(item => {
            innerHtml += ` 
        <div class="item-container">
                <img class="item-image" src="${item.item_image}" alt="">
                <div class="rating">${item.rating.stars}⭐ |${item.rating.noOfReviews}</div>
                <div class="company-name">${item.company_name}</div>
                <div class="itme-name">${item.item_name}</div>
                <div class="price">
                <div class="current-price">${item.current_price}</div>
                <div class="original-price">${item.original_price}</div>
                <div class="discount">${item.discount}</div>
                </div>
                <button class="add-to-bag" onclick="addToBag(${item.id})">ADD TO BAG</button>
             </div>    
         `;
        });
    itemsContainerElement.innerHTML=innerHtml;
}
