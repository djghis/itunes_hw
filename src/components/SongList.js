import React from 'react';



const SongList = (props) => {

  const topSongs = props.songs.map((song, index) => {
    return <ul key={index}>
    <li>Number {index +1}</li>
    <p>{song["im:name"].label}</p>
    <p>by: {song["im:artist"].label}</p>
    <br></br>
    </ul>
  })

  return (
    <ol>
      {topSongs}
    </ol>
  )
}

   

 
export default SongList;