import React, { Component } from 'react';
import classNames from 'classnames';
import Triples from "./Triples";

class Form extends Component {
  state = {
    num: {
      value: '',
      isValid: true,
      message: ''
    },
    formIsValid: true,
    numToRender: null
  };

  onChangeNum = (e) => {
    this.setState({ num: { value: e.target.value, isValid: true } });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.formIsValid) {
      this.setState( { numToRender: this.state.num.value } );
    } else {
      this.setState( { numToRender: null } );
    }
  };

  validateForm = () => {
    const num = { ...this.state.num };
    const n = parseInt(num.value);
    let formIsValid;

    if (
      !Number.isSafeInteger(n) ||
      n < 3 ||
      (
        n % 6 !== 3 &&
        n % 6 !== 1
      )
    ) {
      num.isValid = false;
      num.message = 'Not a valid number of schoolgirls';
    } else {
      num.isValid = true;
      num.message = '';
    }
    formIsValid = num.isValid;

    this.setState({ num, formIsValid });
  };

  render() {
    const { num } = this.state;

    const numClasses = classNames(
      'form-control',
      { 'is-invalid': !num.isValid }
    );


    return (
      <div>
        <form onSubmit={ this.onSubmit }>
          <fieldset>

            <div className="form-group">
              <label className="col-form-label" htmlFor="num">Number of participants:</label>
              <div className="row-cols-lg-3">
                <input
                  autoFocus
                  id="num"
                  type="number"
                  className={numClasses}
                  min="3"
                  step="2"
                  pattern="[0-9]*"
                  value={ num.value }
                  onChange={ this.onChangeNum }
                  onBlur={ this.validateForm }
                  placeholder="Try 7 or 15 or 3"
                />
              </div>
              <small>Enter an integer in the form <code>n*6-1±2</code>. E.g.: 3, 7, 9, 13, 15, 19, 21, etc.</small>
            </div>

            <button type="submit" className="btn btn-primary">Construct triples</button>

          </fieldset>
        </form>

        <Triples num={ this.state.numToRender } />

      </div>
    );
  }
}

export default Form;
