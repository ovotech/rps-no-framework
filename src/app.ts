type Gesture = "Rock" | "Paper" | "Scissors";
const GESTURES: Array<Gesture> = ["Rock", "Paper", "Scissors"];
type Result = "Player" | "Computer" | "Draw";
let winner: Result;

// TODO: Implement selection of computer gesture
const generateComputerGesture = () => "Rock";

export function play(playerGesture: Gesture): Result {
  const computerGesture = generateComputerGesture();

  // TODO: Implement game logic to calculate winner
  winner = "Player";
  return "Player";
}

function displayResults() {
  document.getElementById("results-area")!.innerHTML = `<h3>Winner: ${winner}`;
}

(window as any).play = play;
(window as any).displayResults = displayResults;
