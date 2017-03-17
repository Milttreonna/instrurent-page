var aguitar_cost= 439.99;
var banjo_cost= 62.27;
var clarinet_cost=152.36;
var conga_cost=35.10;
var drum_cost=118.30;
var eguitar_cost=899.99;
var piano_cost=221.13;
var sax_cost=410.02;
var trumpet_cost=317.07;
var violin_cost=91.00;
// set cost = to t


// var clarinet_button = document.getElementsByClassName('clarinetButton');
var clarinetTotal = function() {
    var weeks_value= document.getElementById("clarinetWeeks").value;
    var full_total=weeks_value*clarinet_cost;
    document.getElementById("clarinetTotal").innerHTML=full_total;
   
}

var aguitarTotal =function() {
 var weeks_value= document.getElementById("aguitarWeeks").value;
    var full_total=weeks_value*aguitar_cost;
    document.getElementById("aguitarTotal").innerHTML=full_total;
}

var banjoTotal = function() {
 var weeks_value= document.getElementById("banjoWeeks").value;
    var full_total=weeks_value*banjo_cost;
    document.getElementById("banjoTotal").innerHTML=full_total;
}

var congaTotal = function() {
 
}

var drumTotal= function() {
 
}

var egutarTotal= function(){
 
}

var pianoTotal= function(){
 
}

var saxTotal= function() {
 
}

var trumpetTotal= function(){
 
}

var violinTotal= function(){
 
}

// function get_total(t, instrumentWeeks ) { 

// };


