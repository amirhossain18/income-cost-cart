
document.getElementById('genaret-btn').addEventListener ('click', function () {  
   const mySelary =getSelaryAmoun ('selary-amount');
   const SavingAmount= document.getElementById('save-amou');
   const monthlySaving= mySelary /100*20
   SavingAmount.innerText= monthlySaving;
   const myfoodCOst = foodCost('food-cost');
   const homeRent=  homeRant('home-cost');
   const extraCost=  extraCostAmount('extra-cost')
  
    const totalCostID= document.getElementById('total-cost ');
    const totalCost= myfoodCOst + homeRent + extraCost;
    totalCostID.innerText= totalCost;
    
    const remainingMoney= mySelary - totalCost - monthlySaving
   const SetremainingAmount= document.getElementById('rem-amou');
   SetremainingAmount.innerText= remainingMoney; 
   
})