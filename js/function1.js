$(function() {
  $("#radios").radiosToSlider();
  $("#radios").velocity({scale: [0.7,0.7]});
  var chart;
  google.charts.load('current', {'packages':['geochart']});
  google.charts.setOnLoadCallback(drawRegionsMap);

  $('#option1').click(function() {
    $.getJSON('2009Income.json', function (data) {
      drawJSON(data);
    });
  });
  $('ins[data-radio="option1"]').click(function() {
    $.getJSON('2009Income.json', function (data) {
      drawJSON(data);
    });
  });
  $('#option2').click(function() {
    $.getJSON('2010Income.json', function (data) {
      drawJSON(data);
    });
  });
  $('ins[data-radio="option2"]').click(function() {
    $.getJSON('2010Income.json', function (data) {
      drawJSON(data);
    });
  });
  $('#option3').click(function() {
    $.getJSON('2011Income.json', function (data) {
      drawJSON(data);
    });
  });
  $('ins[data-radio="option3"]').click(function() {
    $.getJSON('2011Income.json', function (data) {
      drawJSON(data);
    });
  });
  $('#option4').click(function() {
    $.getJSON('2012Income.json', function (data) {
      drawJSON(data);
    });
  });
  $('ins[data-radio="option4"]').click(function() {
    $.getJSON('2012Income.json', function (data) {
      drawJSON(data);
    });
  });
  $('#option5').click(function() {
    $.getJSON('2013Income.json', function (data) {
      drawJSON(data);
    });
  });
  $('ins[data-radio="option5"]').click(function() {
    $.getJSON('2013Income.json', function (data) {
      drawJSON(data);
    });
  });
  function drawRegionsMap() {
    chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    $.getJSON('2009Income.json', function (data) {
      drawJSON(data);
    });
  }

  function drawJSON(JSON) {
    var data = new google.visualization.DataTable(JSON);
    var options = {'width':800, 'height':600, region: "US", resolution: "provinces"};
    chart.draw(data, options);
  }
});