
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { ADD_STORE } from "../mutations/storeMutations";
import {GET_STORES} from "../queries/storeQueries";
import React, { Component } from 'react';

export default function AddStore() {
    const [storeName, setStoreName] = useState('');
    const [storeAddress, setStoreAddress] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactInfo, setContactInfo] = useState('');
    const [whenCanContact, setWhenCanContact] = useState('');
    const [directions, setDirections] = useState('');


    const [addStore] = useMutation(ADD_STORE, {
      variables: {storeName, storeAddress, contactName, contactInfo, whenCanContact, directions},
      update(cache, { data: { addStore } }) { 
        const { stores } = cache.readQuery({ query: GET_STORES });
    // show immediately the new store without refreshing the page
        cache.writeQuery({
          query: GET_STORES,
          data: { stores: [...stores, addStore] }
        });
      }
    });
  
  const onSubmit = async (e) => {
    e.preventDefault();
    // if (storeName === "" || storeAddress === "" ) {
    //   return alert("Please fill in Store Name and Store Address fields");
    // }
    addStore(storeName, storeAddress, contactName, contactInfo, whenCanContact, directions);

    // clear the form
    setStoreName("");
    setStoreAddress("");
      setContactName("");
      setContactInfo("");
      setWhenCanContact("");
        setDirections("");
  };
  return (
      <>
          <div className="">
          <button
        id="btnS"
        type="button"
        className="btn btn-secondary"
        data-bs-toggle="modal"
        data-bs-target="#addStoreModel"
      >
        <div className="align-items-center">
          <div>Add Store</div>
        </div>
          </button>
          </div>

          
      <div
        className="modal fade"
        id="addStoreModel"
        aria-labelledby="addStoreModelLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addStoreModelLabel">
                New Store
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
                                 <label className="form-label" >Store Name: </label>
                                  <input type="text" className="form-control" id="storeName" value={storeName} onChange={(e) => setStoreName(e.target.value)}></input>
                              </div>
                              <div className="mb-3">
                                  <label className="form-label" >Store Address: </label> 
                                  <input type="text" className="form-control" id="storeAddress" value={storeAddress} onChange={(e) => setStoreAddress(e.target.value)}></input>
                              </div>
                              <div className="mb-3">
                                  <label className="form-label" >Contact Name: </label>
                                  <input type="text" className="form-control" id="contactName" value={contactName} onChange={(e) => setContactName(e.target.value)}></input>
                              </div>
                              <div>
                                  <label className="form-label" >Contact Info: </label>
                                  <input type="text" className="form-control" id="contactInfo" value={contactInfo} onChange={(e) => setContactInfo(e.target.value)}></input>
                              </div>
                              <div className="mb-3">
                                  <label className="form-label" >When Can Contact: </label>
                                  <input type="text" className="form-control" id="whenCanContact" value={whenCanContact} onChange={(e) => setWhenCanContact(e.target.value)}></input>
                              </div>
                              <div className="mb-3">
                                  <label className="form-label" >Directions: </label>
                                  <input type="text" className="form-control" id="directions" value={directions} onChange={(e) => setDirections(e.target.value)}></input>
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