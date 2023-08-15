import React from 'react'

function Show(props) {
    const mySwag = {
        color: 'white',
        backgroundColor: 'gray',
    };
  return (
    <div>Show
        <a href="/cats/">RETURN</a>
        <nav>
            <h2>{props.cats.name}</h2>
            {/* <img src={props.cats.img + '.jpg'} alt="" /> */}
        </nav>
    </div>
  )
}

export default Show