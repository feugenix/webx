var JSX = require('node-jsx').install({ extension: '.jsx' }),
    React = require('react'),
    Snippet = require('../snippet/snippet.jsx');

var GeoSnippet = React.createClass({
    render: function() {
        var props = this.props,
            data = {
                mod: '_type_geo',
                title: props.title,
                titleUrl: props.titleUrl,
                text: props.text,
                customContent: <div className="snippet__geo-info">{this.props.address}</div>
            };
        return (
            <Snippet {...data} />
        );
    }
});

module.exports = GeoSnippet;
