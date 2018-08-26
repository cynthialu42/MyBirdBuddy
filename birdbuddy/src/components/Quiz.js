import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Quiz extends Component {

    renderRadioButton(field){
        return(
            <div>
                <label>{field.label}</label>
                <input type="radio" {...field.input}/>
            </div>
        )
    }
    onSubmit(values){
        console.log(values);
    }
    render(){
        const {handleSubmit} = this.props;
        return(
            <div>
                <h1>Welcome to the Quiz</h1>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <fieldset>

                        {/* <div>
                            <input type="radio" id = "cockatiel" name = "breed" value="Cockatiel"/>
                            <label htmlFor="cockatiel">Cockatiel</label>
                        </div>
                        <div>
                            <input type="radio" id = "budgie" name = "breed" value="Budgie / Budgerigar"/>
                            <label htmlFor="budgie">Budgie</label>
                        </div> */}
                        <Field name="breed" label="Cockatiel" component = {this.renderRadioButton} type="radio" value="Cockatiel"/>
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
})(Quiz);