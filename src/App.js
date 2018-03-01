import React, { Component } from 'react';
import './App.css';
const background = "http://images.all-free-download.com/images/graphiclarge/beautiful_scenery_04_hd_pictures_166258.jpg";
class App extends Component {
  render() {
    return (
      
        <Card/>
    );
  }
}

export default App;


const Section = () => {
  return (
    <section className="py-8 bg-purple-lightest">
      <div className="container mx-auto px-6">
      <h2 className="text-purple-darker mt-0 mb-3 leading-tight">
        Paragraph Title
      </h2>
      <p className="text-purple-darker">
        Tailwind provides us with highly composable utility classes but leaves the design specification entirely up to the user to maintain that custom look and feel to your app.
        Today, Simon Vrachliotis will walk you through how easy it is to get up and running with Tailwind. You'll see how to compose Tailwinds utility classes together as well as how to generate classes that target specific breakpoints and states.
      </p>
      </div>
    </section>
  )
}


const Card = () => {
  return (
    <div className="m-4 font-sans leading-normal">
    <div className="shadow-lg rounded overflow-hidden sm:flex max-w-md">
      <div style={{backgroundImage: "url(" + background + ")"}}
        className="bg-cover bg-center h-48 w-auto sm:h-auto sm:w-64">
      </div>
      {/* <img src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb"/> */}

      <div className="p-4">
        <h2 className="font-black mb-3">Hello Tailwind</h2>
        <p className="text-sm text-grey-dark mb-4">
        Tailwind provides us with highly composable utility classes but leaves the design specification entirely up to the user to maintain that custom look and feel to your app.
        Today, Simon Vrachliotis will walk you through how easy it is to get up and running with Tailwind. You'll see how to compose Tailwinds utility classes together as well as how to generate classes that target specific breakpoints and states.
        </p>

        <button className="bg-purple hover:bg-purple-light text-white py-3 px-6 font-bold rounded-full mt-1 mb-2">Click me!</button>
      </div>
      </div>
    </div>
  )
}
 
