// https://lprgc.org/wp-content/uploads/2011/12/Sight-Adjustments-using-Minutes-Of-Angle.pdf

/*
variables needed:
distance from target
    shooterDistance
moa per click on your turret
    MOAPerClick
vertical distance from center
    elevationD
horizontal distance from center
    windageD
i will either need to make certain directions negative or implement right and left and up and down some other way.
*/

//A minute of angle, usually used as a measure of group size, target size or shot dispersion, spans 1.047 inch at 100 yards but we round down to 1”. To calculate MOA at any distance, multiply 1.047 by the distance in yards and divide by 100.
// formula
// 1 moa is 1.047 inches at 100 yards
// multiply 1.047 by the distance in yards and divide by 100. this tells you how big 1 moa is

// // );
// const distance = Number(document.querySelector(".distance").value);
// const MOAFactor = Number(document.querySelector(".MOAFactor").value);
// const windage = Number(document.querySelector(".windage").value);
// const elevation = Number(document.querySelector(".elevation").value);

const solution = Number(document.querySelector(".generate").value);

///////////////////////////////////////////////////////////////////////
//When people enter their info these functions run and create variables
document.querySelector(".OK1").addEventListener("click", function () {
  const distance = Number(document.querySelector(".distance").value);
  console.log(distance);
});

document.querySelector(".OK2").addEventListener("click", function () {
  const MOAFactor = Number(document.querySelector(".MOAFactor").value);
  console.log(MOAFactor);
});

document.querySelector(".OK3").addEventListener("click", function () {
  const windage = Number(document.querySelector(".windage").value);
  console.log(windage);
});

document.querySelector(".OK4").addEventListener("click", function () {
  const elevation = Number(document.querySelector(".elevation").value);
  console.log(elevation);
});
//////////////////////////////////////////////////////////////////////////
//math formula 
// MOASize = distance * 1.047 / 100
//# of MOA needed to get on target (MOANum) = windage(or elevation)(in inches) / MOASize
// number of clicks needed to get on target numOfClicks= MOANum /MOAF (MOA factor of the turret on your optic) 

////////////////////////////////////////////////////////////////////////////////////////////////
//when someone clicks generate solution


//I tried nesting the formulas but it doesnt seem to work. I didnt expect it to but i tried.
document.querySelector(".generate").addEventListener("click", function () {
  const numOfClicksEf = function (MOAFactor, elevation, distance) {
    const MOANEFuncf = function (elevation) {
      const MOASizef = function (distance) {
        const MOASizef = (distance * 1.047) / 100;
        return MOASize;
      };
      const MOANE = elevation / MOASize;
      return MOANE;
    };
    const numOfClicksE = MOANE / MOAFactor;
    return numOfClicksE;
  };
  console.log(numOfClicksE);
 


  //When someone clicks generate solution

// document.querySelector(".generate").addEventListener("click", function () {
// calculateE(distance, MOAFactor, elevation);
// calculateW(distance, MOAFactor, windage);
// displayMessage(
//     "Adjust your optic ${blank} clicks ${blank} and ${blank} clicks ${blank};
//   );
// });
*/
