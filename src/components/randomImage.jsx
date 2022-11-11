import Table from 'react-bootstrap/Table';
import React, { Component } from 'react';

class RandomImage extends Component{
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
            <div className='me-2 d-flex flex-column mb-5'>
                <img src="https://source.unsplash.com/random/330x330?sig=1" />
                <button className='btn btn-primary mt-2' onClick={() => this.addNewRow(this.state.customDiv.length)}>Add Image</button>
                <button className='btn btn-warning mt-2' onClick={() => this.deleteRow(`${cdiv}`)}>Remove {cdiv}</button>
            </div>
            </div>
      ))


    );
  }
}

export default RandomImage;