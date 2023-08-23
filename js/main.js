// open nav
$('#openNav').click(function () {
    $('#leftMenu').animate({ width: '250px' }, 250)
    $('.home-content').animate({ marginLeft: '250px' }, 250)
})

// close nav
$('.close-btn').click(function () {
    $('#leftMenu').animate({ width: '0' }, 250)
    $('.home-content').animate({ marginLeft: '0px' }, 250)
})

// smooth scroll
$('#leftMenu a[href^="#"]').not('.close-btn').click(function () {
    let secTop = $($(this).attr('href')).offset().top;
    $('html,body').animate({ scrollTop: secTop }, 1000);
})

// Slider Down
$('.toggle').click(function () {
    $(this).next().slideToggle(500);
    $('.toggle').not(this).next().slideUp(500);
});

// Countdown Timer
$(document).ready(function () {
    const countDownDate = new Date("Aug 5, 2025 15:37:25").getTime();

    // Update the count down every 1 second
    let x = setInterval(function () {

        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the count down date
        let distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with"
        $('.days').text(days + ' D')
        $('.hours').text(hours + ' h')
        $('.minutes').text(minutes + ' m')
        $('.seconds').text(seconds + ' s')
        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
        }
    }, 1000);
});


// Characters Remaining
const maxLength = 100;
$('textarea').keyup(function () {
    let curLength = $(this).val().length;
    let avilableLength = maxLength - curLength;
    if (avilableLength <= 0) {
        $('.amount').text('your available character finished');
    }
    else {
        $('.amount').text(avilableLength);
    }
})