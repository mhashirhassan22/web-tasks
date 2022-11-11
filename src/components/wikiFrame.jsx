import Table from 'react-bootstrap/Table';
import React, { Component } from 'react';

class WikiFrame extends Component{
  constructor(props){
    super(props);
    this.state = {
       customDiv: ['Image#0']     // set initial state with one div
    }
    this.addNewRow = this.addNewRow.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
  }

  addNewRow(i){
    let cDivs = [...this.state.customDiv];
    cDivs.push(`Image#${i}`)
    this.setState({customDiv: cDivs })
  }
  deleteRow(i){
    let cDivs = [...this.state.customDiv];
    var index = cDivs.indexOf(`${i}`);
    console.log(index);
    if (index !== -1) {
      cDivs.splice(index, 1);
    }
    this.setState({customDiv: cDivs })
  }
  render () {
    return (
      
      this.state.customDiv.map((cdiv, i) => (
          <div  key={i+1} id={i} data-block={i}>
            <div className='me-2 d-flex flex-column'>
            <iframe width="420" height="315"
                src="https://www.wikipedia.com/">
            </iframe>
                <button className='btn btn-primary mt-2' onClick={() => this.addNewRow(this.state.customDiv.length)}>Increment</button>
                <button className='btn btn-warning mt-2' onClick={() => this.deleteRow(`${cdiv}`)}>Decrement</button>
            </div>
            </div>
      ))


    );
  }
}

export default WikiFrame;