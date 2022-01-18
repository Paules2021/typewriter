setTimeout(() => {
  console.log("4311o","th3r3", "w0r1d");
}, 3000);

let arr=["4311o","th3r3", "w0r1d"]
  for (let i = 0; i < arr.length ; i++) {
    setTimeout(() =>console.log(arr[i]) , (i+1) * 1000);
    };

