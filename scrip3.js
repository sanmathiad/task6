function getTotal(a, b, c){
  return a + b+ c;
}
function getAvgerage(Total){
  return total/3;
}
function getGrade(avg){
  if (avg>= 90){ 
    return "A";
}
else if (avg >=75){
  return"B";
}
else if(avg >=50){
  return"C";
}
else{
  return "F"
}
}
for (;;){
  let name = prompt("Enter student name");
  let m1 = Number(prompt("Enter marks in subject 1:"));
  let m2 = Number(prompt("Enter marks in subject 2:"));
  let m3 = Number(prompt("Enter marks in subject 3:"));
  
if(m1<0|| m1>100||m2<0||m2>100||m3<0||m3>100){
  alert("Error: marks must be between 0 and 100");
}
else{
  let total = getTotal(m1 , m2, m3);
  let average= getAvgerage (total);
  let grade = getgrade (average);
  alert("Name:"+ name +"\nTotal: "+ total + "\nAverage:" + average.toFixed(2) +"\n Grade" + grade);
}
let again = confirm (" Calculate another student's result?");
if(! again){
  break;
}
}