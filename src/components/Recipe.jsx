const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ol>
          {ingredients.map(el =>
           <li>{el.text}</li>
            )}
      </ol>
      <p>{calories}</p>
      <img src={image} alt="img loading" />
    </div>
  );
};

export default Recipe;
