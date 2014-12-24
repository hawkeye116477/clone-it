// Copyright (c) 2014 8pecxstudios.com \\
// Use of clone it code is strictly by permissions only even tho its very simple code. \\

//Import Browser Console
var iDebuggerModi = false;
if (iDebuggerModi){
	let console = (Cu.import("resource://gre/modules/devtools/Console.jsm", {})).console;
}

var cloneThisTabToNewTab = {
	//Clones current tab into new tab
	CloneCurrentTab : function(e) {
	//Added in some general error handling by encapsulating it in try catch statements
	try{
	//Check if url bar has a url
	if (gURLBar.value){
	//Declare a variable to store the URL data
	var UrlToClone = gURLBar.value;{
	//Use the URL data to open in new tab
	gBrowser.selectedTab = openUILinkIn(UrlToClone, 'tab');	
	
	if (iDebuggerModi){
		//Log to browser console upon success
		console.log("Clone Tab Success");
		}
				}
			}else{
			
			if (iDebuggerModi){
				//Log to browser console if no url data to clone
				console.log("No Tab To Clone");
			}
				}
		}catch (e){
			//Catch any nasty errors and output to dialogue and console
			alert("A Error Was Encountered While Trying To Clone The Tab!" + e);
			
			if (iDebuggerModi){
				//Log to browser console upon failure
				console.log("Clone Tab Failed" + e);
			}
		}
	}
}

var cloneThisTabToNewWindow = {	
	//Clones current tab in new window	
	CloneCurrentTabNewWindow : function(e) {
	//Added in some general error handling by encapsulating it in try catch statements		
	try{
	//Check if url bar has a url
	if (gURLBar.value){	
	//Declare a variable to store the URL data
	var UrlToClone = gURLBar.value;{
	//Use the URL data to open in new Window
	gBrowser.selectedTab = openUILinkIn(UrlToClone, 'window');
	
	if (iDebuggerModi){
		//Log to browser console upon success	
		console.log("Clone Window Success");
		}
				}
			}else{
			
			if (iDebuggerModi){
				//Log to browser console if no url data to clone	
				console.log("No Window To Clone");
			}
				}
		}catch (e){
			//Catch any nasty errors and output to dialogue and console
			alert("A Error Was Encountered While Trying To Clone The Window!" + e);
			
			if (iDebuggerModi){
				//Log to browser console upon failure
				console.log("Clone Window Failed" + e);
			}
		}		
	}
}	