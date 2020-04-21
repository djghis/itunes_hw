import React from 'react';



const SongList = (props) => {

  const top20Songs = props.songs.map((song, index) => {
    return <ul key={index}>
    <li>Number {index +1}</li>
    <p>{song["im:name"].label}</p>
    <p>by: {song["im:artist"].label}</p>
    <img src={song["im:image"][1].label} alt="Album cover image"/>
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