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


var clarinetTotal = function() {
    var weeks_value= document.getElementById("clarinetWeeks").value;
    var full_total=weeks_value*clarinet_cost;
    full_total=full_total.toFixed(2);    
    document.getElementById("clarinetTotal").innerHTML="$"+full_total;
   
}

var aguitarTotal =function() {
 var weeks_value= document.getElementById("aguitarWeeks").value;
    var full_total=weeks_value*aguitar_cost;
    full_total=full_total.toFixed(2);
    document.getElementById("aguitarTotal").innerHTML="$"+full_total;
}

var banjoTotal = function() {
 var weeks_value= document.getElementById("banjoWeeks").value;
    var full_total=weeks_value*banjo_cost;
    full_total=full_total.toFixed(2);
    document.getElementById("banjoTotal").innerHTML="$"+full_total;
}

var congaTotal = function() {
    var weeks_value= document.getElementById("congaWeeks").value;
    var full_total=weeks_value*conga_cost;
    full_total=full_total.toFixed(2);
    document.getElementById("congaTotal").innerHTML="$"+full_total;
 
}

var drumTotal= function() {
    var weeks_value= document.getElementById("drumWeeks").value;
    var full_total=weeks_value*drum_cost;
    full_total=full_total.toFixed(2);
    document.getElementById("drumTotal").innerHTML="$"+full_total;
 
}

var eguitarTotal= function(){
  var weeks_value= document.getElementById("eguitarWeeks").value;
    var full_total=weeks_value*eguitar_cost;
    full_total=full_total.toFixed(2);
    document.getElementById("eguitarTotal").innerHTML="$"+full_total;
 
}

var pianoTotal= function(){
  var weeks_value= document.getElementById("pianoWeeks").value;
    var full_total=weeks_value*piano_cost;
    full_total=full_total.toFixed(2);
    document.getElementById("pianoTotal").innerHTML="$"+full_total;
 
}

var saxTotal= function() {
  var weeks_value= document.getElementById("saxWeeks").value;
    var full_total=weeks_value*sax_cost;
    full_total=full_total.toFixed(2);
    document.getElementById("saxTotal").innerHTML="$"+full_total;
 
}

var trumpetTotal= function(){
    var weeks_value= document.getElementById("trumpetWeeks").value;
    var full_total=weeks_value*trumpet_cost;
    full_total=full_total.toFixed(2);
    document.getElementById("trumpetTotal").innerHTML="$"+full_total;
 
}

var violinTotal= function(){
  var weeks_value= document.getElementById("violinWeeks").value;
    var full_total=weeks_value*violin_cost;
    document.getElementById("violinTotal").innerHTML="$"+full_total;
 
}

// function get_total(t, instrumentWeeks ) { 

// };


