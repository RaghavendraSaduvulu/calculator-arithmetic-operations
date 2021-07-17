var x = document.getElementById('n1');
var y = document.getElementById('n2');
if(x.value !== null && y.value !== null)

function sub(){
    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)
    var sub1= n1-n2
    document.getElementById('result').innerHTML = " The difference of "+n1+" and "+n2+" is "+sub1
    
}
function sum()
{
    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)
    var sum1= n1+n2
    document.getElementById('result').innerHTML =" The sum of "+n1+" and "+n2+" is "+ sum1
    
}
function mul()
{
    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)
    var mul1= n1 * n2
    document.getElementById('result').innerHTML = " The Multipication of "+n1+" and "+n2+" is "+ mul1
    
}
function divi()
{
    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)
    var divi1= n1/n2
    document.getElementById('result').innerHTML = " The division of "+n1+" and "+n2+" is "+ divi1
    
}
function moddivi()
{
    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)
    var moddivi1= n1 % n2
    document.getElementById('result').innerHTML =" The remainder of "+n1+" and "+n2+" is "+ moddivi1
      
}
function power()
{
    var n1 = Number(document.getElementById('n1').value)
    var n2 = Number(document.getElementById('n2').value)
    var power= Math.pow(n1,n2)
    document.getElementById('result').innerHTML =n1+" power "+n2+" is "+power
}
