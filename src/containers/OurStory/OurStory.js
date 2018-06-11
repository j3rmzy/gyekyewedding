import React from 'react';

import Wrapper from '../../hoc/Wrapper/Wrapper';
import Carousel from '../../components/Carousel/Carousel';

import './OurStory.scss';

const ourStory = () => {
    return (
        <div className="wedding-party" id="wedding-party">
            <Wrapper>
                <div className="our-story-grid-container">
                    <div className="our-story-main">
                        <div className="our-story-image-grid">
                            <div className="our-story-images">
                                <Carousel />
                            </div>
                        </div>
                        <div className="our-story-grid">
                            <div className="wedding-party">
                            <h2>Wedding Party</h2>
                                <div className="wedding-party-parents">
                                    <h3>Parents</h3>
                                    <div className="wedding-party-list">
                                        <div className="wedding-party-item">
                                            <ul>
                                                <li>Andy Cook</li>
                                                <li>Barbara Cook</li>
                                            </ul>
                                        </div>
                                        <div className="wedding-party-item">
                                            <ul>
                                                <li>Anthony Gyekye</li>
                                                <li>Yaa Gyekye</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="wedding-party-list">
                                    <div className="wedding-party-item">
                                        <h3>Bridesmaids</h3>
                                        <ul>
                                            <li>Emily Zishiri <span>Chief Bridesmaid</span></li>
                                            <li>Caprice Fox</li>
                                            <li>Alison Tootell</li>
                                            <li>Kelly Byron</li>
                                            <li>Jessica Dawkins</li>
                                            <li>Natalie Gyekye</li>
                                            <li>Antonia Gyekye</li>
                                        </ul>
                                    </div>
                                    <div className="wedding-party-item">
                                        <h3>Groomsmen</h3>
                                        <ul>
                                            <li>Michael Glaze <span>Best Man</span></li>
                                            <li>Peter Luhanga</li>
                                            <li>Tyrone Nestor</li>
                                            <li>Rodney Coleman</li>
                                            <li>James Cook</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="wedding-party-witness">
                                    <h3>Witnesses</h3>
                                    <div className="wedding-party-list">
                                        <div className="wedding-party-item">
                                            <ul>
                                                <li>Elaine Escott</li>
                                            </ul>
                                        </div>
                                        <div className="wedding-party-item">
                                            <ul>
                                                <li>Ebrahim Ali</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default ourStory;