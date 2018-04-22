import { connect } from 'react-redux';
import Sandbox from './pure';

const mapStateToProps = (state, ownProps) => ({
  brushSize: state.canvas.brush,
  brushColor: state.canvas.color
})

const mapDispatchToProps = (dispatch) => ({
  handleSetColor: color => dispatch({type: 'SET_COLOR', color: color}),
  handleSetBrush: size => dispatch({type: 'SET_BRUSH', brush: size})
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sandbox);
