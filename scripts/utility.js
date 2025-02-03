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
function validateCoupon(couponCode) {
    const validCoupons = ["NEW15", "Couple20"];
    return validCoupons.includes(couponCode);
}


const disableButton = (button)=>{
    button.disabled = true;
    button.classList.add("opacity -50", "cursor-not-allowed");
};

//Helper Function to enable a button 
const enableButton = (button)=>{
    button.disabled = false;
    button.classList.add("opacity -50", "cursor-not-allowed");
}