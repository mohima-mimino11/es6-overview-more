import './Bottle.css'
const Bottle = ({bottle}) => {
  console.log(bottle);
  const {name,img, price} = bottle;
  
  return (
    <div className="bottle">
        <h4>Name: {name}</h4>
        <img src={img} ></img>
        <h5>Price: ${price}</h5>
      
    </div>
  );
};

export default Bottle;