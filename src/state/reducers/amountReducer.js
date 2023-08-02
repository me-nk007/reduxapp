// amountReducer does not mean it will reduce amount but it will work as Shankar Doe which we saw in Harry's analogy i.e. it will play with the amount
 const reducer = (state=0, action)=>{        // reducer taking previous state and action
        if (action.type === "deposit"){
            return state + action.payload            // reducer is updating the state
        }
      else  if (action.type === "withdraw"){
            return state - action.payload 
        }
        else{
            return state;
        }
}
export default reducer
