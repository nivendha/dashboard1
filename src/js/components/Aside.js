import React from "react";


export default class Footer extends React.Component {
  render() {
    return (
     <div class='aside'>
     	<div class='aside_head'/>
     	<div class='aside_body'>
	     	<ul class='ul_wrapper'>
	     		<h3>General</h3>
	     		<div><li class='ic active'>Dashboard<span class='pointer'/></li></div>
	     		<div><li class='ic'>Layouts<span class='pointer'/></li></div>
	     		<div><li class='ic'>Page<span class='pointer'/></li></div>
	     	</ul>
	     	<ul class='ul_wrapper'>
	     		<h3>Elements</h3>
	     		<div><li class='ic'>UI Elements<span class='pointer'/></li></div>
	     		<div><li class='ic'>Charts<span class='pointer'/></li></div>
	     		<div><li class='ic'>Structure<span class='pointer'/></li></div>
	     		<div><li class='ic'>Widgets<span class='pointer'/></li></div>
	     		<div><li class='ic'>Tables<span class='pointer'/></li></div>
	     		<div><li class='ic'>Form Stuff<span class='pointer'/></li></div>
	     	</ul>
	     	<ul class='ul_wrapper'>
	     		<h3>Extra</h3>
	     		<div><li class='ic'>Email<span class='tag'>4 Unread</span><span class='pointer'/></li></div>
	     		<div><li class='ic'>Layouts<span class='pointer'/></li></div>
	     		<div><li class='ic'>Page<span class='pointer'/></li></div>
	     	</ul>
     	</div>
     </div>
    );
  }
}
