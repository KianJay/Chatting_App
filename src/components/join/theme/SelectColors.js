import React from 'react'
import {ColorConsumer} from './Color'

const colors = ['red','orange', 'yellow', 'green', 'blue', 'indigo','violet','black']

const SelectColors = () => {
   return (
      <div>
         <ColorConsumer >
            {({actions})=>(
               <div style={{
   display:'flex',
   justifyContent:'space-evenly',
  alignItems: 'center',
}}> 
               {colors.map(color=>(
                  <div key={color}
                  style={{
                   background:color,
                    width:'100px',
                    height:'20px',
                   cursor: 'pointer'}}
                   onClick ={()=> actions.setColor(color)}  />

               ))}

               </div>
            )
            
            }
         </ColorConsumer>
      </div>
   )
}

export default SelectColors
