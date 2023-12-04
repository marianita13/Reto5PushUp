function SamYKelly(sam,kelly,diferencia){

    var SamResult = diferencia+sam;
    var kellyResult = kelly;
    var dias = 1;
    while(kellyResult < SamResult){
        dias +=1;
        SamResult= SamResult+3;
        kellyResult= kellyResult+5;
        console.log(SamResult,kellyResult,dias);
    }
    return dias

}
console.log(`Kelly will pass Sam on day ${SamYKelly(3,5,5)}`);
