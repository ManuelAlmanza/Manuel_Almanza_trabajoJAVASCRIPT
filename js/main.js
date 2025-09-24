function cargar(){
	var objHttp=null;
	if(window.XMLHttpRequest) {
		objHttp = new XMLHttpRequest();
	} else if(window.ActiveXObject) {
		objHttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	objHttp.open("GET", "XML/Noticias.xml", true);
	objHttp.onreadystatechange = function() {
		if (objHttp.readyState==4) {							
			var documento = objHttp.responseXML; 
			var noticias = documento.documentElement;
			var cadena = "";	
			for (i = 0;i < 32; i++){ 			
				cadena = cadena + "<b>Titular:</b> " + noticias.getElementsByTagName("item")[i].childNodes[3].firstChild.nodeValue + "<br/>";	
				cadena = cadena + "<b>Descripcion:</b> " + noticias.getElementsByTagName("item")[i].childNodes[13].firstChild.nodeValue + "<br/>";
				cadena = cadena + "<b>Enlace:</b> <a href='" + noticias.getElementsByTagName("item")[i].childNodes[7].firstChild.nodeValue + "' target='_blank'>" + 
				noticias.getElementsByTagName("item")[i].childNodes[7].firstChild.nodeValue + "</a><br/><br/>";
			}
			document.getElementById("caja").innerHTML = cadena;
			} 
	}
	objHttp.send(null);
} 
