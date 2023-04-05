import { createSlice} from '@reduxjs/toolkit'


const itemsSlice = createSlice({
name : 'items',
initialState : {
    items : []
},
reducers: {
addItem: (state, action)=> {
    console.log(action.type)
state.items.push(action.payload)},
deleteItem : (state, action)=> {
    state.items =  state.items.filter(item=> item.id !== action.payload)
    },
updateItem : (state, action)=> {
state.items.map(item =>  {
    if(item.id === action.payload.id) {
        item.title = action.payload.title
        item.description = action.payload.description
    }
})
}    
}


})

export const {addItem, deleteItem, updateItem} = itemsSlice.actions
export default itemsSlice.reducer