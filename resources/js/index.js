import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import App component
import Light from './components/Light'
import LightGallery from './components/LightGallery'

// change the getElementId from example to app
// render App component instead of Example
if (document.getElementById('root')) {
    ReactDOM.render(<LightGallery />, document.getElementById('root'));
}
