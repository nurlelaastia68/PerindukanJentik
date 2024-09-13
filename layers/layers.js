var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_rtrw_2 = new ol.format.GeoJSON();
var features_rtrw_2 = format_rtrw_2.readFeatures(json_rtrw_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rtrw_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rtrw_2.addFeatures(features_rtrw_2);
var lyr_rtrw_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rtrw_2, 
                style: style_rtrw_2,
                popuplayertitle: "rt rw",
                interactive: true,
                title: '<img src="styles/legend/rtrw_2.png" /> rt rw'
            });
var format_VEKTORRTRW_3 = new ol.format.GeoJSON();
var features_VEKTORRTRW_3 = format_VEKTORRTRW_3.readFeatures(json_VEKTORRTRW_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VEKTORRTRW_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VEKTORRTRW_3.addFeatures(features_VEKTORRTRW_3);
var lyr_VEKTORRTRW_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VEKTORRTRW_3, 
                style: style_VEKTORRTRW_3,
                popuplayertitle: "VEKTOR RT RW",
                interactive: true,
                title: '<img src="styles/legend/VEKTORRTRW_3.png" /> VEKTOR RT RW'
            });
var format_Buffered_4 = new ol.format.GeoJSON();
var features_Buffered_4 = format_Buffered_4.readFeatures(json_Buffered_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_4.addFeatures(features_Buffered_4);
var lyr_Buffered_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_4, 
                style: style_Buffered_4,
                popuplayertitle: "Buffered",
                interactive: true,
                title: '<img src="styles/legend/Buffered_4.png" /> Buffered'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_rtrw_2.setVisible(true);lyr_VEKTORRTRW_3.setVisible(true);lyr_Buffered_4.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_OpenStreetMap_1,lyr_rtrw_2,lyr_VEKTORRTRW_3,lyr_Buffered_4];
lyr_rtrw_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_VEKTORRTRW_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Buffered_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_rtrw_2.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_VEKTORRTRW_3.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Buffered_4.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_rtrw_2.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_VEKTORRTRW_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Buffered_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Buffered_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});