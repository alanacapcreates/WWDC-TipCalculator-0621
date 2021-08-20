function calculate(){
    //variables//
        //user input
        var bill = document.getElementById('bill_value').value;
        var tip = document.getElementById('tip_value').value;
        var peopleCount = document.getElementById('person_count').value;
        //variables for calculation
        var decimalTip
        var amountTip
        var tipPerPerson
        var billPerPerson
        var totalPerPerson
        var finalTotal
        
        
    //Parse String into Float/Int values
        bill = parseFloat(bill)
        tip = parseFloat(tip)
        peopleCount= parseInt(peopleCount)
        
            //console.log("bill: " + bill)
            //console.log("tip %: " + tip)
            //console.log("# people: " + peopleCount) 
            
            //calculating the decimal tip
            decimalTip = (tip/100);
            //console.log("tip as decimal: " + decimalTip)
            
    //calculate tip $$
        amountTip = bill * decimalTip
            //console.log("Amount Tip: " + amountTip)
    
    //calculate tip PP and convert to decimal
        tipPerPerson = amountTip / peopleCount
            //console.log("Tip Per Person: " + tipPerPerson)
    
    //calculate bill PP
        billPerPerson = bill / peopleCount
        //console.log("Total PP: " + billPerPerson)
    
    
    //total bill PP
        totalPerPerson = billPerPerson + tipPerPerson
    
    //total bill
        finalTotal = bill + amountTip
    
    //Rendered content
        document.getElementById('totalPerPerson').innerHTML=totalPerPerson.toFixed(2);
        document.getElementById('finalTotal').innerHTML=finalTotal.toFixed(2);
        document.getElementById('tip').innerHTML=amountTip.toFixed(2);
        document.getElementById('tipPerPerson').innerHTML=tipPerPerson.toFixed(2);
        document.getElementById('billPerPerson').innerHTML=billPerPerson.toFixed(2);
    }