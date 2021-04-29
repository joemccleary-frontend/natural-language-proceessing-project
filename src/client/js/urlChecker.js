/*const checkForName = (formInput) => {
    var res = formInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    
    if(res == null){
        return false;   
     } 
     else
        return true;
}
  
export{checkForName}
*/

//[1] Check if URL
function checkURL(formInput) {
    const pattern = new RegExp(
    '^(https?:\\/\\/)?'+ //(http) 
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ //domain 
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ //
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // 
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // 
      '(\\#[-a-z\\d_]*)?$','i'); // 

    //returns true/false
      return !!pattern.test(formInput);
  }
  //print to terminal if it works
  //console.log(checkURL("https://reddit.com"));

export { checkURL };




/*[1] Check if string is URL method from following reference: 
https://reactgo.com/javascript-check-string-url/
 */