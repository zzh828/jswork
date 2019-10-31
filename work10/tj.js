function stat(){
    let str = document.getElementById("str").value
    let obj = {}
    for (let i = 0; i < str.length; i++) {
            let result= str[i]
        if (obj[result]) {
          obj[result]++
    } else {
        obj[result]=1
            }
     }
document.getElementById('result').innerText = JSON.stringify(obj)
}
