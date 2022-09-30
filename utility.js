function getSelaryAmoun (){
    const selaryAmountID= document.getElementById('selary-amount') ;
    const selaryAmountString= selaryAmountID.value;
    const selaryAmount= parseInt(selaryAmountString);
   return selaryAmount;
}

function foodCost(){
    const myFoodCostID= document.getElementById('food-cost');
    const foodCostString= myFoodCostID.value;
    const foodCost= parseInt(foodCostString);
    return foodCost;
}

function homeRant(){
  const rentID= document.getElementById('home-cost');
  const homeRentString= rentID.value;
  const homeRent= parseInt(homeRentString);
  return homeRent;
}

function extraCostAmount(){
    const extraCostID= document.getElementById('extra-cost');
    const extracostString= extraCostID.value;
    const extracostAmu= parseInt(extracostString);
    return extracostAmu;
}
