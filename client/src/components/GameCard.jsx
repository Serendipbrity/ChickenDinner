import Reports from "../components/Reports";
import React, { Component } from 'react';

export default function GameCard({ game }) {
    return (
      <div className='col-md-6'>
        <div className='card mb-3'>
          <div className='card-body'>
            <div className='d-flex justify-content-between align-items-center'>
              <h5 className='card-title'>{game.gameType}</h5>
              <h6> {game.machineNumber }</h6>
                        <a className='btn btn-light' href='/reports' path="/" element={<Reports />}> 
                View Reports
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }