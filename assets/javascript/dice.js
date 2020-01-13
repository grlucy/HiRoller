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

// Results
const outputCollapsible = $("#output-collapsible");
const resultsDiv = $("#results-div");

// Functions ------------------

// Get user-entered values for quantity of each dice type to roll
function getDiceNums() {
  d4Num = parseInt(d4El.text());
  d6Num = parseInt(d6El.text());
  d8Num = parseInt(d8El.text());
  d10Num = parseInt(d10El.text());
  d12Num = parseInt(d12El.text());
  d20Num = parseInt(d20El.text());
}

// Generate a specified # of random numbers and append to results div with dice styling
function generateResults(num, max) {
  let newInlineDiv = $("<div>").addClass("inline");
  let newFlexDiv = $("<div>").addClass("divFlex diceFlex");
  for (let i = 1; i <= num; i++) {
    let randomNum = Math.floor(Math.random() * max + 1);
    newFlexDiv.append($(`<p class="dice dice${max}">${randomNum}</p>`));
  }
  newInlineDiv.append(newFlexDiv);
  $(`.d${max}Div`).append(newInlineDiv);
}

function sum() {
  // get sum of random dice
  // can you remove id="sum#"?
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
    // Validation
    if (d4Num + d6Num + d8Num + d10Num + d12Num + d20Num === 0) {
      resultsDiv.append($(`<p>Error: Must roll at least 1 dice.</p>`));
    } else {
      // Append a div for the results of each type of dice the user selected
      if (d4Num) {
        let d4Div = $("<div>").addClass("d4Div bottom-divider");
        resultsDiv.append(d4Div);
        $(".d4Div").append($(`<h6 class="inline-h6">d4</h6>`));
        generateResults(d4Num, 4);
        $(".d4Div").append(
          $(`<p class="inline sum" id="sum4">Total: 8888</p>`)
        );
      }
      if (d6Num) {
        let d6Div = $("<div>").addClass("d6Div bottom-divider");
        resultsDiv.append(d6Div);
        $(".d6Div").append($(`<h6 class="inline-h6">d6</h6>`));
        generateResults(d6Num, 6);
        $(".d6Div").append(
          $(`<p class="inline sum" id="sum6">Total: 8888</p>`)
        );
      }
      if (d8Num) {
        let d8Div = $("<div>").addClass("d8Div bottom-divider");
        resultsDiv.append(d8Div);
        $(".d8Div").append($(`<h6 class="inline-h6">d8</h6>`));
        generateResults(d8Num, 8);
        $(".d8Div").append(
          $(`<p class="inline sum" id="sum8">Total: 8888</p>`)
        );
      }
      if (d10Num) {
        let d10Div = $("<div>").addClass("d10Div bottom-divider");
        resultsDiv.append(d10Div);
        $(".d10Div").append($(`<h6 class="inline-h6">d10</h6>`));
        generateResults(d10Num, 10);
        $(".d10Div").append(
          $(`<p class="inline sum" id="sum10">Total: 8888</p>`)
        );
      }
      if (d12Num) {
        let d12Div = $("<div>").addClass("d12Div bottom-divider");
        resultsDiv.append(d12Div);
        $(".d12Div").append($(`<h6 class="inline-h6">d12</h6>`));
        generateResults(d12Num, 12);
        $(".d12Div").append(
          $(`<p class="inline sum" id="sum12">Total: 8888</p>`)
        );
      }
      if (d20Num) {
        let d20Div = $("<div>").addClass("d20Div bottom-divider");
        resultsDiv.append(d20Div);
        $(".d20Div").append($(`<h6 class="inline-h6">d20</h6>`));
        generateResults(d20Num, 20);
        $(".d20Div").append(
          $(`<p class="inline sum" id="sum20">Total: 8888</p>`)
        );
      }
      // Remove border from last div
      $(".bottom-divider")
        .last()
        .addClass("no-bottom-divider");
    }
    // Open results collapsible
    $("li").addClass("active");
    $(".collapsible-body").show();
  });
});
