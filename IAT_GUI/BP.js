


document.getElementById("sumbitBlocks").addEventListener("click", saveParameters);


function saveParameters () {
  var categories_trials_blocks = document.getElementById("categories_trials_blocks").value;
  var categories_mini_blocks = document.getElementById("categories_mini_blocks").value;
  console.log("categories_trials_blocks "+categories_trials_blocks, "categories_mini_blocks "+categories_mini_blocks);
  var attributes_trials_blocks = document.getElementById("attributes_trials_blocks").value;
  var attributes_mini_blocks = document.getElementById("attributes_mini_blocks").value;
  console.log("attributes_trials_blocks "+attributes_trials_blocks, "attributes_mini_blocks "+attributes_mini_blocks);
  var first_combined_trials_blocks = document.getElementById("first_combined_trials_blocks").value;
  var first_combined_mini_blocks = document.getElementById("first_combined_mini_blocks").value;
  console.log("first_combined_trials_blocks "+first_combined_trials_blocks, "first_combined_mini_blocks "+first_combined_mini_blocks);
  var second_combined_trials_blocks = document.getElementById("second_combined_trials_blocks").value;
  var second_combined_mini_blocks = document.getElementById("second_combined_mini_blocks").value;
  console.log("second_combined_trials_blocks "+second_combined_trials_blocks, "second_combined_mini_blocks "+second_combined_mini_blocks);
  var switch_trials_blocks = document.getElementById("switch_trials_blocks").value;
  var switch_mini_blocks = document.getElementById("switch_mini_blocks").value;
  console.log("switch_trials_blocks "+switch_trials_blocks, "switch_mini_blocks "+switch_mini_blocks);
  var random_category = document.getElementById("random_category").checked;
  var random_attribute = document.getElementById("random_attribute").checked;
  console.log("random_category "+random_category, "random_attribute "+random_attribute);
}
