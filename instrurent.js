var clarinet_cost=152.36;
var drum_cost=118.30;
var piano_cost=221.13;
var violin_cost=91.00;
var eguitar_cost=117.00;
var aguitar_cost= 57.20;
var banjo_cost= 62.27;
var sax_cost=410.02;
var trumpet_cost=317.07;
var conga_cost=35.10;
var weeks_value="";
var cart_total=0;

// object.onclick = function(){};

function add_comma(x) {
     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
 }

function full_total(w,c) {return (w*c*1.07);
}

var clarinetTotal = function() {
    var weeks_value= document.getElementById("clarinetWeeks").value; 
    document.getElementById("clarinetTotal").innerHTML="$"+full_total(weeks_value,clarinet_cost).toFixed(2);
}

var aguitarTotal =function() {
 var weeks_value= document.getElementById("aguitarWeeks").value;
    document.getElementById("aguitarTotal").innerHTML="$"+full_total(weeks_value,aguitar_cost).toFixed(2);
}

var banjoTotal = function() {
 var weeks_value= document.getElementById("banjoWeeks").value;
    document.getElementById("banjoTotal").innerHTML="$"+full_total(weeks_value,banjo_cost).toFixed(2);
}

var congaTotal = function() {
    var weeks_value= document.getElementById("congaWeeks").value;
    document.getElementById("congaTotal").innerHTML="$"+full_total(weeks_value,conga_cost).toFixed(2);
 
}

var drumTotal= function() {
    var weeks_value= document.getElementById("drumWeeks").value;
    document.getElementById("drumTotal").innerHTML="$"+full_total(weeks_value,drum_cost).toFixed(2);
 
}

var eguitarTotal= function(){
  var weeks_value= document.getElementById("eguitarWeeks").value;
  document.getElementById("eguitarTotal").innerHTML="$"+full_total(weeks_value,eguitar_cost).toFixed(2);
 
}

var pianoTotal= function(){
  var weeks_value= document.getElementById("pianoWeeks").value;  
    document.getElementById("pianoTotal").innerHTML="$"+full_total(weeks_value,piano_cost).toFixed(2);
 
}

var saxTotal= function() {
  var weeks_value= document.getElementById("saxWeeks").value;
    document.getElementById("saxTotal").innerHTML="$"+add_comma(full_total(weeks_value,sax_cost).toFixed(2));
 
}

var trumpetTotal= function(){
    var weeks_value= document.getElementById("trumpetWeeks").value;
    document.getElementById("trumpetTotal").innerHTML="$"+add_comma(full_total(weeks_value,trumpet_cost).toFixed(2));
 
}

var violinTotal= function(){
  var weeks_value= document.getElementById("violinWeeks").value;
    document.getElementById("violinTotal").innerHTML="$"+full_total(weeks_value,violin_cost).toFixed(2);
 
}
