import React from 'react';
import Enzyme, { mount } from 'enzyme';
import BurndownChart from '../pages/dashboard/BurndownChart';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Highcharts from 'highcharts';

Enzyme.configure({ adapter: new Adapter() });

const values = {
  title: "xxxxxx",
  actualPercentage: [100, 83, 83, 80, 80, 80, 80, 60],
  expectedPercentage: [100, 92, 84, 75, 67, 59, 50, 42, 34, 25, 17, 9, 0]
}


describe("Test - BurndownChart Module", () => {

  it("Should mount the chart", () => {

    expect(() => {
      mount(<BurndownChart values={values} />);
    }).not.toBeNull();

  });

  it("Should have 1 Chart", () => {
    mount(<BurndownChart values={values} />);
    expect(Highcharts.charts.length).toBe(1);
  });

  it("Should have 1 serie", () => {
    mount(<BurndownChart values={values} />);
    expect(Highcharts.charts[0].series.length).toBe(2);
  });

  it("Checking number of components", () => {
    mount(<BurndownChart values={values} />);
    expect(Highcharts.charts[0].series[0].data.length).toBe(8);
    expect(Highcharts.charts[0].series[1].data.length).toBe(13);
  });



})