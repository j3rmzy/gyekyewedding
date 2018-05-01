import React, { Component } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
    render () {
        return (
            <div class="site-wrapper">
                <div>
                    <Toolbar />
                </div>
                <main className="main">
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;