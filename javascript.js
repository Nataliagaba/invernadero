var database = firebase.database();


//database.ref('/invernadero').update({
//    humedad:0,temperaturac:0,temperaturaf:0,indicec:0,indicef:0,salida:0});

database.ref('/invernadero').update({salida:0});
document.getElementById("boton").style.background="#0404B1"

// some HTML element on the page
var postElement1 = document.getElementById("postElement1");
var humedad= postElement1.innerHTML;
var postElement2 = document.getElementById("postElement2");
var temperatura= postElement2.innerHTML;
var postElement2 = document.getElementById("postElement2");
var indice= postElement3.innerHTML;

var updateStarCount = function(element, value) {
    element.textContent = value+" %";
};
var starCountRef = firebase.database().ref('invernadero/' + '/humedad');
starCountRef.on('value', function(snapshot) {
    var humedad=snapshot.val();
    updateStarCount(postElement1, humedad);
});



var Count = function(element, value1, value2) {
    element.textContent = value1+"ºC "+" -------> "+value2+"ºF";
};
var starCountRef = firebase.database().ref('invernadero/' + '/temperaturac');
starCountRef.on('value', function(snapshot) {
    var temperaturac=snapshot.val();
    
    var start = firebase.database().ref('invernadero/' + '/temperaturaf');
    start.on('value', function(snapshot) {
        var temperaturaf=snapshot.val();
        Count(postElement2, temperaturac,temperaturaf);
    });
    
});

var starCountRef = firebase.database().ref('invernadero/' + '/indicec');
starCountRef.on('value', function(snapshot) {
    var temperaturac=snapshot.val();
    
    var start = firebase.database().ref('invernadero/' + '/indicef');
    start.on('value', function(snapshot) {
        var temperaturaf=snapshot.val();
        Count(postElement3, temperaturac,temperaturaf);
    });
    
});

var lamparain = false;
function lampara(){
if(lamparain==false){
    database.ref('/invernadero').update({
        salida:1});
    lamparain=true;
    document.getElementById("boton").style.color="#59E939"
}else{
    database.ref('/invernadero').update({
        salida:0});
        lamparain=false;
        document.getElementById("boton").style.color="#fff"
}
}

var starCountRef = firebase.database().ref('invernadero/' + '/color');
starCountRef.on('value', function(snapshot) {
    var color=snapshot.val();
    if(color=="verde"){
        document.body.style.background="#58C243";
    }
    if(color=="azul"){
        document.body.style.background="#308C97";
    }
    if(color=="rojo"){
        document.body.style.background="#E2512A";
    }
});

