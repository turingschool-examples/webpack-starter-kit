function renderUserCard(username, totalCost){
    const formatedCost = costToString(totalCost)
    return `<li class="username-card">${username}</li>\n<li class="totalspent">Total Spent: ${formatedCost}</li>`
}
function costToString(cost){
    const splitCost = cost.toString().split('.')
    if(splitCost[1].length < 2){
        splitCost[1]+= '0'
    }
    const formated = `${splitCost[0]}.${splitCost[1]}$`
    return formated
}
export{
    renderUserCard
}