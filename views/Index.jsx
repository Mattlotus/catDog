import React from 'react'



function Index(props) {
    const cats = props.allCats;
    const mySwag = {
        color: "white",
        backgrundColor: 'peru',
    };
    

    <nav>
         <a href="/cats/Show">Choose new pet</a>
    </nav>
{cats.map((cats, i)=>{
    let firstLetter = cats.name[0].toUpperCase()
    let rest = cats.name.substring(1)
})}
  return (
    <div key={i}>
        <a href={`/cats/${i}`}>
            <h1>{firstLetter + rest}</h1>
        </a>
        

    </div>
  )
}

export default Index