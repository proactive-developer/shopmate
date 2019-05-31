import React, { Component } from 'react'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ButtonComp from './button'
import { decoratedImageUrl } from '../utils/request'
import theme from '../theme'
import PlusMinus from './plusMinus'
import Grid from '@material-ui/core/Grid';

const styles = {
  box: {
    width: '880px',
    minHeight: '552px',
    padding: '1rem',
  },
  title: {
    fontSize: '1rem'
  },
  justifyCol: {
    display: 'flex',
    flexDirection: 'column'
  },
  justifyRow: {
    display: 'flex',
    flexDirection: 'row'
  },
  holder: {
    minHeight: '189px',
    minWidth: '180px',
    marginBottom: '2rem',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
  },
  imgThumb: {
    maxWidth: '90px',
    maxHeight: '95px',
    marginRight: '1rem'
  },
  stars: {
    display: 'flex',
    width: 'fit-content'
  }
}
const Review = (props) => {
  const { classes, review, style } = props
  console.log('review');
  console.log(review);
  return (
    <Box       boxShadow={4}
          bgcolor='#FFFFFF'
          m={1}
          p={1}
          style={style}
          className={classes.justifyRow}>
      <div className={classes.justifyCol}>
        <div>
          <img style={{
                            background: `linear-gradient(to right, #FFC94F ${
                              ((review.rating) / 5) * 100
                            }%, #EEEEEE ${((review.rating) / 5) * 100}%)`
                          }} src='static/stars.png' alt='stars' />
        </div>
        <div>
          <Typography style={{fontSize:'1.3rem', marginTop:'1rem'}}>{review.name}</Typography>
        </div>
      </div>
      <div className={ classes.justifyCol} style={{justifyContent:'center'}}>
        <Typography style={{ margin:'0 0 0 10rem'}}>{review.review}</Typography>
      </div>
    </Box>
  )
}
class ProductReivews extends Component {
  state = {
    skip: 0
  }




  render() {
    const {
      classes,
      bgcolor,
      style,
      productDetails

    } = this.props

    return (
      <Box
        boxShadow={0}
        bgcolor={bgcolor ? bgcolor : '#FFFFFF'}
        m={0}
        p={1}
        style={style}
        className={classes.box}
      >
      <Grid container spacing={3} style={{display:'flex', justifyContent:'center', marginRight:'auto', marginLeft:'auto'}}>
      <Grid item xs={12}>
      <Typography style={{fontSize:'1.5rem'}}>
        Product Reviews
      </Typography>
      </Grid>
        {productDetails && productDetails.productReviews.map((review, i) => {
          if (i < 3) {
            return(      <Grid item xs={12}><Review style={{width:'60vw', marginRight:'auto', marginLeft:'auto'}} classes={classes} review={review} /></Grid>)
          }
        })}
        </Grid>
      </Box>
    )
  }
}

export default withStyles(styles)(ProductReivews)