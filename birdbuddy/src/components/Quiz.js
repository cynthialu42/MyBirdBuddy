import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchBreed } from '../actions';

class Quiz extends Component {

    renderRadioButton(field){
        //console.log("field", field)
        return(
            <div>
                <label>{field.label}</label>
                <input type="radio" {...field.input}/>
            </div>
        )
    }
    onSubmit(values){
        console.log(values.breed);
        this.props.fetchBreed(values.breed,()=>{
            this.props.history.push(`/profile/${values.breed}`);
        });
    }
    render(){
        const {handleSubmit} = this.props;
        return(
            <div>
                <h1>Welcome to the Quiz</h1>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <fieldset>
                        <Field name="breed" label="Cockatiel" component = {this.renderRadioButton} type="radio" value="cockatiel"/>
                        <Field name="breed" label="Budgie" component = {this.renderRadioButton} type="radio" value="budgie"/>
                        <Field name="breed" label="Macaw" component = {this.renderRadioButton} type="radio" value="macaw"/>

                    </fieldset>

                    <div>
                        <button className="btn btn-info" type="submit">Submit</button>
                    </div>
            
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form:'Quiz'
})(
    connect(null, {fetchBreed})(Quiz)
);