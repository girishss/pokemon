import "./PokemonCard.css";
export default function (props) {
  return (
    <div className="PokemonCard-Container">
      <img className="PokemonCard-Image" src={props.img} />
      <label className="PokemonCard-Label">{props.label}</label>
    </div>
  );
}
