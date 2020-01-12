// Variables ------------------

// Minus buttons
const minusBtn = $(".minus-btn");

// Plus buttons
const plusBtn = $(".plus-btn");

// ------------------

document.addEventListener("DOMContentLoaded", function() {
  // Dice Minus/Plus Click Events ------------------

  minusBtn.on("click", function(event) {
    const targetBtn = $(event.target);
    const diceAmount = parseInt(targetBtn.next().text());
    if (diceAmount > 0) {
      targetBtn.next().text(diceAmount - 1);
    }
  });

  plusBtn.on("click", function(event) {
    const targetBtn = $(event.target);
    const diceAmount = parseInt(targetBtn.prev().text());
    targetBtn.prev().text(diceAmount + 1);
  });
});
