
(function (MapCSS) {
    'use strict';

    function restyle(style, tags, zoom, type, selector) {
        var s_default = {}, s_rights = {};

        if ((selector == 'canvas')) {
            s_default['fill-color'] = 'lightblue';
        }

        if (((selector == 'area' && tags['natural'] == 'land'))) {
            s_default['fill-color'] = '#f2efe9';
            s_default['z-index'] = 0;
        }


        if (((selector == 'line' && (tags.hasOwnProperty('contour'))))) {
            s_default['color'] = '#fb9b67';
            s_default['width'] = 0.5;
            s_default['z-index'] = 1;
            s_default['text'] = MapCSS.e_localize(tags, 'contour');
            s_default['text-color'] = '#fb9b67';
            s_default['font-family'] = 'helvetica';
            s_default['font-size'] = '8';
        }

        if (((selector == 'area' && tags['natural'] == 'wood')) || ((selector == 'area' && tags['landuse'] == 'forest'))) {
            s_default['fill-color'] = '#c0ffc0';
            s_default['z-index'] = 1;
        }

        if (((selector == 'area' && tags['natural'] == 'water')) || ((selector == 'area' && tags['landuse'] == 'reservoir'))) {
            s_default['fill-color'] = 'lightblue';
            s_default['z-index'] = 2;
        }

        if (((selector == 'area' && tags['natural'] == 'heath'))) {
            s_default['fill-color'] = '#ffffc0';
            s_default['z-index'] = 1;
        }

        if (((selector == 'area' && tags['natural'] == 'moor'))) {
            s_default['fill-color'] = '#ffc0ff';
            s_default['z-index'] = 1;
        }

        if (((selector == 'line' && tags['waterway'] == 'river'))) {
            s_default['color'] = 'lightblue';
            s_default['width'] = 2;
            s_default['z-index'] = 2;
        }

        if (((selector == 'line' && tags['waterway'] == 'stream'))) {
            s_default['color'] = 'lightblue';
            s_default['width'] = 1;
            s_default['z-index'] = 2;
        }

        if (!K.Utils.isEmpty(s_default)) {
            style['default'] = s_default;
        }
        if (!K.Utils.isEmpty(s_rights)) {
            style['rights'] = s_rights;
        }
        return style;
    }

    var sprite_images = {
    }, external_images = [], presence_tags = [], value_tags = ['highway', 'railway', 'amenity', 'contour', 'man_made', 'waterway', 'name', 'natural', 'landuse', 'place', 'foot', 'designation', 'bridge'];

    MapCSS.loadStyle('style', restyle, sprite_images, external_images, presence_tags, value_tags);
    MapCSS.preloadExternalImages('style');
})(MapCSS);
