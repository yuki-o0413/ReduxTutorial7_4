import { connect } from 'react-redux';
import * as actions from '../actions';
import App from '../App';

// const mapStateToProps = state => {
//     const  {test} = state;
//     return {test}
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         didMnt: (test) => dispatch(actions.didMnt(test)),

//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(App)
const mapStateToProps = state => {
    const  {register} = state;
    return {register}
}
const mapDispatchToProps = dispatch => {
    return {
        updateFormId: (id) => dispatch(actions.updateFormId(id)),
        updateFormName: (name) => dispatch(actions.updateFormName(name)),
        didMnt: (id,name) => dispatch(actions.didMnt(id,name)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)