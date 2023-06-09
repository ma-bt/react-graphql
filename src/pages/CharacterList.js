import React from "react";
import './CharacterList.css'
import { useCharacters } from "../hooks/useCharacters";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import Search from "./Search";



export default function CharacterList() {
  
  const { error,  loading, data} = useCharacters();
 
  
  if(loading) return <div>spinner...</div>
  if(error) return <div>error happened</div>

  return (
    <div className="Characters">
    <div> <Search /></div>
    <div className="CharacterList">
    {
        data.characters.results.map(character => {
          return <Link to={`/react-graphql/${character.id}`}>
            <img src={character.image} alt="" />
            <h2>{character.name}</h2>
          </Link>
        })
      }
      </div>
      
     
    </div>);
}
