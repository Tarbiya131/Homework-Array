let arrA= [1,3,5,7,9]
function minSumm(){
    
}
let arrx = [1, -3, 9, 0, -2]
function plusMinus(arr) {
    
    let pos = 0 
    let neg = 0 
    let nul = 0 
    for(let i = 0; i <= arr.length - 1; i++){ 
        if(arr[i] > 0){ 
            pos += 1 
        }else if(arr[i] < 0){ 
            neg += 1 
        }else{ 
            nul += 1 
        } 
    } 
    console.log((pos/arr.length).toFixed(6)) 
    console.log((neg/arr.length).toFixed(6)) 
    console.log((nul/arr.length).toFixed(6)) 
}
plusMinus(arr)

 var arr=[1,2,3,4,5,6,7,8,9,10]
 for (var i = 0; i < arr.length; i++)
{
  if ((arr[i] % 2) === 0)
  {
  	console.log(arr[i]);
  }
}
var arr1=[]
for(var i=0; i<5;i++){
    arr1[i]=+prompt()
}
  console.log(arr1)
    function arraySum(arr1){
      var sum = 0;
        for(var i = 0; i < arr1.length; i++){
             sum += arr1[i];
              }
    console.log(sum);
    }
    arraySum(arr1);
    function arrayMediana(arr1){
      var sum = 0;
        for(var i = 0; i < arr1.length; i++){
             sum += arr1[i]%2;
              }
    console.log(sum);
    }
    arrayMediana(arr1);

    var arr1=[]
    var arr2=[]
    for(var i=0; i<5;i++){
        arr1[i]=+prompt()
    }
      console.log(arr1)
      var arr2=[]
      for(var j=0; j<5;j++){
        arr2[j]=+prompt()
    }
      console.log(arr2)

      var isEqual = arr1.toString() === arr2.toString();
      console.log(isEqual);

      var arr3=[]
      for( var x=0;x<10;x++){
        arr3[x]=+prompt()
      }
     arr3.concat(arr3%2)
     console.log(arr3)