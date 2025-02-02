//Get all imports elements from HTML
const seats = document.querySelectorAll('.seat');
const applyBtn = document.getElementById('apply');
const nextBtn = document.getElementById('next');
const couponInput = document.getElementById('coupon-input');
const phoneInput = document.getElementById('phone-number');
const seatsLeftSpan = document.getElementById('seats-left');
const totalPriceSpan = document.getElementById('total-price');
const grandTotal = document.getElementById('grand-total');
const seatDetails = document.getElementById('seat-details');

//all variables we need to track
let selectedSeats = [];
let totalPrice = 0;
let isCouponApplied = false;
const basePrice = 550;
let seatsLeft = 40;

//handle seat selection

seats.forEach(seat=>{
    seat.addEventListener('click',()=>{
        const seatNumber = seat.innerText;
        //check if seat is already selected
        if(selectedSeats.includes(seatNumber)){
            //remove seat if clicked again
            selectedSeats = selectedSeats.filter(s=>s !== seatNumber);
            seat.classList.remove('bg-[#1DD100]', 'text-white');
            seatsLeft += 1;
        }

        else {
            //check maximum 4 seats rule
            if (selectedSeats.length>=4){
                alert("you can't select more than 4 seats!");
                return;
            }

            //add seat to selection
            selectedSeats. push(seatNumber);
            seat.classList.add('bg-[#1DD100]', 'text-white');
            seatsLeft -=1;

        }

       //update seats left display

            seatsLeftSpan.innerText = `${seatsLeft} seats left`
    })
});