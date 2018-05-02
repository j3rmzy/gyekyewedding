import React, { Component } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import TopDrawer from '../../components/Navigation/TopDrawer/TopDrawer';

class Layout extends Component {
    state = {
        showTopDraw: false
    }

    topDrawCloseHandler = (event) => {
        this.setState({
            showTopDraw: false
        })
    }

    topDrawOpenHandler = () => {
        this.setState((prevState) => {
            return {
                showTopDraw: !prevState.showTopDraw
            }
        })
    }

    signOutHandler = () => {

    }


    render () {
        return (
            <div className="site-wrapper">
                <div>
                    <Toolbar 
                        open={this.topDrawOpenHandler} />
                    <TopDrawer 
                        open={this.state.showTopDraw}
                        closed={this.topDrawCloseHandler} />
                </div>
                <main className="main">
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;