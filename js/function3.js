$(function() {
  var chart;
  google.charts.load('current', {'packages':['geochart']});
  google.charts.setOnLoadCallback(drawRegionsMap);
  function drawRegionsMap() {
    chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
  }
  function drawJSON(JSON) {
    var data = new google.visualization.DataTable(JSON);
    var options = {'width':800, 'height':600, region: "US", resolution: "provinces"};
    chart.draw(data, options);
  }
  $('.input-field').change(function() {
    $("#result").velocity({ opacity: 0 });
    $("#regions_div").velocity({ opacity: 0 });
    $("#footer").css('bottom','-300px');
  });
  $('.input-field').click(function() {
    $("#result").velocity({ opacity: 0 });
    $("#regions_div").velocity({ opacity: 0 });
    $("#footer").css('bottom','-300px');
  });
  $('#button').click(function(event) {
    event.preventDefault();
    state = parseInt(document.getElementById('state').value);
    education = document.getElementById('education').value;
    age = parseInt(document.getElementById('age').value);
    if(!age) age=25;
    employment = document.getElementById('employment').value;
    sex = document.getElementById('sex').value;
    nativity = document.getElementById('nativity').value;
    occupation = document.getElementById('occupation').value;
    if(age<18) age = 15;
    else if(age>65) age = 70;
    else age = Math.ceil(age/5)*5;
    query = '['+state+','+education+','+age+','+employment+','+sex+','+nativity+','+nativity+']';
    console.log(query);
    $.getJSON('/prediction?'+query, function (data) {
      if(data==123456) toPrint = "more than 120000";
      else if(data==20000) toPrint = "less than 20000";
      else toPrint = (parseInt(data)-20000).toString() + " ~ " + data;
      $("#prediction").text(toPrint);
      $("#result").velocity({ opacity: 1 });
    });
    $.getJSON('/statesprediction?'+query, function (data) {
      drawJSON(data);
      $("#regions_div").velocity({ opacity: 1 });
      $("#footer").css('bottom','-600px');
    });
  });
});
$(document).ready(function() {
  $('select').material_select();
});