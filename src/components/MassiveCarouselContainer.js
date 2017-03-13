import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as massivecarouselActions from '../actions/massivecarousel-actions';
import Slide from './Slide.js';

class MassiveCarouselContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			currentIndex: 0
		};
	}
	componentWillMount() {
		this.props.actions.fetchData();
	}
	slideSelected(event) {
		this.props.actions.slideSelected(parseInt(event.target.getAttribute('value')));
	}
	
	render() {
		const { data, currentIndex } = this.props;
		
		const listItems = data.map((item, index) => {
			let active = currentIndex === index;
			console.log('current index ' + currentIndex);
			console.log('index ' + index);
			console.log(currentIndex === index);
			return (
				<li key={index} className={(active ? 'current' : '')}>
					<Slide {...item} />
				</li>
			);
		})
		const navigation = data.map((item, index) => {
			let active = currentIndex === index;
			return (
				<a key={index} className={(active ? 'current' : '')} href="#" value={index} onClick={this.slideSelected.bind(this)}>
					{index + 1}
				</a>
			);
		})
		return (
			<div className="massive-carousel-container">
				<ul className="carousel">
					{
						listItems
					}
				</ul>
				<div className="navigation">{navigation}</div>
			</div>
		);
	}
}

MassiveCarouselContainer.propTypes = {
	data: PropTypes.array.isRequired,
};

function mapStateToProps(state, props) {
	return {
		data: state.massivecarousel.data,
		currentIndex: state.massivecarousel.currentIndex
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(massivecarouselActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MassiveCarouselContainer);
