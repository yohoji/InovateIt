import React, { Component } from 'react'

class SectionTitle extends Component {
    render() {
        var {Title, Titlep} = this.props;
        return (
            <div className="row">
                <div className="col-lg-8 col-md-10 col-12 offset-lg-2 offset-md-1">
                    <div className="section-title text-center">
                        <span />
                        <h2>{Title}</h2>
                        <p>{Titlep}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SectionTitle
