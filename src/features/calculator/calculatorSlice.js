import { createSlice } from "@reduxjs/toolkit";




export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState: {
        input_value: '',
        stored_term: '',
        last_operator: ''
    },
    reducers: {
        input: (state, key) => {
            if(state.input_value[0] == '0' && key.payload == '0' && state.input_value[1] != '.') {
                console.log('é verdade')
                return
            }
            // if(typeof state.input_value == 'array') {
            // console.log(typeof state.input_value)
            if(state.input_value.indexOf('.') != -1 && key.payload == '.') return
            // }            
            state.input_value += String(key.payload)
        },
        clear: state => { 
            state.input_value = '' 
            state.stored_term = ''
        },
        equal: state => {
            
            switch(state.last_operator) {
                case '+': {                    
                    console.log(`stored_term ${state.stored_term} input_value: ${state.input_value}`)
                    state.input_value = Number(state.stored_term) + Number(state.input_value);                    
                    break
                }
                case '-': {
                    state.input_value = Number(state.stored_term) - Number(state.input_value);                    
                    break
                }
                case '*': {
                    state.input_value = Number(state.stored_term) * Number(state.input_value);                                                                                
                    console.log(`stored_term ${state.stored_term} input_value: ${state.input_value}`)
                    break
                }
                case '/': {
                    state.input_value = Number(state.stored_term) / Number(state.input_value);                    
                    break
                }
            }
            state.stored_term = state.input_value
            state.last_operator = ''                  
        },
        calc: (state, operator) => {
            if(state.stored_term == '') {
                state.stored_term = Number(state.input_value)                
                state.input_value = ''
                console.log(operator.payload)                
            } else {
            
                switch(state.last_operator) {
                    case '+': {         
                        console.log(`MAIS -> stored_term ${state.stored_term} input_value: ${state.input_value}`)               
                        state.stored_term = Number(state.stored_term) + Number(state.input_value);                    
                        console.log("check")
                        break
                    }
                    case '-': {
                        // if(state.input_value == '' && state.last_operator == '*') {
                            // state.stored_term = Number(state.stored_term) * Number(state.input_value);
                            // state.stored_term *= -1;
                            // console.log('enters?') 
                            // return    
                        // }
                        console.log(`MENOS -> stored_term ${state.stored_term} input_value: ${state.input_value}`)
                        state.stored_term = Number(state.stored_term) - Number(state.input_value);                                            
                        break
                    }
                    case '*': {
                        if(operator.payload == '-' && state.input_value == '') {
                            state.stored_term *= -1  
                            console.log(`VEZES -> stored_term ${state.stored_term} input_value: ${state.input_value}`)
                            return
                        }
                        if(operator.payload == '+' && state.input_value == '') {
                            state.stored_term = Math.abs(state.stored_term)
                            console.log(`VEZES -> stored_term ${state.stored_term} input_value: ${state.input_value}`)
                            state.last_operator = '+'
                            return
                        }                        
                        state.stored_term = Number(state.stored_term) * Number(state.input_value);                        
                        console.log(state.stored_term)               
                        break
                    }
                    case '/': {
                        state.stored_term = Number(state.stored_term) / Number(state.input_value);                    
                        break
                    }
                }                            
            }            
            state.last_operator = operator.payload            
            state.input_value = ''
        }
    }
})

export const { input, clear, equal, calc } = calculatorSlice.actions
export default calculatorSlice.reducer