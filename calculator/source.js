
function display(hhh){
    var output = document.getElementById("input-value");
   output.value += hhh;
}
function calculate(operation)
{
    document.getElementById("input-value").value = eval(document.getElementById("input-value").value) ;
}

function clr()
{
    var cl=document.getElementById("input-value");
    cl.value = " ";
}
function del()
{
    var dl=document.getElementById("input-value");
    dl.value=dl.value.slice(0,-1);
} 
   