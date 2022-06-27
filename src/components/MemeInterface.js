import React from "react";
import memesData from "../memesData";

export default function MemeInterface() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: '"http://i.imgflip.com/1bij.jpg"',
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    // setMeme(meme.randomImage)
    const url = allMemeImages[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
    setDisplayed(true);
  }

  const [displayed, setDisplayed] = React.useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div className="interface">
      <div className="interface-inputs">
        <input
          type="text"
          placeholder="top"
          onChange={handleChange}
          name="topText"
          value={meme.topText}
        ></input>
        <input
          type="text"
          placeholder="bottom"
          onChange={handleChange}
          name="bottomText"
          value={meme.bottomText}
        ></input>
      </div>
      <button onClick={getMemeImage}>Get a new template</button>
      {displayed && (
        <div className="meme">
          <img src={meme.randomImage} alt="a meme" className="meme-img" />
          <h2 className="meme-text top">{meme.topText}</h2>
          <h2 className="meme-text bottom">{meme.bottomText}</h2>
        </div>
      )}
    </div>
  );
}
