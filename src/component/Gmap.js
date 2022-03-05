import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';



export class Gmap extends Component {

  
 


  render() {
    return (


      <div >
        <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=tunisia&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
      </div>


    )
  }
}

export default Gmap
