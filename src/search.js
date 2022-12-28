import Search from "./search.js";

const searchItem = () =>{
    let filter = document.getElementById("tableInput").value.toLowerCase();
    let countryTable = document.getElementById("countryTable");
    let tr = countryTable.getElementsByTagName('tr');
  
    for (var i=0; i<tr.length; i++){
      td = tr[i].getElementsByTagName('td')[0];
      
      if(td){
        let textValue = td.textContent || td.innerHTML;
        
        if(textValue.toLowerCase().indexOf(filter) > -1){
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  export default Search;