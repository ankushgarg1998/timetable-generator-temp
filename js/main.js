function day(x)
  {
  return ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][x-1];
  }

function time(startTime, period)
  {
  var hr = (Number(startTime[0]+startTime[1]));
  var min = (Number(startTime[3]+startTime[4]));
  var pl = $('#plength').val();
  pl = pl*period;
  min = min + pl;
  hr = hr + Math.floor(min/60);
  if((min%60)<10)
    var rar = '0'+String(min%60);
  else
    var rar = String(min%60);
  var str = String(hr%24)+':'+rar;
  return str;
  }


function run()
  {
  //Form Validation Pending

  var startTime = $('#starttime').val();
  var rows = $('#weekdays').val();
  var columns = $('#periods').val();
  var table = '<table class="table table-striped table-hover table-bordered">';
  table += '<tr class="info"><th>Days/Periods</th>';
  for(var i=1;i<=columns;i++)
    {
    table += '<th>'+ time(startTime, i-1)+' - '+ time(startTime, i) +'</th>';
    }
  table += '</tr>';
  for(var i=1; i<=rows; i++)
    {
    table += '<tr><td class="info"><strong>' + day(i) + '</strong></td>';
    for(var j=1; j<=columns; j++)
      {
      table += '<td>lorem ipsum</td>';
      }
    table += '</tr>';
    }
  table += '</table>'
  $('#main-table').html(table);
}
