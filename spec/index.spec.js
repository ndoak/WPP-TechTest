
const fetchData = require('../index.js');
const fetchMock = require('node-fetch');
const testData = require('./index.spec.json');

describe('Request media from endpoint with valid mediaId', function() {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    })
    it('should return details for media with specific mediaId', function() {
        var body = testData;
        var url = 'https://www.cbc.ca/bistro/order?mediaId=1630723954';
        fetchMock.getOnce(url, { body, headers: { 'content-type': 'application/json' } });
        const promise = fetchData();
        return expect(promise).resolves.toEqual(body)
    });
  });