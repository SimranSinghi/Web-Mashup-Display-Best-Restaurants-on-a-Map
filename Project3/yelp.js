
function initialize () {
	limit = 10 //ten results or less must be displayed
}
var mapMarkers = [];

function sendRequest () {
	var xhr = new XMLHttpRequest();
	var query = encodeURI(document.getElementById("search").value);
	//returns the distance in metres
	bounds = map.getBounds()
	
	
	diagonalDistance = google.maps.geometry.spherical.computeDistanceBetween(bounds.getNorthEast(), bounds.getCenter()) 

	//get the same markers as the number of items displayed in the list
	xhr.open("GET", "proxy.php?term=" + query + "&limit=" + limit + "&radius=" + parseInt(diagonalDistance) + "&latitude=" + bounds.getCenter().lat() + "&longitude=" + bounds.getCenter().lng());
	xhr.setRequestHeader("Accept","application/json");
	xhr.onreadystatechange = function () {
		if (this.readyState == 4) {
			var json = JSON.parse(this.responseText);
			// console.log(json)
			if(json.hasOwnProperty("error")) document.getElementById("output").innerHTML = json.error.code+"</br>"+json.error.description;
			else{
				//if no results are found when searched
				if(json["businesses"].length==0) document.getElementById("output").innerHTML = "No results found";
				else{
					showInMap(json)
					displayOutput(json)
				}
			}
		}
	};
	xhr.send(null);
}



function deleteMapMarkers() {
	for (var i = 0; i < mapMarkers.length; i++) {
	  mapMarkers[i].setMap(null);
	}
	mapMarkers = [];
}

function initMap(){
	//constraints given in the project
	//a Google map of size 600*500 pixels, initially centered at (32.75, -97.13) with zoom level 16
	center = {lat: 32.75, lng: -97.13}
	map = new google.maps.Map(document.getElementById('map'), {
	  center: center, 
	  zoom: 16
	});
}

function showInMap(json){
	// display the plotting using coordinates, latitude and longitude received in the json
	deleteMapMarkers();
	for(var i=0;i<json["businesses"].length;i++){
		pos = new google.maps.LatLng({lat: json["businesses"][i]["coordinates"]["latitude"], lng: json["businesses"][i]["coordinates"]["longitude"]}); 

		//push it to mapmarkers array
		mapMarkers.push(new google.maps.Marker({position: pos, map: map, label: String(i+1)}));
	}
}

function displayOutput(json){
	console.log(json)
	output = "<table><tr><th>S.No.</th><th>Image</th><th>Name & Address</th><th>Rating</th><th>Contact</th><th>Reviews</th></tr>"
	for(var i=0;i<json["businesses"].length;i++){
		output += "<tr><td>"
		output += (i+1) + ".</td><td>"
		output += "<img src=\"" + json["businesses"][i]["image_url"] + "\" style=\"height:200px;width:200px;\"></td><td>"
		output += "<a href=\"" + json["businesses"][i]["url"] + "\">" + json["businesses"][i]["name"] + "<br></br>" + json["businesses"][i]["location"]["address1"] + "</a></td><td>"
		output += json["businesses"][i]["rating"] + "</td><td>"
		output += json["businesses"][i]["display_phone"]+ "</td><td>"
		output += json["businesses"][i]["review_count"]
		output += "</td></tr>"
		noofresults = json.total
	}
	output += "</table>"
	document.getElementById("output").innerHTML = output;
	document.getElementById("noofresults").innerHTML = "Suggested results" + " : " + noofresults;
}