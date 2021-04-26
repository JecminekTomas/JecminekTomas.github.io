var positronVI = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png', { attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>', minZoom: 3, maxZoom: 6 });

var mapsMedianVI = L.map('mapsMedianVI', {
    center: [14.686, 14.976],
    zoom: 3,
    minZoom: 3,
    maxZoom: 5,
    layers: [positronVI]
});

mapsMedianVI.createPane('labels');
mapsMedianVI.getPane('labels').style.zIndex = 650;
mapsMedianVI.getPane('labels').style.pointerEvents = 'none';

var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
    attribution: '©OpenStreetMap, ©CartoDB',
    pane: 'labels'
}).addTo(mapsMedianVI);

var median2000VI = L.tileLayer('./maps/Median2000VI/{z}/{x}/{y}.png', {
    tms: true, opacity: 1.0, attribution: "", minZoom: 3,
    maxZoom: 5,
}).addTo(mapsMedianVI);

var median2020VI = L.tileLayer('./maps/Median2020VI/{z}/{x}/{y}.png', {
    tms: true, opacity: 1.0, attribution: "", minZoom: 3,
    maxZoom: 5,
}).addTo(mapsMedianVI);



L.control.sideBySide(median2020VI, median2000VI).addTo(mapsMedianVI);
L.control.scale().addTo(mapsMedianVI);

var legendVI = L.control({ position: 'topright' });

var viColors = [
    'CE7E45', 'DF923D', 'F1B555', 'FCD163', '99B718', '74A901',
    '66A000', '529400', '3E8601', '207401', '056201', '023B01',
    '011D01', '011301'
]


legendVI.onAdd = function (mapsMedianVI) {

    var div = L.DomUtil.create('div', 'legendVI'),
        grades = ['Min', '', '', '', '', '', '', '', '', '', '', '', '', 'Max'],
        labels = [];

    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + `#${viColors[i]}` + '"></i> ' + grades[i] + '<br>';
    }

    return div;
};

legendVI.addTo(mapsMedianVI);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var positronT = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png', { attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>', minZoom: 3, maxZoom: 6 });

var mapsMedianT = L.map('mapsMedianT', {
    center: [14.686, 14.976],
    zoom: 3,
    minZoom: 3,
    maxZoom: 5,
    layers: [positronT]
});

mapsMedianT.createPane('labels');
mapsMedianT.getPane('labels').style.zIndex = 650;
mapsMedianT.getPane('labels').style.pointerEvents = 'none';

var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
    attribution: '©OpenStreetMap, ©CartoDB',
    pane: 'labels'
}).addTo(mapsMedianT);

var median2000T = L.tileLayer('./maps/Median2000T/{z}/{x}/{y}.png', {
    tms: true, opacity: 1.0, attribution: "", minZoom: 3,
    maxZoom: 5,
}).addTo(mapsMedianT);

var median2020T = L.tileLayer('./maps/Median2020T/{z}/{x}/{y}.png', {
    tms: true, opacity: 1.0, attribution: "", minZoom: 3,
    maxZoom: 5,
}).addTo(mapsMedianT);


L.control.sideBySide(median2020T, median2000T).addTo(mapsMedianT);
L.control.scale().addTo(mapsMedianT);

var legendT = L.control({ position: 'topright' });

var tempColors = [
    '040274', '0502a3', '0502e6',
    '0602ff', '307ef3', '30c8e2',
    '3be285', '86e26f', 'b5e22e',
    'ffd611', 'ffb613', 'ff6e08',
    'ff0000', 'c21301', '911003'
]

legendT.onAdd = function (mapsMedianT) {

    var div = L.DomUtil.create('div', 'legendT'),
        grades = ['Min', '', '', '', '', '', '', '', '', '', '', '', '', 'Max'],
        labels = [];

    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + `#${tempColors[i]}` + '"></i> ' + grades[i] + '<br>';
    }

    return div;
};

legendT.addTo(mapsMedianT);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var positronDiffVI = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png', { attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>', minZoom: 3, maxZoom: 6 });

var mapDiffVI = L.map('mapDiffVI', {
    center: [14.686, 14.976],
    zoom: 3,
    minZoom: 3,
    maxZoom: 5,
    layers: [positronDiffVI]
});

