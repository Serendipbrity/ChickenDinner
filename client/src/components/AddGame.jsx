import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { ADD_GAME } from "../mutations/gameMutations";
import {GET_GAMES} from "../queries/gameQueries";
import React, { Component } from 'react';

export default function AddGame() {
    const [gameType, setGameType] = useState('');
    const [gameBrand, setGameBrand] = useState('');
    const [machineNumber, setMachineNumber] = useState('');



    const [addGame] = useMutation(ADD_GAME, {
      variables: { gameType, gameBrand, machineNumber },
      update(cache, { data: { addGame } }) { 
        const { games } = cache.readQuery({ query: GET_GAMES });
    
        cache.writeQuery({
          query: GET_GAMES,
          data: { games: [...games, addGame] }
        });
      }
    });
  
  const onSubmit = async (e) => {
    e.preventDefault();
    // if (username === "" || email === "" || password === "") {
    //   return alert("Please fill in all fields");
    // }
    addGame(gameType, gameBrand, machineNumber);

    // clear the form
    setGameBrand("");
      setGameType("");
        setMachineNumber("");
  };
  return (
    <>
      <button
        id=""
        type="button"
        className="btn btn-secondary mt-4 flex-child d-flex"
        data-bs-toggle="modal"
        data-bs-target="#addGameModel"
      >
        <div className="d-flex align-items-center">
          <div>Add Game</div>
        </div>
      </button>

      <div
        className="modal fade"
        id="addGameModel"
        aria-labelledby="addGameModelLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addGameModelLabel">
                New Game
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label className="form-label" >Game Type: </label>
                                  <input type="text" className="form-control" id="gameType" value={gameType} onChange={(e) => setGameType(e.target.value)}></input>
                </div>
                <div className="mb-3">
                  <label className="form-label" >Game Brand: </label>
                                  <input type="text" className="form-control" id="gameBrand" value={gameBrand} onChange={(e) => setGameBrand(e.target.value)}></input>
                </div>
                <div className="mb-3">
                  <label className="form-label" >Machine Number: </label>
                                  <input type="text" className="form-control" id="machineNumber" value={machineNumber} onChange={(e) => setMachineNumber(e.target.value)}></input>
                              </div>
                              <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}