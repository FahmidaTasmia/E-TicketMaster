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
export const ValidateCoupon =(couponCode)=>{
    const ValidCoupons = ["NEW15","Couple20"];
    return ValidCoupons.includes(couponCode);
};