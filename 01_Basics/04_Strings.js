const name = "Paul";
const house = "Atreides"

// console.log(name+house); //Outdated method, recommended not to use

console.log(`${name} ${house}`);

const gameName = new String("High on Life");
console.table([gameName[0], gameName.length, gameName.toUpperCase(), gameName.indexOf('m'), gameName.charAt(3), gameName.substring(0,4), gameName.slice(-4), gameName.replace('Life', 'Weed'), gameName.includes('High'), gameName.split(' ')]);