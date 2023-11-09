

/*const lista = ["item_1","item_2","item_3","item_4","item_5"]

let text = ""
let i = 0
while (i < lista.length){

    text += lista(i)
    
    i++
}
document.getElementById("item").innerHTML = text;*/




const item = ["acqua", "uova", "farina", "olio", "po"];

let i = 0;
let spesa = "";
while (item[i]) {
  spesa += item[i] + "<br>";
  i++;
}

document.getElementById("item").innerHTML = spesa;