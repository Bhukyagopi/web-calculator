var result="";
var input1=document.getElementById("res");
y=input1.value;
var x;
function press(x)
{
    result+=x;
    input1.value=result;
}
function equal(){
    input1.value=eval(result);
}
function revert()
{
    result="";
    input1.value=result;
}
input1.addEventListener('input', function() {
    result = input1.value;
});
