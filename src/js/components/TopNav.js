import React from "react";


export default class Footer extends React.Component {
  render() {
    return (
     <div class='row top_nav'>
     <div class='col-md-8 wrapper'>
     <span class='ic ic_list'/>
     <div class='lang_dropdown'>English</div>
     <div class='ic ic_search search'></div>
     </div>
     <div class='col-md-4 wrapper'>
     <span class='ic ic_bell'/>
     <span class='ic ic_mail'/>
     <span class='ic ic_notify'/>
     <span class='ic ic_profile'>Puffin WaHi</span>
     </div>
     </div>
    );
  }
}
