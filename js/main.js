function run()
  {
  var rows = $('#weekdays').val();
  var columns = $('#periods').val();
  var table = '<table class="table table-striped table-hover table-bordered">';
  //table += '<tr><th>A</th><th>B</th><th>C</th></tr>';
  for(var i=1; i<=rows; i++)
    {
    table += '<tr><td class="success">Day ' + i + '</td>';
    for(var j=1; j<=columns; j++)
      {
      table += '<td>yo</td>';
      }
    table += '</tr>';
    }
  table += '</table>'
  // $('#main-form').remove();
  $('#main-table').html(table);
  }
