import Table from 'react-bootstrap/Table';
import React, { Component } from 'react';

class StaticTable extends Component{
  constructor(props){
    super(props);
    this.state = {
       customDiv: ['Reminder#0']     // set initial state with one div
    }
    this.addNewRow = this.addNewRow.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
  }

  addNewRow(i){
    let cDivs = [...this.state.customDiv];
    cDivs.push(`Reminder#${i}`)
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
          <div key={i+1} id={i} data-block={i}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>{cdiv}</th>
                  <th>Team 1</th>
                  <th>Team 2</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Pakistan</td>
                  <td>India</td>
                  <td>Ind lost 152-0</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>England</td>
                  <td>India</td>
                  <td>Ind lost 170-0</td>
                </tr>

              </tbody>
            </Table>      
            <button className='btn btn-primary' onClick={() => this.addNewRow(this.state.customDiv.length)}>Add Reminder</button>
            <button className='btn btn-warning m-3' onClick={() => this.deleteRow(`${cdiv}`)}>Remove {cdiv}</button>

            </div>
      ))


    );
  }
}

export default StaticTable;