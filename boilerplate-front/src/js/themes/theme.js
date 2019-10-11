import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
   palette: {
     // type:'dark',
     background:{
       // 'default': '#2A2E41',
       // 'paper': '#30304A',
       // 'paperHighlight': '#343352'
     },
     primary: {
       'main' : '#1C1E20',
       'contrastText' : '#FFFFFF'
     }
   },
  // typography:{
  //   useNextVariants: true
  // }
});
console.log(theme);
export default theme;
