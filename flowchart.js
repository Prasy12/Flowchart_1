    var x = 0;
    var ns = 4;
    var grad=0,div=0 ;
    var sid= new Array;
    var eng = new Array();
    var math = new Array();
    var science = new Array();
    var social = new Array();
    var pass = new Array(13).fill(0);
    var fail = new Array(13).fill(0);
    var totstud = new Array(13).fill(0);
    var pp=new Array(13).fill(0);
    var totstudents=0;
    var totalpass=0;
    var totalfail=0;
    var tpp;

    function validate() {
        sid[x] = parseInt(document.getElementById("SID").value, 10);
        grad = parseInt(document.getElementById("grades").value, 10);
        div = parseInt(document.getElementById("div").value, 10);
        eng[x] = parseInt(document.getElementById("english").value, 10);
        math[x] = parseInt(document.getElementById("maths").value, 10);
        science[x] = parseInt(document.getElementById("science").value, 10);
        social[x] = parseInt(document.getElementById("social").value, 10);
        var g = document.getElementById("grades");
        var strUser = g.options[g.selectedIndex].value;
        var strUser1 = g.options[g.selectedIndex].text;
        var d = document.getElementById("div");
        var strUser2 = d.options[d.selectedIndex].value;
        var strUser3 = d.options[d.selectedIndex].text;
        var t=1;
     for(var v=0;v<x;v++)
     {
      if(sid[v]==sid[x])
     {
      alert("Student ID already exists");
      t=0;
     }
     } 
         if (strUser == 0) {
        alert("Please select a Grade");
        }
        else if (strUser2 == 0) {
        alert("Please select a division");
        }
        else if((isNaN(sid[x]))) 
        {
            alert("Enter a StudentID")
        }  
        else if(sid[x]<0)
        {
            alert("Enter a Valid StudentID")
        } 
        else if ((isNaN(eng[x]))) {
            alert("Please enter some  marks for English ");
        }
        else if ((isNaN(math[x]))) {
            alert("Please enter some marks for Maths ");
        }
        else if ((isNaN(science[x]))) {
            alert("Please enter some marks for Science ");
        }
        else if ((isNaN(social[x]))) {
            alert("Please enter some marks for Social ");
        }
        else if ((eng[x] < 0) || (math[x] < 0) || (science[x] < 0) || (social[x] < 0)) {
            alert("Marks can't be negative");


        }
        else if ((eng[x] > 100) || (math[x] > 100) || (science[x] > 100) || (social[x] > 100)) {
            alert("Marks can't be greater than 100");

        }
        else if(t==1) {
           calculate();

        }

    }

    function cleartext() {
        document.getElementById("SID").value = "";
        document.getElementById("grades").value = "";
        document.getElementById("div").value = "";
        document.getElementById("english").value = "";
        document.getElementById("maths").value = "";
        document.getElementById("science").value = "";
        document.getElementById("social").value = "";
    }

    function calculate() {

        alert("Marks Entered");
        var z = grad;
        var sum = eng[x] + math[x] + science[x] + social[x];
        var avg = sum / ns;
        if (avg >= 60) {
            pass[z]++;
            totstud[z]++;
            totalpass++;
            totstudents++;

        }
        else if (avg < 60) {
            fail[z]++;
            totstud[z]++;
            totalfail++;
            totstudents++;
        }
        pp[z] = ((pass[z] / totstud[z]) * 100);
        x++;
        cleartext();
       
    if(confirm("Do you wish to continue?!"))
    {
        //save it    
    }
    else
    {
        
        display_array();
    } 
    
   
    }
    


   function display_array()
    {
        
    var myTable = "<h1>Final Report</h1>";
    myTable += "<table><tr><td >Grades</td>";
    myTable += "<td>No of students</td>";
    myTable += "<td>Pass</td>";
    myTable += "<td>Fail</td>";
    myTable += "<td>Pass Percentage</td></tr>";

 
    for (var i = 1; i <= 12; i++) {
        myTable += "<tr><td>Grade" + i + "</td>";
        myTable += "<td>" + totstud[i] + "</td>";
        myTable += "<td>" + pass[i] + "</td>";
        myTable += "<td>" + fail[i] + "</td>";
        myTable += "<td>" + pp[i].toFixed(2) + "</td></tr>";
    }
    
    if(totstudents==0)
    {
        tpp=0;
    }else{
        tpp=(totalpass/totstudents)*100;
    }
    myTable += "<tr><td>Total</td>";
    myTable += "<td>" + totstudents + "</td>";
    myTable += "<td>" + totalpass + "</td>";
    myTable += "<td>" + totalfail + "</td>";
    myTable += "<td>" + tpp.toFixed(2) + "</td>";
    myTable += "</table>";
    document.getElementById("Result").innerHTML = myTable;
}
    
