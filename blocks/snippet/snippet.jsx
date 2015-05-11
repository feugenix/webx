var React = require('react');

var Snippet = React.createClass({
    render: function() {
        var snippetClassName = 'snippet';

        if (this.props.mod)
            snippetClassName += ' snippet' + this.props.mod;

        return (
            <div className={snippetClassName}>
                <a className="snippet__title" href={this.props.titleUrl || '#'}>{this.props.title}</a>
                <div className="snippet__content">
                    {this.props.text}
                </div>
                {this.props.customContent || ''}
            </div>
        );
    }
});

module.exports = Snippet;
