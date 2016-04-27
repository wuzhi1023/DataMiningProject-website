$(function() {
  state1 = [28, 5, 54, 16, 23, 46, 40, 1, 21, 18, 29, 45, 30, 19, 35, 47, 26];
  state2 = [39, 22, 50, 55, 31, 20, 37, 42, 2, 41, 4, 49, 12, 32, 13, 56, 27];
  state3 = [38, 48, 15, 10, 44, 17, 33, 53, 8, 36, 6, 51, 25, 24, 34, 9, 11];
  predictions = ['low', 'middle', 'high']
  $('.input-field').change(function() {
    $("#result").velocity({ opacity: 0 });
  });
  $('.input-field').click(function() {
    $("#result").velocity({ opacity: 0 });
  });
  $('#button').click(function(event) {
    event.preventDefault();
    state = parseInt(document.getElementById('state').value);
    // console.log(state);
    if (state1.includes(state)) state = 1;
    else if (state2.includes(state)) state = 2;
    else if (state3.includes(state)) state = 3;
    education = document.getElementById('education').value;
    age = parseInt(document.getElementById('age').value);
    if(!age) age=25;
    employment = document.getElementById('employment').value;
    sex = document.getElementById('sex').value;
    nativity = document.getElementById('nativity').value;
    if(age<18) age = 15;
    else if(age>65) age = 70;
    else age = Math.ceil(age/5)*5;
    query = '['+state+','+education+','+age+','+employment+','+sex+','+nativity+']';
    console.log(query);
    $.getJSON('/prediction?'+query, function (data) {
      console.log(data-1);
      $("#prediction").text(predictions[data-1]);
      $("#result").velocity({ opacity: 1 });
    });
  });
});
$(document).ready(function() {
  $('select').material_select();
});