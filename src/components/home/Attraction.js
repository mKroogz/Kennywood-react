import React from "react"

const Attraction = props => {

  return (
    <>
      <section className="parkArea">
        <strong>Rides</strong>
        <article>
          {props.attraction.name}
        </article>
      </section>
    </>
  )
}

export default Attraction
