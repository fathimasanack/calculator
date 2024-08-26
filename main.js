const displayData = (content)=>{
    dis.value += content
}
const clearCalcScreen = ()=>{
    dis.value = ""
}
const evaluateExpr = ()=>{
    try{
        dis.value = eval(dis.value)
    }catch{
        dis.value = "invalid expression"
    }
}
const removeLastCalcItem = ()=>{
    dis.value = dis.value.slice(0,-1)
}