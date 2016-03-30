$(function() {
  $("#radios").radiosToSlider();
  $("#radios").velocity({scale: [0.7,0.7]});
  var chart;
  google.charts.load('current', {'packages':['geochart']});
  google.charts.setOnLoadCallback(drawRegionsMap);

  $("[data-ratio='option1']").click(function() {
    console.log('here');
    $.getJSON('example.json', function (data) {
      console.log(data);
      drawJSON(data);
    });
  });
  $('#option1').click(function() {
    console.log('here');
    $.getJSON('example.json', function (data) {
      console.log(data);
      drawJSON(data);
    });
  });
  function drawRegionsMap() {

    var data = google.visualization.arrayToDataTable([
      ['Country', 'Popularity'],
      ['Germany', 0],
      ['United States', 0],
      ['Brazil', 0],
      ['Canada', 0],
      ['France', 0],
      ['RU', 0]
    ]);
    var options = {'width':800, 'height':600};
    chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
    chart.draw(data, options);
  }

  function drawJSON(JSON) {

    var data = new google.visualization.DataTable(JSON);

    var toPrint = data.toJSON();
    console.log(toPrint);
    var options = {'width':800, 'height':600};
    chart.draw(data, options);
  }
});