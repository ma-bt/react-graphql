import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";


const GET_CHARACTER_LOCATIONS = gql`

query GetCharacterLocation($name:String!) {
    characters(filter: {name: $name}) {
    results {
        image
      location {
        name
      }
    }
    }
}
`

export default function Search() {


    const [name, setName] = useState("")


    const [getLocations, { loading, error, data, called }] = useLazyQuery(GET_CHARACTER_LOCATIONS, {
        variables: {
            name,
        }
    })
    console.log({
        called,
        error,
        loading,
        data
    })



    return <div>
        <input type="text" value={name} onChange={((e) => setName(e.target.value))} />
        <button onClick={getLocations}>Search</button>

        {loading && <div>Load hudai chaa.....</div>}
        {error && <div>Something is wrong here</div>}

        {data && (
            <ul>
                {data.characters.results.map((character) => {
                    return <>
                    <img src={character.image}alt="" />
                
                    <li>{character.location.name}</li>
                    </>
                })}
            </ul>
        )}
    </div>;
}
