import React from "react";
import Dashboard from '../pages/dashboard/Dashboard';


describe('verification id people',() =>{
  test('verfivation id is not null', () =>{
    expect(Dashboard).not.toBeNull()
  })
  test('id to be definided', () =>{
    expect(Dashboard).toBeDefined()
  })
})