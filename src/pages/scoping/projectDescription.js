import React, { Component } from 'react';
import '../../App.css';
import { connect } from 'react-redux'
import RichEditor from '../../richEditor/richEditor.js'
import '../../richEditor/richEditor.css';

class ProjectDescription extends Component {

  render() {
    return (
      <div className='formContainer description card' >
          <RichEditor editMode={true} data={this.props.projectDescription} save={'PROJECT_DESCREPTION'}/>
      </div>
    );

  }
}
export default connect(store => store)(ProjectDescription);