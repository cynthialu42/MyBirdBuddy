import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showBird } from '../actions';
import data from '../BirdProfileData';

class Profile extends Component {
    
    render(){
        var url = window.location.pathname;
        var splitUrl = url.split('/');
        var searchTerm = splitUrl.pop();

        console.log('Profile results: ',this.props.results);
        console.log(data[searchTerm].description);
        return(
            <div>
                <div>{searchTerm}</div>
                <div>Description: {data[searchTerm].description}</div>
                <img src = {data[searchTerm].image} width="100"/>
            </div>
        )
    }
}

function mapStateToProps({ results }){
    return {results};
}
export default connect(mapStateToProps, { showBird})(Profile);