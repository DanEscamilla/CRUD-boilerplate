import React from 'react'

import PaginatedTable from '../../../components/dataVisualization/PaginatedTable.js';
import RowLink from './RowLink.js'

import config from '../config.js'

const PatientsTable = (props)=>{
  return (
    <PaginatedTable
      values={props.data}
      attributes={config.listFields}
      schema={config.schema}
      loadData={props.loadData}
      CustomRowComponent={RowLink}/>
  );
}

export default (PatientsTable)
