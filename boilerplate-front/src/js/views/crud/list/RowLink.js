import React from 'react';
// import PropTypes from 'prop-types';

import Row from '../../../components/dataVisualization/Row.js';
import { withRouter } from 'react-router-dom';

import config from '../config';
import urljoin from 'url-join';

const RowLink = (props)=>{

  const {history,location,match,staticContext,...otherProps} = props
  return (
    <Row {...otherProps} onClick={()=>{history.push(urljoin(config.route,props.content._id))}}/>
  )
}
export default withRouter(RowLink)
