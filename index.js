function tinhtoan(){
    let a = document.getElementById("input").value;
    let result;
    if(a<50){
        result = a*1806
    }
    else if(a<100){
        result = 50*1806+(a-50)*1866;
    }
    else if(a<200){
        result = 50*1806+100*1866+(a-100)*2167;
    }
    else{
        result = 50*1806+100*1866+200*2167+(a-200)*2729;
    }
document.getElementById("tien").innerHTML = result;

}