import React, {Component} from 'react';

class Header extends Component { 
	constructor(props){
		super(props);
		this.className = 'header';
		if (this.props.color){
			this.color = this.props.color;
		} 
		else {
			this.color = "black"
		}
	}

	render() {
		return <h1 className={this.className} style={{color: this.color}}> {this.props.children} </h1>; 
	};
}

export default Header;