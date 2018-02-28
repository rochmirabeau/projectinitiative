import React, { Component } from 'react';
import { render } from 'react-dom';
class Hello extends Component {
    render() {
        return(
            <a href="/api/clickable"> Hey </a>
        );
    }
}

// render(<a href="/clickable"> Hey </a>, document.getElementById('app'));
