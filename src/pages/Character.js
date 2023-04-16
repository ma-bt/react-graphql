import React from "react";
import { useCharacter } from "../hooks/useCharacter";
import "./Character.css"
import { useParams } from "react-router-dom";

export default function Character() {


  const {id} = useParams();
  const{data, loading, error} = useCharacter(id);
  
  if (error) return <div>Error happened</div>
  if (loading) return <div>Load hudai xa</div>


  return <div className="Character">
<img src={data.character.image} alt="" width={750} height={750}/>
<div className="Character-content">
  <h1> {data.character.name}</h1>
  
  <div className="Character-episode">
    {
      data.character.episode.map(episode => {
        return <div>
          {episode.name} - <b>{episode.episode}</b>
        </div>
      })
    }
  </div>
</div>
  </div>
}
