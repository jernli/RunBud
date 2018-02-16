import React, { Component } from 'react'
import {
	ScrollView,
	View,
	Text,
	StyleSheet,
	Dimensions
} from 'react-native'
import PageControlIOS from 'react-native-pagecontrol'
import ViewContainer from '../../components/ViewContainer'
import StatusbarBackground from '../../components/StatusbarBackground'
import Profile from '../Profile'
import Discover from '../Discover'

//const window = Dimensions.get('window')

export default class PageControl extends Component{
	constructor(props){
		super(props)

		this.state = {
			currentPage: 0,
			width: Dimensions.get('window').width
		}

		this._onPageControlValueChange = this._onPageControlValueChange.bind(this)
		this._onScroll = this._onScroll.bind(this)
	}

	//bind this.state if you want to access it
	_onPageControlValueChange(currentPage){
		this.refs.ScrollView.scrollResponderScrollTo({
			x: this.state.width * currentPage, y: 0, animated: true});
	}

	_onScroll({nativeEvent}){
		let currentPage = Math.round(nativeEvent.contentOffset.x / 
			nativeEvent.layoutMeasurement.width);

		if(this.state.currentPage !== currentPage){
			this.setState({currentPage});
		}
	}

	render(){
		return(
			<ViewContainer>
				<StatusbarBackground/>
				<View style={styles.container}>
					<View style={styles.scrollViewContainer}>
						<ScrollView 
							horizontal={true}
							ref='ScrollView'
							onScroll={this._onScroll}
							pagingEnabled={true}
							showsHorizontalScrollIndicator={false}
						>
							<View style={[styles.scrollScene, {width: this.state.width}]}>
								<Discover />
							</View>
							<View style={[styles.scrollScene, {width: this.state.width}]}>
								<Profile />
							</View>
						</ScrollView>
					</View>

					<View style={styles.pageControlContainer}>
						<PageControlIOS
							style={{position:'absolute', left:0, right:0, bottom:20}}
							currentPage={this.state.currentPage}
							numberOfPages={2}
							pageIndicatorTintColor='grey'
							currentPageIndicatorTintColor='black'
							onValueChange={this._onPageControlValueChange}
						/>
					</View>
				</View>
			</ViewContainer>
		)
	}
}

const styles = StyleSheet.create({
		
	container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  	},

	pageControlContainer:{
		alignItems:'center'
	},
	scrollViewContainer:{
		flex: 1
	},
	scrollScene:{
		//width: window.width,
		//backgroundColor:'grey'
	}
})