import ReactDOM from 'react-dom/client';
import "./style.css"
import one from "./assets/image/one.png"
import two from "./assets/image/two.png"
import three from "./assets/image/three.png"
import four from "./assets/image/four.png"
import five from "./assets/image/five.png"

const root = ReactDOM.createRoot(document.getElementById('root'));
function ImageCard(props) {
  return (
      <div className="card">

          <img src={props.img} alt="dog"></img>
          <p>{props.name}</p>



      </div>


  )

}

var person = [
  {
    img:one,
    name:"julle's Rabbit Ears"

  },
  {
    img:two,
    name:"The Innocent Look"

  },
  {
    img:three,
    name:"Big Eyed Bugggy"

  },
  {
    img:four,
    name:"The Saint Doggo"

  },
  {
    img:five,
    name:"Jullie"

  },
  {
    img:one,
    name:"The Innocent Dog"

  },
  {
    img:three,
    name:"The Saint Doggo"

  },
  {
    img:five,
    name:"Big Eyed Bugggy"

  }
]


root.render(
  <div className="container">
    {
      person.map(function (item) {
        return <ImageCard img={item.img} name={item.name}></ImageCard>
      })
    }
  </div>
)


