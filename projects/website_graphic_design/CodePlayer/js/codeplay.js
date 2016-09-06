	// Set the height of the windows and menuBar, then
	//subtract from each other:
	
	var windowHeight=$(window).height();
	var menuBarHeight=$("#menuBar").height();
	
	var codeContainerHeight=windowHeight-menuBarHeight;
	
	$(".codeContainer").height(codeContainerHeight+"px");
	
	// Toggle between code Containers:
	
	$(".toggle").click(function() {
	
		$(this).toggleClass("selected");
		
		var activeDiv=$(this).html();
		
		$("#"+activeDiv+"Container").toggle();
	
		var showingDivs=$(".codeContainer").filter(function() {
			
			return($(this).css("display")!="none");
		
		}).length;
		
		var width=100/showingDivs;
		
		$(".codeContainer").width(width+"%");
		
	});
	
	// Press button to run the contents of all containers:
	
	$("#runButton").click(function(){
	
		$("iframe").contents().find("html").html('<style>'+$("#cssCode").val()+'</style>'+$("#htmlCode").val());
	
		document.getElementById("resultFrame").contentWindow.eval($("#jsCode").val());
	});