import React from 'react';
import { connect } from 'react-redux';

class MovieCard extends React.Component{
    assetClick  = (event) =>{
        //  this.props.setData(this.props.data);
         // this.props.history.push('/details');
		 console.log(this.props.index)
		 this.props.handleEvent(this.props.index);
    }
    render(){
        return(
            <div className="movie-card" onClick={this.assetClick}>
                <div className="image-container">
                    { <img src={`/img/posters/${this.props.data.poster}`} height="100%" width="100%" alt="Image" /> }
                </div>
                <div className="description">
                    <h4> {this.props.data.title} </h4>
                    <h6>{this.props.data.year}</h6>
                    <p>
                    {this.props.data.description}
                    </p>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    setData: (data) => {dispatch({ type: 'SET_DATA',payload:data})},  
});
export default connect(
    null,
    mapDispatchToProps,
)(MovieCard);