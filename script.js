let count=0;
let incrementBtn = document.getElementById("incrementBtn");
let counter = document.getElementById("counter");
incrementBtn.addEventListener("click",function(){
	alert(count);
	count++;
	counter.textContent=count;
})
