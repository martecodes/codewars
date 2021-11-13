function array(arr){
  //split the string at the comma -> slice array from index 1 and index -1 index -> join with space
  //check if string is empty
  let arr1 = arr.split(",").slice(1,-1).join(" ")
  return arr1 !== '' ? arr1 : null
}

//string in -> return with the first and last char removed and with spaces instead of commas
//if return is empty it must be null