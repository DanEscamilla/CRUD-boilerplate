import React from 'react';

import FormDisplay from '../../../components/dataVisualization/FormDisplay.js';
import ShowHeader from './ShowHeader.js';
import {apiShow} from '../../../vanilla/apiInterface.js';
import withApiCall from '../../../components/withApiCall.js';

import config from '../config.js';


class ShowView extends React.Component{

  componentDidMount(){
    const id=this.props.match.params.id;
    this.props.apiCall(config.endpoint,id)
  }

  render(){
    const id=this.props.match.params.id;
    return(
      <div>
        <ShowHeader data={this.props.data} onUpdated={this.props.apiCall.bind(null,config.endpoint,id)}/>
        <FormDisplay visible={config.showFields} form={this.props.data||{}} schema={config.schema}/>
      </div>
    );
  }
}

export default withApiCall(apiShow)(ShowView);
