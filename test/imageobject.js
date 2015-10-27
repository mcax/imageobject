var assert = require('assert');

var ImageObject = require('..');

describe('ImageObject', function() {

    it('should exist', function() {
        assert.ok(ImageObject);
    });

    it('should work with different input', function() {
        var img;

        var data = {
                url     : 'https://upload.wikimedia.org/wikipedia/commons/5/55/Chrysodeixis_eriosoma.jpg',
                caption : 'Chrysodeixis eriosoma'
            };

        img = new ImageObject(data);

        assert.deepEqual(img.serialize(), data);

        img = new ImageObject(data.url, { parse: true });

        assert.equal(img.url, data.url);
    });

});
