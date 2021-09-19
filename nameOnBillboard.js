function billboard(name, price = 30){
let  a = name.length
let total = 0
for(i = 1;i <= a;i++){
  total+=price
}
return total
} 