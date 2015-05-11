var React = require('react'),
    JSX = require('node-jsx').install({ extension: '.jsx' }),
    SerpList = require('../serp-list/serp-list.jsx');

var Page = React.createClass({
    render: function() {
        var docs = this.props.data.docs,
            snippets = [],
            content;

        if (!docs || !docs.length)
            return;

        docs.forEach(function(doc) {
            if (doc.address)
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

        return (
            <body className="page">
                <SerpList snippets={snippets} />
            </body>
        );
    }
});

module.exports = Page;
