function highlight() {
    //Write your code here
	var bold=document.getElementsByTagName("strong");
	for(let i=0;i<bold.length;i++){
		bold[i].classList.add("highlight");
	}
}
function return_normal() {
    //Write your code here
	var bold=document.getElementsByTagName("strong");
     for(let i=0;i<bold.length;i++){
		 bold[i].classList.remove("highlight");
	 }
    
}