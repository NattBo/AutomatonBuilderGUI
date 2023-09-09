import StateManager from './StateManager';
import { Tool } from './Tool';

StateManager.initialize();


// Set current tool to buttons
const statesButton = <HTMLButtonElement> document.getElementById("states-button");
if (statesButton?.addEventListener) {
  statesButton.addEventListener('click', () => StateManager.currentTool = Tool.States, false);
}

const transitionsButton = <HTMLButtonElement> document.getElementById("transitions-button");
if (transitionsButton?.addEventListener) {
  transitionsButton.addEventListener('click', () => StateManager.currentTool = Tool.Transitions, false);
}

const selectButton = <HTMLButtonElement> document.getElementById("select-button");
if (selectButton?.addEventListener) {
  selectButton.addEventListener('click', () => StateManager.currentTool = Tool.Select, false);
}