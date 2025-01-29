// Helper function to generate a random coupon code
const generateCouponCode = () =>{
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const couponLength = 10;
    let couponCode = "" ;
// Generate random coupon code
for(let i = 0; i<couponLength;i++){
    const randomIndex = Math.floor(Math.random()*characters.length);
    couponCode += characters[randomIndex]
}
return couponCode;
};

//Helper function to Validate coupon code 
const ValidateCoupon =(couponCode)=>{
    const ValidCoupons = ["NEW15","Couple20"];
    return ValidCoupons.includes(couponCode);
};

// calculate  total Price With Discounts
const calculateTotal = (selectedSeats, couponCode)=>{
    let discount = 0;
    const basePrice = selectedSeats.length * 550;
    
    //Automatic 20% discount for 4 tickets
    if(selectedSeats.length === 4){
        discount = basePrice * 0.2; //20% discount
    }

    //Apply coupon discount if Valid
    if(couponCode === "NEW15"){
        discount += basePrice * 0.15; //15%discount
    }
    else if(couponCode === "Couple20"){
        discount += basePrice * 0.2; //20%discount
    }

    return basePrice - discount;

}