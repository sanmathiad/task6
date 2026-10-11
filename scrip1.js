
let name = prompt("enter your name");
let m1 = Number(prompt("enter m1"));
if(m1<0 || m1>100){
    alert("error");
}
let m2=Number(prompt("enter m2"));
if(m2<0 || m2>100){
    alert("error");
}
let m3=Number(prompt("enter m3"));
if(m2<0 || m2>100){
    alert("error");
}
function b(){
   let total = m1+m2+m2;
   let avg = total/3;
    let grade ; 
    if (avg>=90){
        grade ="A";
    }
    else if(avg>=75){
        grade ="B"
    }
    else if (avg>=50){
    grade ="C"
    }

else{
    grade="f";
}
alert("student info" +name+""+total+""+avg+""+grade+"");
let msg =confirm ("Do you need to add more");
}
b() 
