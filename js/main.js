function day(x)
  {
  if (x == 1)
    return 'Monday';
  else if (x == 2)
    return 'Tuesday';
  else if (x==3)
    return 'Wednesday';
  else if (x==4)
    return 'Thursday';
  else if (x==5)
    return 'Friday';
  else if (x==6)
    return 'Saturday';
  else if (x==7)
    return 'Sunday';
  }
$('#ttbox').hide();
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
