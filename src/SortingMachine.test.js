import { sort } from "./Utils/sortNum";
import { ASC, DESC } from "./Utils/constant";
import { filterOnlyNum } from "./Utils/filterOnlyNum";

describe("ASC-TEST", () => {
  test("ASC-1", () => {
    expect(sort([1, 3, 2, 4, 5], ASC)).toEqual([1, 2, 3, 4, 5].join(", "));
  });
  test("ASC-2", () => {
    expect(sort([10, 9, 2, 6, 5], ASC)).toEqual([2, 5, 6, 9, 10].join(", "));
  });
  test("ASC-3", () => {
    expect(sort([3, 3, 1, 8, 8], ASC)).toEqual([1, 3, 3, 8, 8].join(", "));
  });
  test("ASC-4", () => {
    expect(sort([-1, -3, -2, -4, -5], ASC)).toEqual([-5, -4, -3, -2, -1].join(", "));
  });
  test("ASC-5", () => {
    expect(sort([-1, 3, -2, 4, -5], ASC)).toEqual([-5, -2, -1, 3, 4].join(", "));
  });
});

describe("DESC-TEST", () => {
  test("DESC-1", () => {
    expect(sort([1, 3, 2, 4, 5], DESC)).toEqual([5, 4, 3, 2, 1].join(", "));
  });
  test("DESC-2", () => {
    expect(sort([10, 9, 2, 6, 5], DESC)).toEqual([10, 9, 6, 5, 2].join(", "));
  });
  test("DESC-3", () => {
    expect(sort([3, 3, 1, 8, 8], DESC)).toEqual([8, 8, 3, 3, 1].join(", "));
  });
  test("DESC-4", () => {
    expect(sort([-1, -3, -2, -4, -5], DESC)).toEqual([-1, -2, -3, -4, -5].join(", "));
  });
  test("DESC-5", () => {
    expect(sort([-1, 3, -2, 4, -5], DESC)).toEqual([4, 3, -1, -2, -5].join(", "));
  });
});

describe("input-test", () => {
  test("alphabet", () => {
    expect(filterOnlyNum("a")).toContainEqual(NaN);
  });
  test("other Char", () => {
    expect(filterOnlyNum("!")).toContainEqual(NaN);
  });

  test("contain Alphabet", () => {
    expect(filterOnlyNum("1A, 2B, 3C, 4D, 5E")).toContainEqual(NaN);
  });
  test("contain Alphabet-2", () => {
    expect(filterOnlyNum("1,2,3,4 a")).toContainEqual(NaN);
  });
  test("contain other Char", () => {
    expect(filterOnlyNum("1,2,3,4,....")).toContainEqual(NaN);
  });
  test("contain other Char2", () => {
    expect(filterOnlyNum("...1,2,3,4,5,")).toContainEqual(NaN);
  });
  test("white space", () => {
    expect(filterOnlyNum(" ")).toEqual([]);
  });
  test("white space with commas", () => {
    expect(filterOnlyNum(", , , , ,")).toEqual([]);
  });
});
