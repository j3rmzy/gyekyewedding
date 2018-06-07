import React from 'react';

import Wrapper from '../../hoc/Wrapper/Wrapper';
import Carousel from '../../components/Carousel/Carousel';

import './OurStory.scss';

const ourStory = () => {
    return (
        <div className="our-story" id="our-story">
            <Wrapper>
                <div className="our-story-grid-container">
                    <div className="our-story-header">
                        <h2>Our Story</h2> 
                    </div>
                    <div className="our-story-main">
                        <div className="our-story-image-grid">
                            <div className="our-story-images">
                                <Carousel />
                            </div>
                        </div>
                        <div className="our-story-grid">
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                            <div className="wedding-party">
                                <h3>Wedding Party</h3>
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