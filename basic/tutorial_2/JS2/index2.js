var infoDiv = document.getElementById('info');

let map = L.map('map').setView([25.034189838257852, 121.56451743512416], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([25.02679596170734, 121.52879246937569]).addTo(map)
                .bindPopup('流動之門：師大和平校區');

var marker2 = L.marker([25.02628220891764, 121.52756985187678]).addTo(map)
                .bindPopup('典雅之門：師大校本部');

var marker3 = L.marker([25.027684920893957, 121.52853383839744]).addTo(map)
                .bindPopup('神秘之門：翻譯所');


marker.on('click', function () {
    console.log("Click 1");
    infoDiv.textContent = "流動之門：師大和平校區";
    map.panTo([25.02679596170734, 121.52879246937569]);
});

marker2.on('click', function () {
    console.log("Click 2");
    infoDiv.textContent = "典雅之門：師大校本部";
    map.panTo([25.02628220891764, 121.52756985187678]);
});

marker3.on('click', function () {
    console.log("Click 3");
    infoDiv.textContent = "神秘之門：翻譯所";
    map.panTo([25.027684920893957, 121.52853383839744]);
});

function goPage(){
    window.location.href = "https://mira-ar.n010.app/show/N7eav9";
}