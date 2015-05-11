var React = require('react');

var Snippet = React.createClass({
    render: function() {
        return (
            <div class="snippet">
                <a class="snippet__title" href={this.props.titleUrl || '#'}>{this.props.title}</a>
                <div>
                    {this.props.snippetContent}
                </div>
                {this.props.customContent || ''}
            </div>
        );
    }
});

module.exports = Snippet;
