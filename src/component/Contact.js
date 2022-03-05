import React, { Component } from 'react'
import "./contactCss.css"
import SectionTitle from './SectionTitle'
import Gmap from './Gmap';


class ContactOne extends Component {
    render() {
        return (
            <section className="contact-us-wrap section-padding" id="contact">
                <div className="contact-shape-wrap">
                    <img src={require ("../assests/1.png") } className="shape shape1" alt="" />
                    <img src={require ("../assests/2.png") } className="shape shape2" alt="" />
                    <img src={require ("../assests/3.png") } className="shape shape3" alt="" />
                    <img src={require ("../assests/4.png") } className="shape shape4" alt="" />
                    <img src={require ("../assests/5.png") } className="shape shape5" alt="" />
                    <img src={require ("../assests/6.png") } className="shape shape6" alt="" />
                    <img src={require ("../assests/7.png") } className="shape shape7" alt="" />
                    <img src={require ("../assests/8.png") } className="shape shape8" alt="" />
                    <img src={require ("../assests/1.png") } className="shape shape9" alt="" />
                    <img src={require ("../assests/2.png") } className="shape shape10"  alt="" />
                    <img src={require ("../assests/3.png") } className="shape shape11"  alt="" />
                    <img src={require ("../assests/4.png") } className="shape shape12"  alt="" />
                    <img src={require ("../assests/5.png") } className="shape shape13"  alt="" />
                    <img src={require ("../assests/6.png") } className="shape shape14"  alt="" />
                    <img src={require ("../assests/7.png") } className="shape shape15"  alt="" />
                    <img src={require ("../assests/8.png") } className="shape shape16"  alt="" />
                </div>
                <div className="container">
                <SectionTitle Title="Nous contacter" />  

                <div className="row" id="contact">
                    <div className="col-md-12 col-lg-6 col-12">
                        <div className="form-wrap">
                            <form action=".#" className="row" id="contact-form" method="POST">
                                <div className="col-12">
                                    <div className="single-input">
                                        <input type="text" id="fname" name="fullname" placeholder="Nom et prénom" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="single-input">
                                        <input type="text" id="email" name="email" placeholder="email" />
                                    </div>
                                    <div className="single-input">
                                        <input type="text" id="subject" name="subject" placeholder="Sujet" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="single-input">
                                        <textarea name="message" id="message" placeholder="message" defaultValue={ ""} />
                                    </div>
                                </div>
                                <div className="col-12 col-lg-12 mt-40">
                                    <button type="submit" className="theme-btn f3">soumettre</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-5 offset-lg-1 col-12 get-contact text-white">
                        <h4>Obtenez une réponse instantanée</h4>
                        <div className="row">
                            <div className="single-contact-info col-sm-6 col-12">
                                <div className="contact-icon">
                                    <i className="far fa-envelope-open-text" />
                                </div>
                                <div className="contact-info">
                                    <p>kamoula706@gmail.com</p>
                                </div>
                            </div> {/* /.single-contact-info */}
                            <div className="single-contact-info col-sm-6 col-12">
                                <div className="contact-icon">
                                    <i className='fal fa-phone'></i>
                                </div>
                                <div className="contact-info">
                                    <p>(216) 92 090 845</p>
                                </div>
                            </div> {/* /.single-contact-info */}
                        </div>
                        <div className="google-map mt-20">
                            <div id="map">
                                <Gmap/>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        )
    }
}

export default ContactOne
