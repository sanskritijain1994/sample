var mobile = [
    {company: "Samsung", model: "Galaxy", memory: 64, price:15000},
    {company: "Nokia", model: "S730", memory: 128, price:22000},
    {company: "Xiaomi", model: "Note", memory: 32, price:12000},
    {company: "Motoroala", model: "G10", memory: 32, price:15000},
    {company: "Apple", model: "S12", memory: 64, price:25000},
];

function generateTable(table, data) 
{
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  let table = document.querySelector("table");
  let data = Object.keys(mobile[0]);
  generateTable(table, mobile);
  console.log(mobile);

  function search()
  {
    var text ="";
    var txt = document.getElementById('ref').value;
    var id = document.getElementById('sel').value;
   
    mobile.forEach(element => {
        if(element.company==txt || element.memory==txt || element.model==txt || element.price==txt){
           // console.log(txt);
           mobile.forEach(element => {
            document.getElementById("tal").innerHTML=element;
           });
            
        }
        
    });
    /*if(ind!=-1 && ind1!=-1)
    {
        var myTable = "<table>"
  
        mobile.forEach((value,i)=>{
        myTable += '<tr><td>'+ value.ind + '</td></tr>';
  });
  myTable += "</table>";
  
  document.getElementById('table').innerHTML = myTable;
    }*/
  }