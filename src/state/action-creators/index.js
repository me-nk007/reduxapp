// Here we shall see the work of Action creator
export const depositMoney = (amount)=>{
    // dispatch is a function
    return (dispatch)=>{
        dispatch({                         // Calling dispatch function
            type: "deposit",
            payload: amount
        });
    }
}
export const withdrawMoney = (amount)=>{
    return (dispatch)=>{
        dispatch({                         // Calling dispatch function
            type: "withdraw",
            payload: amount
        });
    }
}