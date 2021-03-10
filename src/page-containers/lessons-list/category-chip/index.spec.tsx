import React from "react";
import { shallow } from "enzyme";
import CategoryChip from "./index";
import { allCategories, categoriesEnum } from "../list-items";

const Component = ({ onClick }: { onClick: () => void }) => (
  <div>
    {allCategories.map((category: categoriesEnum) => (
      <CategoryChip
        category={category}
        key={category}
        toggleActive={onClick}
        active={false}
      />
    ))}
    {allCategories.map((category: categoriesEnum) => (
      <CategoryChip
        category={category}
        key={category}
        toggleActive={onClick}
        active
      />
    ))}
  </div>
);
describe("Category Chip", () => {
  let wrapper: any;
  let onClick: (category: categoriesEnum) => void;

  beforeEach(() => {
    onClick = jest.fn(() => {
      console.log("****");
      return "pizza";
    });
    wrapper = shallow(<Component onClick={onClick} />);
  });

  test("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
    expect.assertions(1);
  });
  test("should call onClick function with correct category", () => {
    wrapper.find("CategoryChip").first().dive().simulate("click");
    expect(onClick).toHaveBeenCalledWith("NextJS");
    expect.assertions(1);
  });
});
