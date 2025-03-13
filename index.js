function tinhtoan(){
    let a = document.getElementById("input").value;
    const muc1 = 1806;
    const muc2 = 1866;
    const muc3 = 2167;
    const muc4 = 2729;
    let result;
    if(a<50){
        result = a*muc1
    }
    else if(a<100){
        result = 50*muc1+(a-50)*muc2;
    }
    else if(a<200){
        result = 50*muc1+100*muc2+(a-100)*muc3;
    }
    else{
        result = 50*muc1+100*muc2+200*muc3+(a-200)*muc4;
    }
document.getElementById("tien").innerHTML = result;

}