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
	}

	_onPageControlValueChange(){

	}

	_onScroll(){

	}

	render(){
		return(
			<ViewContainer>
				<StatusbarBackground/>

				<View style={styles.scrollViewContainer}>
					<ScrollView 
						horizontal={true}
						ref='ScrollView'
						onScroll={this._onScroll}
					>
						<View style={[styles.scrollScene, {width: this.state.width}]}>
							<Discover />
						</View>
						<View style={[styles.scrollScene, {width: this.state.width}]}>
							<Profile />
						</View>
					</ScrollView>
				</View>

				<View style={styles.pageControl}>
					<PageControlIOS
						style={{position:'relative', left:0, right:0, bottom:10}}
						currentPage={this.state.currentPage}
						numberOfPages={2}
						pageIndicatorTintColor='grey'
						currentPageIndicatorTintColor='black'
						onValueChange={this._onPageControlValueChange}
					/>
				</View>
			</ViewContainer>
		)
	}
}

const styles = StyleSheet.create({
	pageControl:{

	},
	scrollViewContainer:{
		flex: 1
	},
	scrollScene:{
		//width: window.width,
		//backgroundColor:'red'
	}
})