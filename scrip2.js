let keepGoing = true;
 while(keepGoing){
        console.log("---Menu---");
        console.log("1. soda-₹20");
        console.log("2. chips-₹15");
        console.log("3. candy- ₹10");
         console.log("4. juice-₹25");
         console.log("5. Water -10");
let itemInput = prompt("Enter item number (1 to 5):");
let item = Number(itemInput);

if(item<1 || item > 5|| isNaN(item)){

        alert("Invalid item number!");
}
else{
        let name = "";
        let price =0;

if(item===1){ name = "soda"; price="20"}
else if (item===2){ name="chips"; price=15;}
else if (item===3){name="candy"; price=10;}
else if (item===4){name="Juice"; price=25;}
else if (item===5){name ="Water"; price=10;}

let moneyInput=prompt("selected: "+ name +" (₹" + price +") .Enter your money:");
let money =Number(moneyInput);

if (money<=0 || isNaN(money)){
        alert("Invaild money amount!");
}
else if (money< price){
        alert("Insufficient balance! You need ₹" +price);
}
else{
         let change = money-price;
        alert("purchased" + name+ "!Change returned: ₹"+ change);
         
        console.log("Dispending item...");
        for(let i=3; i>=1; i--){
                console.log (i);
 }
        alert("your item is ready!");


        console.log("pattern:");
        for(let r=1; r<=item; r++){
         let line ="";
        for (let c = 1; c<=r ; c++){
                line=line +c +"";
}
        console.log(line);
          }
   }
}       
keepgoing =confirm("Do you want to buy another item?");
 }
alert("Goodbye!");





   
   
   
   
   
   
   
   
   
   
   
        