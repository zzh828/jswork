

function goldbach(a){
var sum=0;
for(var i=1;i<=a;i++){
if(a % i ==0){
                sum++;
            }
        }
if(sum==2){
return true;
        }else{
return false;
        }
    }

function isTrue(a){
for(var i=2;i<a-2;i++){
var j = a -i;
if(goldbach(i)&&goldbach(j)){
    document.getElementById(a+"可以拆分为两个质数"+ i+"与"+j+"的和");
        }
      }
    }