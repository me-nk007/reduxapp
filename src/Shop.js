import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index'
import { useSelector } from 'react-redux';


const Shop = () => {
  const amount = useSelector(state => state.amount) 
  const dispatch = useDispatch()                        // useDispatch is a hook which is used to dispatch actions 
  const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);
  return (
    <div>
      <h2 className='my-3'>Deposit/Withdraw Money</h2>
      {/* <button className="btn btn-primary mx-2" onClick={
        ()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
      <strong>Update Balance</strong> */}
      {/* <button className="btn btn-primary mx-2" onClick={
        () => { dispatch(actionCreators.depositMoney(100)) }}>+</button> */}
      <button className="btn btn-primary mx-2" onClick={
        () => {withdrawMoney(100)}}>-</button>
      <strong>Update Balance({amount})</strong>
      <button className="btn btn-primary mx-2" onClick={
        () => {depositMoney(100)}}>+</button>
    </div>
  );
}

export default Shop;
