import "./App.css";
import Card from "./assets/components/Card.jsx";

function App(){
  return (
    <div>
      <section id="header">
        <h1>Company</h1>
        <p>We specialize in something...</p>
      </section>

    <Card 
    icon="bx bxs-building" 
    heading="About" 
    paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum enim commodi ex perspiciatis hic earum eaque a similique! Nam facilis rerum deserunt nesciunt nisi ea possimus? Odio temporibus ullam culpa."
    />

    <Card
    icon="bx bx-globe-alt"
    heading="Our values"
    paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque quisquam, nisi, adipisci aliquid necessitatibus saepe, iusto tempore molestias explicabo eveniet eligendi velit repellat at? Temporibus pariatur deserunt non eius repellat?"
    />
    <Card
    icon="bx bx-building-house"
    heading="Our mission"
    paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque quisquam, nisi, adipisci aliquid necessitatibus saepe, iusto tempore molestias explicabo eveniet eligendi velit repellat at? Temporibus pariatur deserunt non eius repellat?"
    />

    </div>
  )
}




export default App;