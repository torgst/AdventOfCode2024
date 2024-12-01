import { getData, logJson, logJsonPretty, logString } from "../helpers";

// Add testdata (e.g. example data from the task) here when working out a solution.
const testData = `
3   4
4   3
2   5
1   3
3   9
3   3
`;
let sum = 0; // Add to this when summing up stuff
const data = getData("01-1", testData, true); // Change to true to switch to the complete data set
const lines = data.split("\n");
const leftList: number[] = [];
const rightList: number[] = [];
for (const line of lines) {
  if (!line.trim()) continue; // empty line
  // Handle each line here, then add the result to sum
  const [left, right] = line.split("   ");
  leftList.push(parseInt(left as string));
  rightList.push(parseInt(right as string));
}
leftList.sort();
rightList.sort();
for (let i = 0; i < leftList.length; i++) {
  const left = leftList[i];
  const right = rightList[i];
  if (left === undefined || right === undefined) {
    throw new Error("Should not happen");
  }
  const rightMatches = rightList.filter((r) => r === left);
  const similarityScore = left * rightMatches.length;
  sum += similarityScore;
}
logString("Result: " + sum);
