import React from 'react';
import  MovieCard from './MovieCard';
import data from './Assets/data.json';
import Details from './Details'
class VideoGrid extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            initialItems: data.shows,
            items: data.shows ,
			upperList : data.shows,
			lowerList : []
        }
    }
    filterList = (event) =>{
        let updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function(item){
          return item.title.toLowerCase().search(
            event.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: updatedList});
    }
	
	handleEvent = (index) =>{
		
		let parentWidth = document.getElementsByClassName("movie-grid")[0].offsetWidth;
		let childWidth = document.getElementsByClassName("movie-card")[0].offsetWidth + 20;
		let c = parseInt(parentWidth/childWidth);
		let upperList = this.state.upperList;
		let lowerList = this.state.lowerList;
		let splitAt = parseInt(index/c);
		upperList = this.state.initialItems.slice(0,(splitAt*c));
		lowerList = this.state.initialItems.slice((splitAt*c),this.state.initialItems.length);
		this.setState({
			upperList,
			lowerList
		})
	}
	
    render() { 
        return (
            <div className="app-container"> 
              <div className="topnav">
                <a href="">Svideo</a>
                <input type="text" placeholder="Search.." onChange={this.filterList}/>
              </div>
                { this.state.upperList.length > 0 &&
                <div className="movie-grid">
                    <div className="img"></div>
                    {this.state.upperList.map((data,i)=>{
                        return <MovieCard key ={i} data={data} {...this.props} index ={i} handleEvent={this.handleEvent} />
                    })}
                </div>}
				<Details />
				 { this.state.lowerList.length > 0 &&
                <div className="movie-grid">
                    <div className="img"></div>
                    {this.state.lowerList.map((data,i)=>{
                        return <MovieCard key ={i} data={data} {...this.props} index ={i+this.state.upperList.length} handleEvent={this.handleEvent} />
                    })}
                </div>}
					
              
            </div>
        )
    }
}

export default VideoGrid;