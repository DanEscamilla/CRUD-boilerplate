import React from 'react';
import PropTypes from 'prop-types';

import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

const Row = (props)=>{
  let {content,attributes,...otherProps} = props;
  let cells = [];

  if (attributes){
    attributes.forEach(attribute=>{
      cells.push(<TableCell key={attribute}>{content[attribute]}</TableCell>)
    })
  } else {
    for (var key in content) {
      if (!content.hasOwnProperty(key)) continue;
      var obj = content[key];
      cells.push(<TableCell key={key}>{obj}</TableCell>)
    }
  }

  return (
    <TableRow hover {...otherProps}>
      {cells}
    </TableRow>
  )
}

Row.propTypes = {
  content: PropTypes.object.isRequired,
};


export default Row
