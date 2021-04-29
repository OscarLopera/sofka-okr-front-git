import React from "react";
import dashboard from "../pages/Dashboard"

describe('verification id people',() =>{
  test('verfivation id is not null', () =>{
    expect(dashboard).toBeUndefined()
  })
  test('id to be definided', () =>{
    expect(dashboard).toBeDefined()
  })
})
