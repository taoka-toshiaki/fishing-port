fetch("./assets/fishing-port.json").then(result => result.json()).then(hasdata => {
    let place = hasdata.map(element => {
        return {"name":element.name + "漁港","lat":element.point.split(" ")[0],"lng":element.point.split(" ")[1]}
    });
    let map = L.map('map');
    let tileLayer = L.tileLayer('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'c <a href="//osm.org/copyright">OpenStreetMap</a> contributors, <a href="//creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
    });
    tileLayer.addTo(map);
// ---------------------------
iconMarkers = L.featureGroup();		// 全マーカーを画面内に収めるため
for (let i = 0; i < place.length; i++) {
	iconMarkers.addLayer( L.marker([place[i].lat, place[i].lng]).addTo(map).bindPopup(place[i].name) );
}
map.fitBounds(iconMarkers.getBounds());	// 全マーカーを画面内に収める

}).catch(errors => {console.log(errors)});