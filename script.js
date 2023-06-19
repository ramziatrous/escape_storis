const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function ch(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  
  document.formular.voucher.value=result;
}
function redeem(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
document.form.gutschein.value =result;

}

function alertbox(){
    document.getElementById("confirm").style.display="block";
}
function hide(){
    document.getElementById("confirm").style.display="none"; 
}
function reserv(){
    document.getElementById("reserv").style.display="block";
}
function hidereserv(){
    document.getElementById("reserv").style.display="none"; 
}


function apply(){
    const gut =document.form.gutschein.value;
 
        if(gut == vocher){
    document.getElementById("preis").innerHTML="Preis 45,00€/Person" ;
}
}
function changeevent(){
    document.getElementById("btn1").removeEventListener("onclick",reserv());
    document.getElementById("btn1").addEventListener("onclick",Venuedoo.Shop.AnimationClick());
}

AnimationClick = function () {
    var element = $(window.event.target);
    element.addClass('vd-animated shake');
    element.attr('data-org', element.html());
    element.html(Venuedoo.Shop.texte.slot_occupied);
    window.setTimeout(function () {
        element.html(element.attr('data-org'));
        element.removeClass('vd-animated shake');
    }, 2000);
};
