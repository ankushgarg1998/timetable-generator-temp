function day(x)
  {
  return ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][x-1];
  }

function run()
  {
  //Form Validation Pending
  var rows = $('#weekdays').val();
  var columns = $('#periods').val();
  var table = '<table class="table table-striped table-hover table-bordered">';
  table += '<tr class="info"><th>Days/Periods</th>';
  for(var i=1;i<=columns;i++)
    {
    table += '<th> Period '+i+'</th>';
    }
  table += '</tr>';
  for(var i=1; i<=rows; i++)
    {
    table += '<tr><td class="info"><strong>' + day(i) + '</strong></td>';
    for(var j=1; j<=columns; j++)
      {
      table += '<td>yo</td>';
      }
    table += '</tr>';
    }
  table += '</table>'
  $('#main-table').html(table);
}
