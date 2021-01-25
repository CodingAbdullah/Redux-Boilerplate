import { Component } from 'react';
import './form.css';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import formAction from '../../Redux/action/formAction';

class Form extends Component {

    constructor(props){
        super(props);

        this.state = {
            numberSelected: 0,
            information: []
        }
    }

    formHandler = () => {

        // Action call goes here...

        this.props.formAction({number: this.state.numberSelected}); 
    }

    render = () => {
        let numbers = [];

        for (var i = 1; i <= 100; i++) {
            numbers.push(i);
        }

        let collection = (numbers.map(num => <option name={num}>{num}</option>));

        return (
            <div className="formSection">
                {this.state.information}
                <form className="form" onSubmit={this.formHandler}>
                    <div className="form-check">
                        <label>Selecting Post</label>
                        <select onClick={(e) => {this.setState({numberSelected: e.target.value})}} multiple class="form-control">
                            { collection } 
                        </select>
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        )
    }
}

Form.prototypes = {
    formAction: Proptypes.func.isRequired
}

export default connect(null, { formAction })(Form);