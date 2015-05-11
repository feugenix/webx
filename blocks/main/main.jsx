var React = require('react'),
    JSX = require('node-jsx').install({ extension: '.jsx' }),
    Page = require('../page/page.jsx');

function main(data) {
    return [
        '<!DOCTYPE html><html><head><title>Webx</title>',
        '<style>',
        '.page { padding: 20px; padding-left: 120px; }',
        '.snippet { margin-bottom: 25px; }',
        '.snippet__geo-info { margin-top: 5px; }',
        '.serp-list { width: 550px; }',
        '</style></head>',
        React.renderToString(<Page data={data} />),
        '</html>'
    ].join('');
};

module.exports = main;
