import React from 'react'
import PropTypes from 'prop-types'

import {compose,withHandlers} from 'recompose'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'
import {withStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import IconButton from '@material-ui/core/IconButton'
import CircularProgress from '@material-ui/core/CircularProgress'
import CenterView from '../layout/CenterItem.js'
import Row from './Row.js';

const styles1 = theme =>{
  return({
    root: {
      flexShrink: 0,
      color: theme.palette.text.secondary,
      marginLeft: theme.spacing(2.5),
    },
  })
};


const styles = theme =>{
  return ({
    root: {
      width: '100%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  })
}

const TablePaginationActions = (props)=>{
  const { count, page, rowsPerPage,classes } = props;
  return (
    <div className={classes.root}>
      <IconButton
        onClick={props.handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="First Page"
      >
        <FirstPageIcon />
      </IconButton>
      <IconButton onClick={props.handleBackButtonClick} disabled={page === 0} aria-label="Previous Page">
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={props.handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="Next Page"
      >
         <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={props.handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="Last Page"
      >
         <LastPageIcon />
      </IconButton>
    </div>
  );
}

const handlers = withHandlers({
  handleFirstPageButtonClick: props => (event)=>{
    props.onChangePage(event, 0);
  },

  handleBackButtonClick: props => (event)=>{
    props.onChangePage(event, props.page - 1);
  },

  handleNextButtonClick: props => (event)=>{
    props.onChangePage(event, props.page + 1);
  },

  handleLastPageButtonClick: props => (event)=>{
    props.onChangePage(event, Math.max(0, Math.ceil(props.count / props.rowsPerPage) - 1));
  },
})

const enhancePagination = compose (
  handlers,
  withStyles(styles1)
);


const EnhancedTablePaginationActions = enhancePagination(TablePaginationActions);

class PaginatedTable extends React.Component{

  constructor(props){
    super(props);

    this.state={
      page:0,
      rowsPerPage:10,
    }

    this.handleChangePage = this.handleChangePage.bind(this)
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this)
  }

  componentDidMount(){
    if (this.props.loadData)
      this.props.loadData();
  }

  handleChangePage(event, newPage) {
    // eslint-disable-next-line
    this.state.page = newPage;
    this.setState(this.state)
  }

  handleChangeRowsPerPage(event) {
    // eslint-disable-next-line
    this.state.rowsPerPage = parseInt(event.target.value, 10)
    this.setState(this.state)
  }


  render(){
    if (!this.props.values){
      return <CenterView><CircularProgress color="secondary"/></CenterView>
    }

    const RowComponent = this.props.CustomRowComponent || Row;

    const {values,attributes,schema,classes} = this.props;
    const {page,rowsPerPage} = this.state;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {attributes.map((attribute,index)=>{
                return (<TableCell key={index}>{(schema&&schema[attribute])?schema[attribute]:attribute}</TableCell>)
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {values.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((content,index) => (
                <RowComponent
                  key={index}
                  content={content}
                  attributes={attributes}/>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                colSpan={3}
                count={values.length}
                rowsPerPage={this.state.rowsPerPage}
                page={this.state.page}
                SelectProps={{
                  native: true,
                }}
                onChangePage={this.handleChangePage}
                onChangeRowsPerPage={this.handleChangeRowsPerPage}
                labelRowsPerPage="Filas por pagina"
                ActionsComponent={EnhancedTablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </Paper>
    )
  }
}

PaginatedTable.propTypes = {
  attributes: PropTypes.array.isRequired,
  schema: PropTypes.object,
  loadData: PropTypes.func,
  value: PropTypes.array
}

const enhance = compose (
  withStyles(styles)
);


export default enhance(PaginatedTable)
