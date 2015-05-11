var React = require('react'),
    JSX = require('node-jsx').install({ extension: '.jsx' }),
    Snippet = require('../snippet/snippet.jsx'),
    GeoSnippet = require('../geo-snippet/geo-snippet.jsx');

var SerpList = React.createClass({
    render: function() {
        var snippets = this.props.snippets;

        return (
            <div>
                {
                    snippets.map(function(snippet) {
                        switch (snippet.type) {
                            case 'geo':
                                return <GeoSnippet {...snippet.doc} />
                            break;

                            default:
                                return <Snippet {...snippet.doc} />
                        }
                    })
                }
            </div>
        );
    }
});
