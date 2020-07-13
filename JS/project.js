function change(el)
{
	var t=document.getElementsByClassName("current_tab");		// to get current tab
	t[0].className="tab";										// to change current tab to normal tab
	
	el.className= "current_tab";								// to change this tab to current tab
	//console.log(el);
	
	
	var c=document.getElementsByClassName("current_content");    // to get current content
	c[0].className="tab_content";								//to change current content to tab(hide) 

	document.getElementById(el.innerHTML).className="current_content";	//to change this tab to current tab
	
}	