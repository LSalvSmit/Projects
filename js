const noun = ['He ', 'I ', 'Frog ', 'Gloop ']
const verb = [' jumped ', ' kicked ', ' sang ']
const adverb = [' to ', ' from ']
const object = [' EggLand', " Froggy Boggy", ' Gym']
const messageGen = () => { 
    return noun[Math.floor(Math.random()*4)] + verb[Math.floor(Math.random()*3)] + adverb[Math.floor(Math.random()*2)] + object[Math.floor(Math.random()*2)]
}

console.log(messageGen())