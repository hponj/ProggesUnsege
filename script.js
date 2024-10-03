
function toggleVisibility() {
    const navLinks = document.getElementById('nav-link');
    if (navLinks.style.display === 'flex'){
        navLinks.style.display = 'none';
    }else{
        navLinks.style.display = 'flex';
    }
}

function meme1(){
    var dont = prompt("dont later gone")
    if (dont == "no problem"){
        document.getElementById('prank').style.display = 'block';

    } else {
        alert("Good kid");
    }
}


document.querySelectorAll('.box-card').forEach(function(card) {
    card.addEventListener('mouseenter', function() {
        document.querySelectorAll('.img-cre').forEach(function(image) {
            image.style.filter = 'saturate(100%)';
        });
    });
    card.addEventListener('mouseleave', function() {
        document.querySelectorAll('.img-cre').forEach(function(image) {
            image.style.filter = '';
        });
    });
});
