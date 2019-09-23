import React from "react";
import { configure, shallow, render } from "enzyme";
import chai, { expect } from "chai";
import chaiEnzyme from 'chai-enzyme';
import Adapter from "enzyme-adapter-react-16";
import App from "../App";

configure({ adapter: new Adapter() });

describe("App Component testing", function() {
  it("Finds App Component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).to.have.length(1);
  });

  chai.use(chaiEnzyme());
});
