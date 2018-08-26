import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showBird } from '../actions';

class Profile extends Component {
    render(){
        console.log('Profile results: ',this.props.results);
        return(
            <div>{this.props.results.breed}</div>
        )
    }
}

function mapStateToProps({ results }){
    return {results};
}
export default connect(mapStateToProps, { showBird})(Profile);