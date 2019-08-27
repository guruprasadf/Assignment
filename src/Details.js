import React from 'react';
import { connect } from 'react-redux';

class Details extends React.Component{
   
    componentDidMount (){
        document.documentElement.scrollTop = 0;
        this.props.getData(this.props.data.imdbID);
  }
    
    render(){
        return(
            <React.Fragment>
           
            <div className="details">
                <div className="img"></div>
                <div className='header'>
                <div className='title'><h2>{this.props.data.title}</h2></div>
                <div className='year'><h2>{this.props.data.year}</h2></div>
                <div className='rating'> <h2>{this.props.imdbRating}</h2></div>
                <div className='img'><img src={`/img/posters/${this.props.data.poster}`} width= "64%"></img></div>
                <div className='description'><p>{this.props.data.description}</p></div>

                </div>
                <div className='container'>
                <iframe src={`https://www.youtube-nocookie.com/embed/${this.props.data.trailer}?rel=0&amp;amp;controls=0&amp;amp;showinfo=0`} frameBorder="0" allowFullScreen=""></iframe>
                </div>
                </div>
                </React.Fragment>
        )
    }
}
const mapStateToProps = state => {
    return {
       data : state.selectedVideo,
       imdbRating : state.imdbRating
    };
};

const mapDispatchToProps = dispatch => ({
    getData: (data) => dispatch({ type: 'GET_DATA',payload:data}),  
});
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Details);