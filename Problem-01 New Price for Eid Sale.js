
function newPrice(currentPrice , discount ) {
    if(typeof currentPrice!=='number' || typeof discount!=='number'){
        return "Invalid";
    }else if(discount<0 || discount>100){
        return "Invalid";
    }
    
    const discountPrice = (currentPrice*discount)/100;
    const newPrice = (currentPrice-discountPrice).toFixed(3);
    return newPrice;
}
const result = newPrice(1500,20);
console.log(result);

