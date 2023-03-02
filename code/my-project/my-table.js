if(!d3.chart) d3.chart = {};

d3.chart.table = function() {
  var data;
  var width;

  function chart(container) {

    var table = container.append('table');

    var rows = table.selectAll('tr.row')
      .data(data);

    var rowsEnter = rows.enter()
      .append('tr')
      .classed('row', true)

    rowsEnter.append('td')
      .text(d => { return d.data.score })

    rowsEnter.append('td')
      .append('img')
      .attr({
        src: d => { return d.data.thumbnail }
      });

    rowsEnter.append('td')
      .append('a')
      .attr({
        href: d => { return d.data.url }
      })
      .text(d => { return d.data.title });

    rowsEnter.append('td')
      .text(d => { return d.data.ups });

    rowsEnter.append('td')
      .text(d => { return d.data.downs });

    rows.exit().remove();

  }

  // Incluir dados
  chart.data = function(value) {
    if(!arguments.length) return data; // Retornar dados quando não passar nenhum argumento
    data = value;
    return chart;
  }

  chart.width = function(value) {
    if(!arguments.length) return width;
    width = value;
    return chart;
  }

  return chart;


}
