const Imagen = (props) =>{
    return (
//         <div class="card text-bg-dark">
//   <img src={props.Imagen} class="card-img" alt="..."/>
//   <div class="card-img-overlay">
    
//     <p class="card-text text-center fs-1 fw-bold position-absolute top-50 start-50 translate-middle w-50 p-3 badge "><h1>JOIN THE 24/7 GYM EXPERIENCE</h1></p>
      
//   </div>
// </div>

<div id="carouselExampleIndicators" class="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide "></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://chatgpt.com/backend-api/public_content/enc/eyJpZCI6Im1fNjg1YjFlNzM0NDI0ODE5MWJjZTBiNmJkMTc1MTVhYjI6ZmlsZV8wMDAwMDAwMGU1NTg2MWY1OWU0YmYyNmI5MDJhMmYxNSIsInRzIjoiNDg2MzMzIiwicCI6InB5aSIsInNpZyI6IjZkZmQ1ODQ2ZTM2MDFmNzBhZWZkZThkNzk1Mjc3OGVjNTFiNmI4YTlkYzAyYzNjNzE1NWIxOTMwOTNlYzI4OWIiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsfQ==" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://chatgpt.com/backend-api/public_content/enc/eyJpZCI6Im1fNjg1YjFkYTgzMjYwODE5MWFlZDYyOGFjNmZjZjY5MWM6ZmlsZV8wMDAwMDAwMGFjM2M2MWY1OTczYTRiMGMwNjg2YWVhNiIsInRzIjoiNDg2MzMzIiwicCI6InB5aSIsInNpZyI6IjVlMWYwYTg1YTlkODM1MTgwODAxZmY5MmVhMzEzZjRiYzhlZjhkMGI4MDg0YzhhMWI3Mjg5YjE1YmVlMmQxYjEiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsfQ==" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://chatgpt.com/backend-api/public_content/enc/eyJpZCI6Im1fNjg1YjFlZDYwZGE0ODE5MTliMDY2Y2IyOWNmNWFlNmY6ZmlsZV8wMDAwMDAwMDdlYjg2MjJmYjkwNjQ2MDc3MjMzN2M5ZSIsInRzIjoiNDg2MzMzIiwicCI6InB5aSIsInNpZyI6IjA5OThjODgxNWRhZmE2OTFmOTc0NTc3MzAyM2I3YmUwZjZmNDUwOTk3MDFhNmU5MWIwM2Y0MWI3NWQ2ZDg3ZDUiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsfQ==" class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://chatgpt.com/backend-api/public_content/enc/eyJpZCI6Im1fNjg1YjFmOGNlN2U4ODE5MTkzOGUxZjdiMmNhNDkzYTE6ZmlsZV8wMDAwMDAwMGJlNjQ2MjJmOGU4OGMxZDc0ZTk1MDkxNiIsInRzIjoiNDg2MzMzIiwicCI6InB5aSIsInNpZyI6Ijc1ZTNmZDI3MWUwYzM1NTI3OWUwYThmNzA1MmFjM2ZlMTFjMjg5MjEwY2ZhYTllYTc1NzFiYTg1OTczMzZjOWEiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsfQ==" class="d-block w-100" alt="..."/>
    </div>
     <div className="carousel-item">
      <img src="https://chatgpt.com/backend-api/public_content/enc/eyJpZCI6Im1fNjg1YjNkOTJlNmQwODE5MTg0MTgzNDViNjU1ODNiYmU6ZmlsZV8wMDAwMDAwMDg5MGM2MWY4YWM1ZjcxYTFkMTQ1ZjRiMCIsInRzIjoiNDg2MzM2IiwicCI6InB5aSIsInNpZyI6IjM1YTY1Y2M0MzQ4NjllMzlhMWMyZjZiMTYzOWNlOGEwYjFjMzM2YzU3ZTZmMzA5Y2U5OGU0MzBlZTFkNTY5MGEiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsfQ==" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

  )

}
export default Imagen;