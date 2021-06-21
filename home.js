const sliderItems = 3;
const width = 600;
const height = 400;
const sliderWidth = width * sliderItems;

$('#slider').css({
    width: width + 'px',
    height: height + 'px',
    overflow: 'hidden'
});

$('#slider-items').css({
    width: sliderWidth + 'px',
    height: height + 'px',
    position: 'relative',
    display: 'flex'
});

$('.slider-img').css({
    width: width + 'px',
    height: height + 'px'
});

var index = 0;

let slide = function(change) {
    index += change;
    if(index < 0)
        index = 2;
    else if(index >= 3)
        index = 0;

    clearTimeout(timeout);
    timeout = setTimeout(function() {
        slide(1);
    }, 5000);
    
    $('#slider-items').animate(
        {
            right: width * index,
        },
        1500
    );
};

$('#btnLaquo').click(function(){
    slide(-1);
});

$('#btnRaquo').click(function(){
    slide(1);
});

let timeout = setTimeout(function() {
    slide(1);
}, 5000);