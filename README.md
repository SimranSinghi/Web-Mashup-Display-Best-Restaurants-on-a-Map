# Web-Mashup-Display-Best-Restaurants-on-a-Map
The Project displays the 10 best restaurants on the Map. Google Maps are used to display the restaurants on map using Google API  key. The data is fetched from yelp. Yelp Fusion API is used to fetch the data from the website. Google Map Markers is used to mark  location of restaurants on the Map. Each restaurant returned by Yelp has a "coordinate" which contains a "latitude" and a  "longitude". the latitude, longitude, and radius on your Yelp search, which can be derived from the map bounding box from  the Google Map. You can get the bounding box of the map using the getBounds method

As in Project #2, you will develop this project on your PC/laptop using XAMPP and you will test it using using your Mozilla Firefox web browser. Download project3.zip  Download project3.zipand unzip it inside your web server document root directory. The project3 directory contains 3 files: proxy.php, yelp.html, and yelp.js. All the web service requests to yelp.com should go through the proxy.php. See the example in yelp.js. Your project is to edit yelp.html and yelp.js as described in the description of the web application.

Web Services used by the Web Mashup
For this project, you will use the

Yelp Fusion API (v3.0) (Links to an external site.) from Yelp (Links to an external site.) (more specifically, the Search API (Links to an external site.))
Google Maps JavaScript API V3 (Links to an external site.)
Google Map Markers (Links to an external site.)
First, you need to get API keys for both Google maps and Yelp:

To use Google maps, you need to get a Google API key. See directions (Links to an external site.). You will need to register and provide a credit card number. Your credit card will not be charged as long as you make less than 28000 calls to the Map API in a month. You should disable this account at the end of the semester so that there are no accidental charges.
To use the Yelp Fusion API (v3), you need to register and get an API key at the Yelp API page (Links to an external site.). It's free. After you register, you go to Fusion API (Links to an external site.) and then "Manage App" and you click on "Generate new API key" from the Yelp API site. You cut-and-paste the API key into your proxy.php, and you test your setup on your web browser by using http://localhost/project3/yelp.html (Links to an external site.) and by pushing the Find button. It will display the the top 5 Indian restaurants in Arlington in JSON format. If you don't get anything, try this on your browser: http://localhost/project3/proxy.php?term=indian+restaurant&location=Arlington+Texas&limit=5 (Links to an external site.). If it gives an empty page, your Yelp API must be wrong. Get a new one.
Project Description
You need to edit the HTML file yelp.html and the JavaScript file yelp.js. Your HTML web page must have 3 sections:

a search text area to put search terms with a button "Find"
a Google map of size 600*500 pixels, initially centered at (32.75, -97.13) with zoom level 16
a text display area
When you write some search terms in the search text area, say "Indian buffet", it will find the 10 best restaurants in the map area that match the search terms. They may be less than 10 (including zero) sometimes. The map will display the location of these restaurants as map overlay markers with labels from 1 to 10. The text display area will display various information about these restaurants. It will be an ordered list from 1 to 10 that correspond to the best 10 matches. Each list item in the display area will include the following information about the restaurant: the image "image_url", the "name" as a clickable "url" to the Yelp page of this restaurant, and the rating (a number between 1-5). When you search for new terms, it will clear the display area and all the map overlay markers, and will create new ones based on the new search.

How do you find the latitude and longitude of a restaurant to put an overlay marker on the map? Each restaurant returned by Yelp has a "coordinate" which contains a "latitude" and a "longitude".
How do you tell Yelp to search only on the displayed map? You set the latitude, longitude, and radius on your Yelp search, which can be derived from the map bounding box from the Google Map. You can get the bounding box of the map using the getBounds (Links to an external site.) method (it returns 4 numbers).
