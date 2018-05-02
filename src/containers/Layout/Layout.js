import React, { Component } from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import TopDrawer from '../../components/Navigation/TopDrawer/TopDrawer';

import * as Scroll from 'react-scroll';

class Layout extends Component {
    state = {
        showTopDraw: false
    }

    animateToAnchorHandler = (event) => {
        let anchor = event.target.innerHTML.toLowerCase();
        let res = anchor.replace(/\s+/g, '-');

        let scroller = Scroll.scroller;

        let activeLinks = document.querySelectorAll('.navigationItems li a.active');
        if (activeLinks.length > 0) {
            activeLinks.forEach((activeLink) => {
                activeLink.className = "";
            })
        }

        event.target.className = 'active';

        scroller.scrollTo(res, {
            smooth: true,
            duration: 500,
            onSetActive: this.topDrawCloseHandler()
        })
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
                        toAnchor={this.animateToAnchorHandler} />
                </div>
                <main className="main">
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;