mapDiffVI.createPane('labels');
mapDiffVI.getPane('labels').style.zIndex = 650;
mapDiffVI.getPane('labels').style.pointerEvents = 'none';

var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
    attribution: '©OpenStreetMap, ©CartoDB',
    pane: 'labels'
}).addTo(mapDiffVI);


var DiffVI = L.tileLayer('./maps/DiffVI/{z}/{x}/{y}.png', {
    tms: true, opacity: 1.0, attribution: "", minZoom: 3,
    maxZoom: 5,
}).addTo(mapDiffVI);

L.control.scale().addTo(mapDiffVI);

var legendDiffVI = L.control({ position: 'topright' });

var diffVIColors = [
    'green', 'red'
]

legendDiffVI.onAdd = function (mapDiffVI) {

    var div = L.DomUtil.create('div', 'legendDiffVI'),
        grades = ['Nárůst', 'Pokles'],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + diffVIColors[i] + '"></i> ' + grades[i] + '<br>';
    }

    return div;
};

legendDiffVI.addTo(mapDiffVI);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var positronDiffT = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png', { attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>', minZoom: 3, maxZoom: 6 });

var mapDiffT = L.map('mapDiffT', {
    center: [14.686, 14.976],
    zoom: 3,
    minZoom: 3,
    maxZoom: 5,
    layers: [positronDiffT]
});

mapDiffT.createPane('labels');
mapDiffT.getPane('labels').style.zIndex = 650;
mapDiffT.getPane('labels').style.pointerEvents = 'none';

var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
    attribution: '©OpenStreetMap, ©CartoDB',
    pane: 'labels'
}).addTo(mapDiffT);


var DiffTemp = L.tileLayer('./maps/DiffTemp/{z}/{x}/{y}.png', {
    tms: true, opacity: 1.0, attribution: "", minZoom: 3,
    maxZoom: 5,
}).addTo(mapDiffT);

L.control.scale().addTo(mapDiffT);

var legendDiffTemp = L.control({ position: 'topright' });

var diffTempColors = [
    'darkred', 'darkblue'
]

legendDiffTemp.onAdd = function (mapDiffT) {

    var div = L.DomUtil.create('div', 'legendDiffVI'),
        grades = ['Nárůst', 'Pokles'],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + diffTempColors[i] + '"></i> ' + grades[i] + '<br>';
    }

    return div;
};

legendDiffTemp.addTo(mapDiffT);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var positronTVI = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png', { attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>', minZoom: 3, maxZoom: 6 });

var mapsDiffVITemp = L.map('mapsDiffVITemp', {
    center: [14.686, 14.976],
    zoom: 3,
    minZoom: 3,
    maxZoom: 5,
    layers: [positronTVI]
});

mapsDiffVITemp.createPane('labels');
mapsDiffVITemp.getPane('labels').style.zIndex = 650;
mapsDiffVITemp.getPane('labels').style.pointerEvents = 'none';

var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
    attribution: '©OpenStreetMap, ©CartoDB',
    pane: 'labels'
}).addTo(mapsDiffVITemp);

var DiffTemp = L.tileLayer('./maps/DiffTemp/{z}/{x}/{y}.png', {
    tms: true, opacity: 1.0, attribution: "", minZoom: 3,
    maxZoom: 5,
}).addTo(mapsDiffVITemp);

var DiffVI = L.tileLayer('./maps/DiffVI/{z}/{x}/{y}.png', {
    tms: true, opacity: 1.0, attribution: "", minZoom: 3,
    maxZoom: 5,
}).addTo(mapsDiffVITemp);

L.control.sideBySide(DiffTemp, DiffVI).addTo(mapsDiffVITemp);
L.control.scale().addTo(mapsDiffVITemp);

var legendDiffVITemp = L.control({ position: 'topright' });

var diffVITempColors = [
    'darkred', 'darkblue', 'red', 'green'
]

legendDiffVITemp.onAdd = function (mapsDiffVITemp) {

    var div = L.DomUtil.create('div', 'legendDiffVI'),
        grades = ['Nárůst teploty', 'Pokles teploty', 'Nárůst veg. indexu', 'Pokles veg. indexu'],
        labels = [];
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + diffVITempColors[i] + '"></i> ' + grades[i] + '<br>';
    }

    return div;
};

legendDiffVITemp.addTo(mapsDiffVITemp);