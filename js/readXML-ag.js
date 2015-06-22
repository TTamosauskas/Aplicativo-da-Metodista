// File: readXML.js

// Start function when DOM has completely loaded 
$(document).ready(function(){ 

	// Open the students.xml file
     $.get("http://portal.metodista.br/proximos-eventos/rss.xml",{},function(xml){
     // $.get("rss-agenda.xml",{},function(xml){
      	
		// Build an HTML string
		myHTMLOutput = '<div>';
	  	
		// Run the function for each student tag in the XML file
		$('item',xml).each(function(i) {
			titulo = $(this).find("title").text();
			
			link = $(this).find("link").text();
            link2 = link.split("/app_view");
			link3 = link2[0];
			datas = $(this).find("pubDate").text();
			listadata = datas.split("-"); 
			mes = listadata[1];
			mes2 = "0"
			if (mes == "01"){mes2 = "Janeiro";}
			else if (mes == "02"){mes2 = "Fevereiro";}
			else if (mes == "03"){mes2 = "Março";}
			else if (mes == "04"){mes2 = "Abril";}
			else if (mes == "05"){mes2 = "Maio";}
			else if (mes == "06"){mes2 = "Junho";}
			else if (mes == "07"){mes2 = "Julho";}
			else if (mes == "08"){mes2 = "Agosto";}
			else if (mes == "09"){mes2 = "Setembro";}
			else if (mes == "10"){mes2 = "Outubro";}
			else if (mes == "11"){mes2 = "Novembro";}
			else if (mes == "11"){mes2 = "Dezembro";}
			    
			dia = listadata[2];
		    dia2 = dia.split("T"); 
			dia3 = dia2[0];
			// Build row HTML data and store in string
			mydata = BuildStudentHTML(titulo,link,datas);
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
	output += '<div class=evento>';
	output += '<div class="calengola"><div class="mes"> ' + mes2 + '</div> <div class="dia">' + dia3 + ' </div> </div><h2><a href="' + link3+ '/app_event_view">' + titulo + '</h2></a>';
	output += '<span class="clear"></span></div>';
	return output;
}


	 