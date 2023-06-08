const turnOn = document.getElementById( 'turnOn' );
const turnOff = document.getElementById( 'turnOff' );
const lamp = document.getElementById( 'lamp' );

function imgFundo () {
    if( !isLampBroken () ) {
    document.getElementById( 'imagemFundo' ).src = './img/quartoClaro2.jpg';
    }
}

function imgFundo2 () {
    if( !isLampBroken () ) {
    document.getElementById( 'imagemFundo' ).src = './img/quartoEscuro2.jpg';
    }
}

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}


function lampOn () {
    if( !isLampBroken () ) {
        lamp.src = './img/ligada.png';
    }
}

function lampOff () {
    if( !isLampBroken () ) {
        lamp.src = './img/desligada.png';
    }
}

function lampBroken () {
    lamp.src = './img/quebrada.png';
    
}




turnOn.addEventListener ( 'click', lampOn);
turnOff.addEventListener ( 'click', lampOff);

lamp.addEventListener ( 'mouseover', lampOn);
lamp.addEventListener ( 'mouseleave', lampOff);
lamp.addEventListener ( 'dblclick', lampBroken);
