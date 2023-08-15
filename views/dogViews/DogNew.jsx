import React from 'react'

function New() {
  return (
    <div>
        <form action="/dogs" method="POST">
                 Name: <input type="text" name="name" /><br/>
                 Image: <input type="text" name="color" /><br/>
                
                 <input type="submit" name="" value="ceate pet"/>
               </form>
    </div>
  )
}

export default New