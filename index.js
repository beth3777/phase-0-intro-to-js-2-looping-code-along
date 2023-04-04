const namesArray=["Guadalupe","Otis","Aki"]
function writeCards(namesArray){
    const cards=[]
    for(let i=0; i<namesArray.length; i++){
        const message= `Thank you, ${namesArray[i]}, for the wonderful surprise gift!`
        cards.push(message)
    }
  return cards
}
writeCards(names)

function countDown(num){
    let i=num 
    while (i>=0){
        console.log (i)
        i--
    }
}
countDown(10)