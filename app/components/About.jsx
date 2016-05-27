var React = require('react');

var About = React.createClass({
  render: function(){
    return (
      <div>
        <h1 className='text-center page-title'>About</h1>
        <p>This is an app to search for the current weather in your city using React.js.</p>
      </div>

    )
  }
})

module.exports = About;
