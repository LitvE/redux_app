import React from 'react';
import { connect } from 'react-redux';
//import ACTION_TYPES from '../../actions/actionsType';
import * as actionCreators from './../../actions';

function Counter(props) {
    //const {value, step , dispatch} = props;
    const {value, step, decAction, incAction, setStepAction } = props;

    // const dec = () => {
    //     const action = {type: ACTION_TYPES.DECREMENT};
    //     dispatch(action);
    // }

    // const dec = () => {
    //     dispatch(actionCreators.dec());
    // }

    // const inc = () => {
    //     const action = {type: ACTION_TYPES.INCREMENT};
    //     dispatch(action);
    // }

    // const inc = () => {
    //     dispatch(actionCreators.inc());
    // }

    // const setNewStep = e => {
    //     dispatch(actionCreators.setStep(Number(e.target.value)));
    //   };

    // const setNewStep = e => {
    //     const action = {
    //         type: ACTION_TYPES.SET_STEP,
    //         step: Number(e.target.value),
    //     }
    //     console.log(action.step)
    //     dispatch(action);
    // }

    const setStep = e => {
      setStepAction(Number(e.target.value));
    };

  //   return (
  //     <div>
  //         <h1>{value}</h1>
  //         <button onClick={dec}>-</button>
  //         <button onClick={inc}>+</button>
  //         <input type='number' value={step} onChange={setNewStep}/>
  //     </div>
  // )

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={decAction}>-</button>
            <button onClick={incAction}>+</button>
            <input type='text' value={step} onChange={setStep}/>
        </div>
    )
}

const mapStateToProps = (state) => state.counter;

const mapDispatchToProps = (dispatch) => {
    return {
      decAction: () => {
        dispatch(actionCreators.dec());
      },
      incAction: () => {
        dispatch(actionCreators.inc());
      },
      setStepAction: (newStep) => {
        dispatch(actionCreators.setStep(newStep));
      },
    };
  };

// const mapDispatchToProps = (dispatch) =>{

//     return {
//         dec: () => dispatch({type: ACTION_TYPES.DECREMENT}),
//         inc: () => dispatch({type: ACTION_TYPES.INCREMENT}),
//     };
// };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
//export default connect(mapStateToProps)(Counter);