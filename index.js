function distanceFromHqInBlocks(pickuplocation){
   const hqlocation= 42;
   return Math.abs(pickuplocation - hqlocation)
}

function distanceFromHqInFeet(pickuplocation){
   const blocklengthInFeet= 264;
   return distanceFromHqInBlocks(pickuplocation)*blocklengthInFeet;
}

function distanceTravelledInFeet(start, destination){
   const blocklengthInFeet= 264;
   return Math.abs(destination-start)*blocklengthInFeet;
}

function calculatesFarePrice(start, destination){
   const blocklengthInFeet=264;
   const distanceInFeet= distanceTravelledInFeet(start,destination);

   if (distanceInFeet>2500){
   return 'cannot travel that far';
   }

   let fare=0;

   if (distanceInFeet> 400 && distanceInFeet <= 2000){
      fare= (distanceInFeet-400)* 0.02;
   } else if (distanceInFeet> 2000){
      fare=25;
   }
   
   return fare;
}