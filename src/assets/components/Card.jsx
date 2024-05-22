function Card(props){
    return (
      <section id="card_container">
        <i id="bx" className={props.icon}></i>
        <div>
          <h1>{props.heading}</h1>
            <p>{props.paragraph}</p>
        </div>
      </section>
    )
  }

  export default Card;