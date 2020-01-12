// Variables ------------------

// Minus buttons
const minusBtn = $(".minus-btn");

// Plus buttons
const plusBtn = $(".plus-btn");

// Reset button
const resetBtn = $("#resetBtn");

// Roll button
const rollBtn = $("#rollBtn");

// Dice amounts
const d4El = $("#number4");
const d6El = $("#number6");
const d8El = $("#number8");
const d10El = $("#number10");
const d12El = $("#number12");
const d20El = $("#number20");
let d4Num = 0;
let d6Num = 0;
let d8Num = 0;
let d10Num = 0;
let d12Num = 0;
let d20Num = 0;

// Results div
const resultsDiv = $("#results-div");

// Functions ------------------

function getDiceNums() {
  d4Num = parseInt(d4El.text());
  d6Num = parseInt(d6El.text());
  d8Num = parseInt(d8El.text());
  d10Num = parseInt(d10El.text());
  d12Num = parseInt(d12El.text());
  d20Num = parseInt(d20El.text());
}

// Click Events ------------------

document.addEventListener("DOMContentLoaded", function() {
  // Dice Minus/Plus Click Events ------------------

  minusBtn.on("click", event => {
    const targetBtn = $(event.target);
    const diceAmount = parseInt(targetBtn.next().text());
    if (diceAmount > 0) {
      targetBtn.next().text(diceAmount - 1);
    }
  });

  plusBtn.on("click", event => {
    const targetBtn = $(event.target);
    const diceAmount = parseInt(targetBtn.prev().text());
    targetBtn.prev().text(diceAmount + 1);
  });

  // Reset Button Click Event ------------------

  resetBtn.on("click", event => {
    d4El.text("0");
    d6El.text("0");
    d8El.text("0");
    d10El.text("0");
    d12El.text("0");
    d20El.text("0");
  });

  // Roll Button Click Event ------------------

  rollBtn.on("click", event => {
    resultsDiv.empty();
    getDiceNums();
    console.log(
      `d4: ${d4Num}\nd6: ${d6Num}\nd8: ${d8Num}\nd10: ${d10Num}\nd12: ${d12Num}\nd20: ${d20Num}`
    );
    // Validation
    if (d4Num + d6Num + d8Num + d10Num + d12Num + d20Num === 0) {
      resultsDiv.append($(`<p>Error: Must roll at least 1 dice.</p>`));
    }
  });
});
