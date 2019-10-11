import React from 'react';
import PropTypes from 'prop-types';

const withApiCall = (apiFunction)=>(WrappedComponent)=>{

  class withApiCallHOC extends React.Component{

    constructor(){
      super();
      this.state = {data:null};
      this.apiCall = this.apiCall.bind(this);
    }

    apiCall(...args){
      apiFunction(...args)
      .then(resp=>{
        console.log(resp)
        this.setState({data:resp.data});
      })
    }

    render(){
      return(
        <WrappedComponent
          {...this.props}
          apiCall={this.apiCall}
          data={this.state.data}/>
      );
    }
  }

  return (withApiCallHOC);
}

export default withApiCall;
