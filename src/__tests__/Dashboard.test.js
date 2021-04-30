import React from "react";
import dashboard from "../pages/dashboard/Dashboard"

describe('verification id people',() =>{
  test('verfivation id is not null', () =>{
    expect(dashboard).not.toBeUndefined()
  })
  test('id to be definided', () =>{
    expect(dashboard).toBeDefined()
  })
})
