import React from 'react'



function Index(props) {
    const dogs = props.allDogs;
    const mySwag = {
        color: "white",
        backgrundColor: 'peru',
    };
    

    <nav>
         <a href="/dogs/Show">Choose new pet</a>
    </nav>
{cats.map((dogs, i)=>{
    let firstLetter = dogs.name[0].toUpperCase()
    let rest = dogs.name.substring(1)
})}
  return (
    <div key={i}>
        <a href={`/dogs/${i}`}>
            <h1>{firstLetter + rest}</h1>
        </a>
        

    </div>
  )
}

export default Index