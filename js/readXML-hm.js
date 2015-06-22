// File: readXML.js

// Start function when DOM has completely loaded 
$(document).ready(function(){ 

	// Open the students.xml file
	    $.get("http://portal.metodista.br/humanidades/noticias/rss.xml?1",{},function(xml){
    //$.get("rss.xml",{},function(xml){
      	
		// Build an HTML string
		myHTMLOutput = '<div>';
	  	
		// Run the function for each student tag in the XML file
		$('item',xml).each(function(i) {
			titulo = $(this).find("title").text();
			link = $(this).find("link").text();
			imagem = $(this).find("linkImage").text();
			
			// Build row HTML data and store in string
			mydata = BuildStudentHTML(titulo,link,imagem);
			myHTMLOutput = myHTMLOutput + mydata;
		});
		myHTMLOutput += '</div>';
		
		// Update the DIV called Content Area with the HTML string
		$("#ContentArea").append(myHTMLOutput);
	});
});
 
 
 
 function BuildStudentHTML(titulo){
	
	
	// Build HTML string and return
	output = '';
	output += '<div class=noticia>';
	output += '<img src="' + imagem + '"/><h2><a href="' + link + '">' + titulo + '</h2></a>';
	output += '<span class="clear"></span></div>';
	return output;
}
	 