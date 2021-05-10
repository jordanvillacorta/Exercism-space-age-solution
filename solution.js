// pseudo
// declare planet table
// declare earth seconds in a year
// declare total years which divide given seconds by earth seconds by planet
// return total years

export function age(planet, seconds) {

    let planetOrbits = {
      mercury: 0.2408467,
      venus: 0.61519726,
      earth: 1.0, // 31557600 seconds
      mars: 1.8808158,
      jupiter: 11.862615,
      saturn: 29.447498,
      uranus: 84.016846,
      neptune: 164.79132
    }
  
    let earthYear = 31557600; // seconds
    let totalYears = seconds / earthYear / planetOrbits[planet];
    // console.log(Number(totalYears.toFixed(2)));
    return Number(totalYears.toFixed(2));
  };
