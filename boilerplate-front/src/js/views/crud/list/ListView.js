import React from 'react';

import ListHeader from './ListHeader.js';
import Table from './Table.js';
import withApiCall from '../../../components/withApiCall.js';
import {apiList} from '../../../vanilla/apiInterface.js';

import config from '../config.js';

const ListView = (props)=>{
  return(
    <div>
      <ListHeader title={config.name} loadData={props.apiCall.bind(null,config.endpoint)}/>
      <Table data={props.data} loadData={props.apiCall.bind(null,config.endpoint)}/>
    </div>
  );
}

export default  withApiCall(apiList)(ListView);
