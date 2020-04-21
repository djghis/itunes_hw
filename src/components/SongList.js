import React from 'react';



const SongList = (props) => {

  const top20Songs = props.songs.map((song, index) => {
    return <ul key={index}>
    <li>Number {index +1}</li>
    <h2>{song["im:name"].label}</h2>
    <p>by: {song["im:artist"].label}</p>
    <img src={song["im:image"][2].label} alt="Album cover"/>
    <audio src={song.link[1].attributes.href} preload="none" controls/>
   <br></br>
    </ul>
  })

  return (
    <ul>
      {top20Songs}
    </ul>
  )
}

   

 
export default SongList;