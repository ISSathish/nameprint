let ans=document.getElementById("output");
let count=0;
function answer(name){
	count++;
	let res=ans.innerHTML=`${name}<br>`
	document.write(res)
	if(count===5){
		clearInterval(result)
	}
}
let result=setInterval(answer,1000,"welcome")


