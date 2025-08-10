function check()
{
	event.preventDefault();
	let num = document.getElementById("num");
	let msg = document.getElementById("msg");
	if (num.value === "")
	{	alert("Please enter a Integer");
		msg.innerHTML="";
		num.focus();
		return;
	}
	let n = parseInt(num.value);
	if(n%2===0)
	{	
		ans="Even";
	}
	else
	{
		ans= "Odd";
	}
	msg.innerHTML = ans;
}
