
displayitemsOnHomePage();


function addToBag(){
    
}


function displayitemsOnHomePage(){
    let itemsContainerElement = document.querySelector('.items-container');

let innerHtml=``;
items.forEach(item=>{
    innerHtml+= `
        <div class="item-container">
                <img claas="item-image" src="${item.image}" alt="item image">
                <div class="rating">
                    ${item.rating.stars} ⭐ | ${item.rating.count}
                </div>
                <div class="comapny-name">${item.company}</div>
                <div class="item-name">${item.item_name}
                </div>
                <div class="price">
                    <span class="current-price">Rs ${item.current_price}</span>
                    <span class="original-price">Rs ${item.original_price}</span>
                    <span class="discount">(${item.discount}% OFF)</span>
                </div>
                <BUTTON class="btn-add-bag" onclick="addToBag();">Add to Bag</BUTTON>
        </div>`
    });
itemsContainerElement.innerHTML = innerHtml;
}



