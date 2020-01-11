import React,{createContext,useState} from 'react'

const ColorContext= createContext ({
   state:{color:'black'},
   actions:{
      setColor:()=>{},
   }
})

const ColorProvider =({children})=>{
   const[color,setColor]= useState('black')

   const value={
      state:{color},
      actions:{setColor}
   }

   return (
      <div>
         <ColorContext.Provider value={value}>
            {children}
         </ColorContext.Provider>
      </div>
   )
}
const{Consumer: ColorConsumer} = ColorContext
export {ColorProvider,ColorConsumer}

export default ColorContext
