var React = require('react'),
    JSX = require('node-jsx').install({ extension: '.jsx' }),
    Snippet = require('../snippet/snippet.jsx'),
    GeoSnippet = require('../geo-snippet/geo-snippet.jsx');

var SerpList = React.createClass({
    render: function() {
        var snippets = this.props.snippets || [];

        return (
            <div className="serp-list">
                {
                    snippets.map(function(snippet, index) {
                        switch (snippet.type) {
                            case 'geo':
                                return <GeoSnippet {...snippet.doc} key={index} />
                            break;

                            default:
                                return <Snippet {...snippet.doc} key={index} />
                        }
                    })
                }
            </div>
        );
    }
});

module.exports = SerpList;
