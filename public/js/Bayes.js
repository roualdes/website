PLOT = document.getElementById('bayes');

// data generator
prob = function(a, D, M, r) {
    var x = [],
        y = [];
    var EM = r*D*(1-a);
    for (var i = 0; i <= 1001; i++) {
        var p = i/1001;
        var pM = p*M;
        x.push(p);
        y.push(pM / (pM + (1-p)*EM));
    }
    return {x: x, y: y};
}

var layout = {hovermode: 'closest',
              title: '',
              margin: {t: 40},
              xaxis: {ticks: 'outside',
                      zeroline: false,
                      showline: true,
                      hoverformat: '.2f',
                      mirror: 'ticks',
                      title: 'Prior probability of database match (p)'},
              yaxis: {ticks: 'outside',
                      zeroline: false,
                      showline: true,
                      hoverformat: '.2f',
                      mirror: 'ticks',
                      title: 'Database source probability'}};

Plotly.plot(PLOT,
            [prob(0, 10, 125, 0.75)],
            layout,
            {modeBarButtonsToRemove: ['sendDataToCloud']});
