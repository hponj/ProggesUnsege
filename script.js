

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


function MainBox() {
    const MainBox = document.getElementById("main-box");
    MainBox.style.display = "flex";
}

function Back() {
    const ScratchFilevar = document.getElementById('Scratch-box');
    const FigmaFilevar = document.getElementById('Figma-box');
    const CanvaFilevar = document.getElementById('Canva-box');
    const AplicationFilevar = document.getElementById('Aplication-box');
    const WebsiteFilevar = document.getElementById('Website-box');
    ScratchFilevar.style.display = "none";
    FigmaFilevar.style.display = "none";
    CanvaFilevar.style.display = "none";
    AplicationFilevar.style.display = "none";
    WebsiteFilevar.style.display = "none";
    MainBox();
}

function ScratchFile() {
    const ScratchFilevar = document.getElementById('Scratch-box');
    ScratchFilevar.style.display = "flex";
    const MainBox = document.getElementById("main-box");
    MainBox.style.display = "none";
}

function FigmaFile() {
    const FigmaFilevar = document.getElementById('Figma-box');
    FigmaFilevar.style.display = "flex";
    const MainBox = document.getElementById("main-box");
    MainBox.style.display = "none";
}

function CanvaFile() {
    const CanvaFilevar = document.getElementById('Canva-box');
    CanvaFilevar.style.display = "flex";
    const MainBox = document.getElementById("main-box");
    MainBox.style.display = "none";
}

function AplicationFile() {
    const AplicationFilevar = document.getElementById('Aplication-box');
    AplicationFilevar.style.display = "flex";
    const MainBox = document.getElementById("main-box");
    MainBox.style.display = "none";
}

function WebsiteFile() {
    const WebsiteFilevar = document.getElementById('Website-box');
    WebsiteFilevar.style.display = "flex";
    const MainBox = document.getElementById("main-box");
    MainBox.style.display = "none";
}



