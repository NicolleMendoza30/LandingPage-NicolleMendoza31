const Card = (props) =>{

return(
<div className="card" style={{width:'18rem', height:'45rem' }}>
  <img src={props.imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body bg-danger-subtle">
    <h5 className ="card-title">{props.title}</h5>
    <p className="card-text  ">{props.description}</p>
     <a href="#" class="btn  bg-body-secondary">Find Out More!</a>
    
  </div>
  
</div>
);
};

export default Card;

