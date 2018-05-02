import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import TopDrawer from '../../components/Navigation/TopDrawer/TopDrawer';

class Layout extends Component {
    state = {
        showTopDraw: false
    }

    setActiveClassHandler = (event) => {
        let activeLinks = document.querySelectorAll('.navigationItems li a.active');
        if (activeLinks.length > 0) {
            activeLinks.forEach((activeLink) => {
                activeLink.className = "";
            })
        }

        event.target.className = 'active';

        this.topDrawCloseHandler();
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
                        open={this.topDrawOpenHandler}
                        setActiveClass={this.setActiveClassHandler} />
                    <TopDrawer 
                        open={this.state.showTopDraw}
                        setActiveClass={this.setActiveClassHandler} />
                </div>
                <main className="main">
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default withRouter(Layout);