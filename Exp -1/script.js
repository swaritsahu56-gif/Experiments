function calculatorresult() {
    
    const n = document.getElementById("subjects").value;
    let i;
    let total=0;
    for(i=0; i<n; i++){

        let x =parseFloat(prompt("enter the subject no."+(i+1)));
        total+=x;
    }
    let avg = total/n;
    let grade;
    if(avg>90){
        grade='A+';

    }
    else if(avg>80)
        grade='A';
    
    else if(avg>70)
        grade='B+';
    
    else if(avg>60)
        grade='B';
    
    else if(avg>50)
        grade='C';
    
    else if(avg>40)
        grade='D';
    
    else (avg<40)
        grade='F';
    
    if(avg>40)
           result='Pass';
    
    else
        result='Fail';
    
    document.getElementById("result").innerHTML="Total marks:"+total+"<br>"+"Average marks:"+avg+"<br>"+"Grade:"+grade + "<br>"+"Result:"+result;

    
}
