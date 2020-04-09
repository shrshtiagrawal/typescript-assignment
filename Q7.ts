//Q.7.A shopkeeper wants to discount its prices due to the holiday season.Write a typescript function which will take all the prices and provide a discount of 50% on each price.

function discountFun(actualPrice:number){

    const afterDiscount = actualPrice - ( actualPrice * 50 / 100 );
    console.log('Total Price : '+actualPrice +', price after 50% discount : '+afterDiscount);
}
discountFun(35000);