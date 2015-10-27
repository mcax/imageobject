/**
 * Require dependencies
 */

var Thing = require('mcax-thing');

/**
 * Declare
 */

var ImageObject,
    ImageObjectModel;


/**
 * Extend Thing
 */

ImageObject = Thing.extend({
    props: {
        caption     : 'string',
        exifData    : 'string',
        //
        width       : 'number',
        height      : 'number',
        //
        representativeOfPage : 'boolean',
        //
        uploadDate  : 'date',
        contentSize : 'number'
    },
    parse: function (attrs) {
        if (typeof attrs != 'string')
            return attrs;

        return {
            url: attrs
        };
    }
});


/**
 * Extend ImageObject
 */

ImageObjectModel = ImageObject.extend({
    children:   {
        thumbnail   : ImageObject
    },
    serialize: function () {
        var attrs = this.getAttributes({ props: true });

        if (this.thumbnail.url)
            attrs.thumbnail = this.thumbnail.getAttributes({ props: true });

        return attrs;
    }
});


/**
 * Expose `ImageObjectModel`
 */

module.exports = ImageObjectModel;

