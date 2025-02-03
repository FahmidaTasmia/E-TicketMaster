//Get all imports elements from HTML
const seats = document.querySelectorAll('.seat');
const applyBtn = document.getElementById('apply');
const nextBtn = document.getElementById('next');
const bookingModal = document.getElementById('booking_modal');
const modalSeatCount = document.getElementById('modal-seat-count');
const modalSeatNumbers = document.getElementById('modal-seat-numbers');
const modalTotalPrice = document.getElementById('modal-total-price');
const goHomeBtn = document.getElementById('go-home-btn');
const closeBtn = document.getElementById('close-modal');
const couponInput = document.getElementById('coupon-input');
const phoneInput = document.getElementById('phone-number');
const seatsLeftSpan = document.getElementById('seats-left');
const seatCountSpan = document.getElementById('count');
const totalPriceSpan = document.getElementById('total-price');
const grandTotalElement = document.getElementById('grand-total');
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
            seatCountSpan.textContent = selectedSeats.length;

            //update seat details
            updateSeatDetails();
            calculatePrices()
    })
});

function updateSeatDetails(){
    seatDetails.innerHTML =''; //clear previous entries

    selectedSeats.forEach(seat =>{
        seatDetails.innerHTML += `
         <div class="flex justify-between py-2">
        <p>${seat}</p>
        <p>Economy</p>
        <p>550</p>
      </div>
        `;
    });
}

//calculate price and discounts

function calculatePrices(){
    //calculate base price
    totalPrice = selectedSeats.length * basePrice ;
    totalPriceSpan.innerText = totalPrice;
    //apply automatic 20% discount for 4 seats
    let discount  = 0;
    if(selectedSeats.length ===4){
        alert('congratulation ! you get automatically 20% discount')
        discount = totalPrice * 0.2;
       
    }

    //Apply coupon discount if valid
    if(isCouponApplied){
        const couponValue = couponInput.value;
        if(couponValue ==='NEW15'){
            discount += totalPrice * 0.15;
        }
        else if(couponValue === 'Couple20'){
            discount += totalPrice * 0.2;
        }
    }

    const grandTotal = totalPrice - discount;
    grandTotalElement.innerText = grandTotal;
}

// Coupon code handling
couponInput.addEventListener('input', () => {
    // Enable apply button only when the coupon input is not empty
    if (couponInput.value.trim()) {
        enableButton(applyBtn);
    } else {
        disableButton(applyBtn);
    }
});

applyBtn.addEventListener('click', () => {
    const couponCode = couponInput.value.trim();  // Get the input value

    if (validateCoupon(couponCode)) {
        isCouponApplied = true;
        calculatePrices();
        disableButton(couponInput);  // Disable input after applying
        disableButton(applyBtn);  // Disable apply button after applying
        alert('Coupon Applied Successfully!');
    } else {
        alert('Invalid Coupon Code!');
    }
});

//Enable Nex Button condition

function nextButton(){
    if(phoneInput.value.length >= 11){
        enableButton(nextBtn)
    }
    else{
        disableButton(nextBtn)
    }
}
phoneInput.addEventListener("input", nextButton);

//modal

 nextBtn.addEventListener('click', () => {
    if (typeof selectedSeats !== 'undefined' && grandTotalElement) {
      modalSeatCount.textContent = selectedSeats.length;
      modalSeatNumbers.textContent = selectedSeats.join(', ');
      modalTotalPrice.textContent = grandTotalElement.textContent;
    }
  
    // Show modal
    bookingModal.showModal();
    
    // Reset form (if applicable)
    selectedSeats = [];
    seatsLeft = 40;
    seatsLeftElement.innerText = '40 Seats Left';
    seatDetails.innerHTML = '';
    totalPriceElement.innerText = '0';
    grandTotalElement.innerText = '0';
    couponInput.value = '';
    isCouponApplied = false;
    seats.forEach(seat => seat.classList.remove('bg-[#1DD100]', 'text-white'));
    seatCountSpan.textContent = '0';
  });
  
  // Close modal
  closeBtn.addEventListener('click', () => {
    bookingModal.close();
  });
  
  // Redirect to home
  goHomeBtn.addEventListener('click', () => {
    window.location.href = 'index.html'; 
  });