var React = require('react'),
    JSX = require('node-jsx').install({ extension: '.jsx' }),
    Snippet = require('../snippet/snippet.jsx'),
    GeoSnippet = require('../geo-snippet/geo-snippet.jsx');

function main(data) {
    var docs = data.docs,
        snippets = '';

    if (!docs || !docs.length)
        return;

    docs.forEach(function(doc) {
        if (docs.address)
            snippets.push({
                type: 'geo',
                doc: doc
            });
        else
            snippets.push({
                type: 'general',
                doc: doc
            })
    });

    return React.renderToString(<SerpList snippets={snippets} />);
};

module.exports = main;
