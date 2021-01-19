import { Component } from 'react';
import './form.css';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';

class Form extends Component {

    constructor(props){
        super(props);

        this.state = {
            numberSelected: 0
        }
    }

    formHandler = () => {
        
    }

    render = () => {
        let numbers = [];

        for (var i = 1; i <= 100; i++) {
            numbers.push(i);
        }

        let collection = (numbers.map(num => <option name={num}>{num}</option>));

        return (
            <div className="formSection">
                <form className="form" onSubmit={this.formHandler}>
                    <div className="form-check">
                        <label>Selecting Post</label>
                        <select onClick={(e) => {this.setState({numberSelected: e.target.value})}} multiple class="form-control">
                            { collection } 
                        </select>
                    </div>
                    <button type="submit" class="btn btn-success">Submit</button>
                </form>
            </div>
        )
    }
}

Form.prototypes = {

}
export default connect(null, {})(Form);