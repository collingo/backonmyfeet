
google.maps.LatLng.prototype.kmTo = function(a){ 
    var e = Math, ra = e.PI/180; 
    var b = this.lat() * ra, c = a.lat() * ra, d = b - c; 
    var g = this.lng() * ra - a.lng() * ra; 
    var f = 2 * e.asin(e.sqrt(e.pow(e.sin(d/2), 2) + e.cos(b) * e.cos 
(c) * e.pow(e.sin(g/2), 2))); 
    return f * 6378.137; 
  } 

  google.maps.Polyline.prototype.inKm = function(n){ 
    var a = this.getPath(n), len = a.getLength(), dist = 0; 
    for(var i=0; i<len-1; i++){ 
      dist += a.getAt(i).kmTo(a.getAt(i+1)); 
    } 
    return dist; 
  }

$(window).resize(function() { re_size(); });

function re_size() {
  $("#iframe").css({
    width: $(window).width()-40,
    height: $(window).height()-40
  });
}


function change_ze_menu(el) {
  var id = el.attr('href').replace('./#!/', ''),
      klass = el.attr('class');
  
  if(id != "" && klass != "active") {
    $("#articles article").hide();
    $("#articles article").each(function(i){
      if($(this).attr('parent') === id) {
        $(this).show().addClass('current-window');
        $("#articles_overlay").fadeIn(250);
        $("#articles").delay(250).fadeIn(250);
        return false;
      }
    });
    
    $("nav .active").removeClass('active');
    el.addClass('active');
  }
}

var henleyCoords = [
  {'long': -0.304237, 'lat': 51.456823},
  {'long': -0.304752, 'lat': 51.455753},
  {'long': -0.303550, 'lat': 51.454041},
  {'long': -0.303379, 'lat': 51.452169},
  {'long': -0.304666, 'lat': 51.450511},
  {'long': -0.307756, 'lat': 51.448693},
  {'long': -0.311618, 'lat': 51.447248},
  {'long': -0.315309, 'lat': 51.446339},
  {'long': -0.319343, 'lat': 51.446018},
  {'long': -0.323291, 'lat': 51.445804},
  {'long': -0.327068, 'lat': 51.444788},
  {'long': -0.329128, 'lat': 51.443076},
  {'long': -0.330844, 'lat': 51.440936},
  {'long': -0.329986, 'lat': 51.438314},
  {'long': -0.328784, 'lat': 51.437191},
  {'long': -0.328269, 'lat': 51.434943},
  {'long': -0.327411, 'lat': 51.432910},
  {'long': -0.324836, 'lat': 51.431198},
  {'long': -0.320716, 'lat': 51.430021},
  {'long': -0.317283, 'lat': 51.429057},
  {'long': -0.312906, 'lat': 51.427612},
  {'long': -0.309558, 'lat': 51.425793},
  {'long': -0.307155, 'lat': 51.423384},
  {'long': -0.306211, 'lat': 51.420922},
  {'long': -0.307155, 'lat': 51.417979},
  {'long': -0.308958, 'lat': 51.410752},
  {'long': -0.308700, 'lat': 51.404755},
  {'long': -0.309129, 'lat': 51.400900},
  {'long': -0.312906, 'lat': 51.397205},
  {'long': -0.316854, 'lat': 51.394153},
  {'long': -0.319944, 'lat': 51.392332},
  {'long': -0.325008, 'lat': 51.391314},
  {'long': -0.328269, 'lat': 51.391743},
  {'long': -0.332647, 'lat': 51.395706},
  {'long': -0.333505, 'lat': 51.396777},
  {'long': -0.337968, 'lat': 51.400097},
  {'long': -0.339771, 'lat': 51.402453},
  {'long': -0.344663, 'lat': 51.404274},
  {'long': -0.348440, 'lat': 51.406951},
  {'long': -0.354705, 'lat': 51.409949},
  {'long': -0.357194, 'lat': 51.411180},
  {'long': -0.363975, 'lat': 51.411715},
  {'long': -0.369468, 'lat': 51.410324},
  {'long': -0.378309, 'lat': 51.407593},
  {'long': -0.383287, 'lat': 51.408503},
  {'long': -0.388952, 'lat': 51.409628},
  {'long': -0.396848, 'lat': 51.408343},
  {'long': -0.403114, 'lat': 51.406094},
  {'long': -0.410324, 'lat': 51.403845},
  {'long': -0.413757, 'lat': 51.400365},
  {'long': -0.416418, 'lat': 51.397902},
  {'long': -0.418563, 'lat': 51.394581},
  {'long': -0.422941, 'lat': 51.391047},
  {'long': -0.426116, 'lat': 51.388743},
  {'long': -0.429550, 'lat': 51.388261},
  {'long': -0.431695, 'lat': 51.386815},
  {'long': -0.432125, 'lat': 51.384994},
  {'long': -0.433841, 'lat': 51.384137},
  {'long': -0.436159, 'lat': 51.384191},
  {'long': -0.437618, 'lat': 51.385101},
  {'long': -0.438047, 'lat': 51.386494},
  {'long': -0.440107, 'lat': 51.388743},
  {'long': -0.441823, 'lat': 51.389708},
  {'long': -0.443197, 'lat': 51.389600},
  {'long': -0.443798, 'lat': 51.388208},
  {'long': -0.444141, 'lat': 51.386922},
  {'long': -0.446716, 'lat': 51.386762},
  {'long': -0.449892, 'lat': 51.387886},
  {'long': -0.452381, 'lat': 51.387672},
  {'long': -0.451522, 'lat': 51.386387},
  {'long': -0.450235, 'lat': 51.384726},
  {'long': -0.451179, 'lat': 51.382958},
  {'long': -0.456758, 'lat': 51.382316},
  {'long': -0.461736, 'lat': 51.381780},
  {'long': -0.464654, 'lat': 51.382851},
  {'long': -0.468517, 'lat': 51.381834},
  {'long': -0.470748, 'lat': 51.382369},
  {'long': -0.471263, 'lat': 51.383494},
  {'long': -0.469890, 'lat': 51.384833},
  {'long': -0.470748, 'lat': 51.386387},
  {'long': -0.476327, 'lat': 51.389815},
  {'long': -0.478130, 'lat': 51.390029},
  {'long': -0.479846, 'lat': 51.388583},
  {'long': -0.481306, 'lat': 51.387029},
  {'long': -0.483795, 'lat': 51.386547},
  {'long': -0.485769, 'lat': 51.387726},
  {'long': -0.486541, 'lat': 51.389654},
  {'long': -0.487056, 'lat': 51.395117},
  {'long': -0.488944, 'lat': 51.397634},
  {'long': -0.491777, 'lat': 51.399240},
  {'long': -0.491691, 'lat': 51.400525},
  {'long': -0.491176, 'lat': 51.403417},
  {'long': -0.493150, 'lat': 51.405773},
  {'long': -0.492549, 'lat': 51.411127},
  {'long': -0.496154, 'lat': 51.413857},
  {'long': -0.500017, 'lat': 51.414392},
  {'long': -0.503707, 'lat': 51.416587},
  {'long': -0.508514, 'lat': 51.417443},
  {'long': -0.512119, 'lat': 51.416854},
  {'long': -0.513149, 'lat': 51.418460},
  {'long': -0.511775, 'lat': 51.421244},
  {'long': -0.509887, 'lat': 51.424080},
  {'long': -0.510059, 'lat': 51.429111},
  {'long': -0.514179, 'lat': 51.432268},
  {'long': -0.521045, 'lat': 51.435104},
  {'long': -0.529714, 'lat': 51.436067},
  {'long': -0.534349, 'lat': 51.437512},
  {'long': -0.542503, 'lat': 51.440080},
  {'long': -0.548339, 'lat': 51.441899},
  {'long': -0.551000, 'lat': 51.443450},
  {'long': -0.553146, 'lat': 51.442915},
  {'long': -0.553832, 'lat': 51.441631},
  {'long': -0.556064, 'lat': 51.441738},
  {'long': -0.559497, 'lat': 51.444574},
  {'long': -0.563016, 'lat': 51.445216},
  {'long': -0.565248, 'lat': 51.447623},
  {'long': -0.566621, 'lat': 51.449549},
  {'long': -0.571170, 'lat': 51.450939},
  {'long': -0.574003, 'lat': 51.453614},
  {'long': -0.574089, 'lat': 51.457037},
  {'long': -0.572973, 'lat': 51.459978},
  {'long': -0.569368, 'lat': 51.462010},
  {'long': -0.567136, 'lat': 51.464737},
  {'long': -0.564475, 'lat': 51.465914},
  {'long': -0.562244, 'lat': 51.467250},
  {'long': -0.563617, 'lat': 51.470886},
  {'long': -0.563016, 'lat': 51.472490},
  {'long': -0.566278, 'lat': 51.473345},
  {'long': -0.569196, 'lat': 51.472062},
  {'long': -0.572114, 'lat': 51.469817},
  {'long': -0.577093, 'lat': 51.468908},
  {'long': -0.582414, 'lat': 51.469763},
  {'long': -0.584646, 'lat': 51.471474},
  {'long': -0.584732, 'lat': 51.473292},
  {'long': -0.580440, 'lat': 51.478745},
  {'long': -0.581899, 'lat': 51.481364},
  {'long': -0.585933, 'lat': 51.483876},
  {'long': -0.591169, 'lat': 51.486549},
  {'long': -0.591684, 'lat': 51.488205},
  {'long': -0.593830, 'lat': 51.490717},
  {'long': -0.600696, 'lat': 51.494031},
  {'long': -0.604816, 'lat': 51.492855},
  {'long': -0.605503, 'lat': 51.489435},
  {'long': -0.607219, 'lat': 51.486549},
  {'long': -0.612197, 'lat': 51.485052},
  {'long': -0.617519, 'lat': 51.486549},
  {'long': -0.620609, 'lat': 51.487297},
  {'long': -0.624385, 'lat': 51.487297},
  {'long': -0.629020, 'lat': 51.488259},
  {'long': -0.625587, 'lat': 51.490183},
  {'long': -0.627819, 'lat': 51.491252},
  {'long': -0.635543, 'lat': 51.492320},
  {'long': -0.639491, 'lat': 51.491465},
  {'long': -0.641036, 'lat': 51.489862},
  {'long': -0.646015, 'lat': 51.490290},
  {'long': -0.651508, 'lat': 51.485052},
  {'long': -0.657688, 'lat': 51.487404},
  {'long': -0.666614, 'lat': 51.489007},
  {'long': -0.673480, 'lat': 51.492641},
  {'long': -0.678630, 'lat': 51.495206},
  {'long': -0.683952, 'lat': 51.504503},
  {'long': -0.689960, 'lat': 51.508670},
  {'long': -0.697685, 'lat': 51.510380},
  {'long': -0.702148, 'lat': 51.510486},
  {'long': -0.703865, 'lat': 51.513050},
  {'long': -0.701976, 'lat': 51.517110},
  {'long': -0.701805, 'lat': 51.522130},
  {'long': -0.702491, 'lat': 51.526296},
  {'long': -0.696483, 'lat': 51.540177},
  {'long': -0.691677, 'lat': 51.546263},
  {'long': -0.691677, 'lat': 51.557684},
  {'long': -0.693393, 'lat': 51.561312},
  {'long': -0.705753, 'lat': 51.561953},
  {'long': -0.712448, 'lat': 51.564941},
  {'long': -0.711246, 'lat': 51.569956},
  {'long': -0.715023, 'lat': 51.576144},
  {'long': -0.721202, 'lat': 51.577957},
  {'long': -0.728755, 'lat': 51.577744},
  {'long': -0.735622, 'lat': 51.575184},
  {'long': -0.742488, 'lat': 51.571236},
  {'long': -0.754505, 'lat': 51.566648},
  {'long': -0.757766, 'lat': 51.564087},
  {'long': -0.765148, 'lat': 51.566755},
  {'long': -0.773559, 'lat': 51.567715},
  {'long': -0.778194, 'lat': 51.563980},
  {'long': -0.779567, 'lat': 51.560245},
  {'long': -0.782485, 'lat': 51.556190},
  {'long': -0.791583, 'lat': 51.552988},
  {'long': -0.801883, 'lat': 51.551707},
  {'long': -0.810295, 'lat': 51.552988},
  {'long': -0.820079, 'lat': 51.550960},
  {'long': -0.826774, 'lat': 51.549572},
  {'long': -0.828147, 'lat': 51.546476},
  {'long': -0.831924, 'lat': 51.545729},
  {'long': -0.834842, 'lat': 51.546370},
  {'long': -0.837074, 'lat': 51.546797},
  {'long': -0.839820, 'lat': 51.545943},
  {'long': -0.844970, 'lat': 51.544661},
  {'long': -0.849090, 'lat': 51.545409},
  {'long': -0.854583, 'lat': 51.547757},
  {'long': -0.860935, 'lat': 51.548932},
  {'long': -0.864540, 'lat': 51.551600},
  {'long': -0.868659, 'lat': 51.556190},
  {'long': -0.874839, 'lat': 51.561739},
  {'long': -0.880161, 'lat': 51.562486},
  {'long': -0.885826, 'lat': 51.561419},
  {'long': -0.898872, 'lat': 51.541565},
  {'long': -0.900932, 'lat': 51.537401}
];

var brightonCoords = [
  {'lat': 51.45657410651974, 'long': -0.3055572509765625},
  {'lat': 51.45186746938840, 'long': -0.300750732421875},
  {'lat': 51.44887208400475, 'long': -0.300750732421875},
  {'lat': 51.44373668041619, 'long': -0.303497314453125},
  {'lat': 51.44074076160522, 'long': -0.303497314453125},
  {'lat': 51.43774464625972, 'long': -0.303497314453125},
  {'lat': 51.43432027377565, 'long': -0.3041839599609375},
  {'lat': 51.43175182594614, 'long': -0.3069305419921875},
  {'lat': 51.42704262987627, 'long': -0.3069305419921875},
  {'lat': 51.42490192575534, 'long': -0.306243896484375},
  {'lat': 51.42318929025319, 'long': -0.30487060546875},
  {'lat': 51.42104840561728, 'long': -0.3014373779296875},
  {'lat': 51.41890742069289, 'long': -0.3014373779296875},
  {'lat': 51.41548163620955, 'long': -0.3014373779296875},
  {'lat': 51.41376864768713, 'long': -0.300750732421875},
  {'lat': 51.41334039052714, 'long': -0.2986907958984375},
  {'lat': 51.41205559497636, 'long': -0.295257568359375},
  {'lat': 51.40905759827665, 'long': -0.28839111328125},
  {'lat': 51.40862929698625, 'long': -0.28564453125},
  {'lat': 51.40820099168393, 'long': -0.2822113037109375},
  {'lat': 51.40605940499277, 'long': -0.281524658203125},
  {'lat': 51.40477440483398, 'long': -0.278778076171875},
  {'lat': 51.40177593070748, 'long': -0.2712249755859375},
  {'lat': 51.40091918770501, 'long': -0.2698516845703125},
  {'lat': 51.4004908101855, 'long': -0.2657318115234375},
  {'lat': 51.40006242865384, 'long': -0.2629852294921875},
  {'lat': 51.39834886240484, 'long': -0.2588653564453125},
  {'lat': 51.39663523195964, 'long': -0.2581787109375},
  {'lat': 51.39449310362592, 'long': -0.2533721923828125},
  {'lat': 51.39149395543813, 'long': -0.24444580078125},
  {'lat': 51.38420949128390, 'long': -0.2410125732421875},
  {'lat': 51.38035254077803, 'long': -0.2355194091796875},
  {'lat': 51.37863823622007, 'long': -0.2300262451171875},
  {'lat': 51.37649526523255, 'long': -0.2176666259765625},
  {'lat': 51.37435219392110, 'long': -0.208740234375},
  {'lat': 51.37135172553766, 'long': -0.2053070068359375},
  {'lat': 51.36963708388735, 'long': -0.20050048828125},
  {'lat': 51.36749369152797, 'long': -0.19775390625},
  {'lat': 51.36620760795353, 'long': -0.1956939697265625},
  {'lat': 51.36406405506364, 'long': -0.1922607421875},
  {'lat': 51.36106291245669, 'long': -0.185394287109375},
  {'lat': 51.35591763902374, 'long': -0.182647705078125},
  {'lat': 51.351200630656, 'long': -0.177154541015625},
  {'lat': 51.34948523447416, 'long': -0.171661376953125},
  {'lat': 51.34734089893597, 'long': -0.1668548583984375},
  {'lat': 51.34519646305085, 'long': -0.1613616943359375},
  {'lat': 51.34305192681703, 'long': -0.155181884765625},
  {'lat': 51.33962046011348, 'long': -0.1503753662109375},
  {'lat': 51.33533076546223, 'long': -0.1483154296875},
  {'lat': 51.3318987207153, 'long': -0.146942138671875},
  {'lat': 51.32975356228204, 'long': -0.1421356201171875},
  {'lat': 51.32160104493045, 'long':-0.133209228515625},
  {'lat': 51.3198845408154, 'long': -0.12908935546875},
  {'lat': 51.3155929994938, 'long': -0.124969482421875},
  {'lat': 51.31130105668435, 'long': -0.1229095458984375},
  {'lat': 51.30786721335647, 'long': -0.1215362548828125},
  {'lat': 51.30271596654798, 'long': -0.120849609375},
  {'lat': 51.29928148078783, 'long': -0.1153564453125},
  {'lat': 51.29627609493993, 'long': -0.10711669921875},
  {'lat': 51.29284112732730, 'long': -0.09613037109375},
  {'lat': 51.28597042110155, 'long': -0.0913238525390625},
  {'lat': 51.28124621422739, 'long': -0.0885772705078125},
  {'lat': 51.27609197979870, 'long': -0.083770751953125},
  {'lat': 51.26921876761326, 'long': -0.0775909423828125},
  {'lat': 51.26578177595636, 'long': -0.076904296875},
  {'lat': 51.26234452724747, 'long': -0.076904296875},
  {'lat': 51.26019611626717, 'long': -0.076904296875},
  {'lat': 51.25761789054252, 'long': -0.075531005859375},
  {'lat': 51.25460977777075, 'long': -0.07415771484375},
  {'lat': 51.25160146817654, 'long': -0.072784423828125},
  {'lat': 51.24902276043772, 'long': -0.0714111328125},
  {'lat': 51.24386491112569, 'long': -0.06591796875},
  {'lat': 51.24085589855679, 'long': -0.059051513671875},
  {'lat': 51.23612705252841, 'long': -0.0569915771484375},
  {'lat': 51.23053778960369, 'long': -0.054931640625},
  {'lat': 51.22795790079474, 'long': -0.0542449951171875},
  {'lat': 51.22064743038333, 'long': -0.050811767578125},
  {'lat': 51.21505628718194, 'long': -0.050811767578125},
  {'lat': 51.20989462921810, 'long': -0.04669189453125},
  {'lat': 51.20688339486564, 'long': -0.0439453125},
  {'lat': 51.19655766797793, 'long': -0.0336456298828125},
  {'lat': 51.19311524464589, 'long': -0.0322723388671875},
  {'lat': 51.18709038493273, 'long': -0.031585693359375},
  {'lat': 51.18235601399332, 'long': -0.0295257568359375},
  {'lat': 51.18020386644295, 'long': -0.0281524658203125},
  {'lat': 51.17805161841545, 'long': -0.02471923828125},
  {'lat': 51.17202478938592, 'long': -0.020599365234375},
  {'lat': 51.16728887106287, 'long': -0.020599365234375},
  {'lat': 51.16341366704594, 'long': -0.01922607421875},
  {'lat': 51.15996876792049, 'long': -0.0171661376953125},
  {'lat': 51.15523161156229, 'long': -0.0157928466796875},
  {'lat': 51.15135539457423, 'long': -0.01373291015625},
  {'lat': 51.14575583962207, 'long': -0.010986328125},
  {'lat': 51.13886314700496, 'long': -0.0102996826171875},
  {'lat': 51.13455469147688, 'long': -0.0102996826171875},
  {'lat': 51.13153853338920, 'long': -0.0102996826171875},
  {'lat': 51.12809125433986, 'long': -0.0102996826171875},
  {'lat': 51.12291985328200, 'long': -0.0164794921875},
  {'lat': 51.11257531414125, 'long': -0.02471923828125},
  {'lat': 51.10869551483191, 'long': -0.0212860107421875},
  {'lat': 51.10007257240616, 'long': -0.0274658203125},
  {'lat': 51.09166365474885, 'long': -0.04840850830078125},
  {'lat': 51.08217483477369, 'long': -0.04840850830078125},
  {'lat': 51.07527265208860, 'long': -0.04840850830078125},
  {'lat': 51.06060209487428, 'long': -0.08686065673828125},
  {'lat': 51.05197018309632, 'long': -0.08274078369140625},
  {'lat': 51.04420008663726, 'long': -0.08686065673828125},
  {'lat': 51.03729223991528, 'long': -0.09510040283203125},
  {'lat': 51.03038336319537, 'long': -0.10059356689453125},
  {'lat': 51.02174581878002, 'long': -0.11020660400390625},
  {'lat': 51.01397065263682, 'long': -0.11020660400390625},
  {'lat': 51.00965055251738, 'long': -0.11020660400390625},
  {'lat': 50.99841640882196, 'long': -0.11020660400390625},
  {'lat': 50.98199238176011, 'long': -0.12668609619140625},
  {'lat': 50.96902193905618, 'long': -0.13492584228515625},
  {'lat': 50.96383274757586, 'long': -0.12805938720703125},
  {'lat': 50.95604787343019, 'long': -0.12393951416015625},
  {'lat': 50.94739648344059, 'long': -0.12668609619140625},
  {'lat': 50.93960885552314, 'long': -0.14728546142578125},
  {'lat': 50.92922332234460, 'long': -0.15140533447265625},
  {'lat': 50.92143265039760, 'long': -0.14728546142578125},
  {'lat': 50.90844529776429, 'long': -0.14316558837890625},
  {'lat': 50.89718666031611, 'long': -0.15827178955078125},
  {'lat': 50.88679165535323, 'long': -0.16239166259765625},
  {'lat': 50.87032815256486, 'long': -0.15689849853515625},
  {'lat': 50.86686141077975, 'long': -0.15277862548828125},
  {'lat': 50.85472578413624, 'long': -0.15277862548828125},
  {'lat': 50.84778972220868, 'long': -0.15277862548828125},
  {'lat': 50.84345415973276, 'long': -0.14591217041015625},
  {'lat': 50.83564913191907, 'long': -0.14179229736328125}
];

var map = "",
    image = "http://bomf.niklaspalm.se/images/marker-small.png",
    myOptions = {
      // center: new google.maps.LatLng(51.261311,-0),
      center: new google.maps.LatLng(51.471902,-0.516925),
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: false,
      panControl: false,
      zoomControl: true,
      zoomControlOptions: {
        style: google.maps.ZoomControlStyle.SMALL,
        position: google.maps.ControlPosition.LEFT_CENTER
      },
      scaleControl: false,
      streetViewControl: false
    };

var pcPoints = [];
var pcInfoWindow =  new google.maps.InfoWindow({
	content: ''
});
	
function initialize() {
  map = new google.maps.Map(document.getElementById("ze_map"), myOptions);
  
  var bomfstyle = [
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { gamma: 1.65 },
        { saturation: -42 },
        { visibility: "simplified" },
        { lightness: 12 }
      ]
    },{
      featureType: "poi.park",
      stylers: [
        { lightness: -7 },
        { saturation: 15 }
      ]
    },{
      featureType: "transit.station",
      stylers: [
        { visibility: "off" }
      ]
    },{
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    },{
      featureType: "landscape.natural",
      stylers: [
        { visibility: "simplified" },
        { saturation: 21 },
        { lightness: 1 }
      ]
    },{
      featureType: "road.arterial",
      elementType: "labels",
      stylers: [
        { visibility: "simplified" }
      ]
    },{
      featureType: "road.local",
      elementType: "geometry",
      stylers: [
        { visibility: "on" }
      ]
    },{
      featureType: "water",
      stylers: [
        { lightness: -12 },
        { saturation: 9 }
      ]
    },{
      featureType: "transit.station.rail",
      elementType: "geometry",
      stylers: [
        { visibility: "simplified" }
      ]
    },{
      featureType: "road.local",
    }
  ];

  map.setOptions({styles: bomfstyle});

  // Brighton polyline
  var brightonLL = [];
  $(brightonCoords).each(function(){
    brightonLL.push(new google.maps.LatLng(this.lat, this.long));
  });
  brightonPolyLine = new google.maps.Polyline({path:brightonLL, strokeColor: "#d9583c", strokeOpacity: 0.3, strokeWeight: 5, geodesic: true});
  brightonPolyLine.setMap(map);
  
  // Brighton polyline
  var henleyLL = [];
  $(henleyCoords).each(function(){
    henleyLL.push(new google.maps.LatLng(this.lat, this.long));
  });
  henleyPolyLine = new google.maps.Polyline({path:henleyLL, strokeColor: "#d9583c", strokeOpacity: 1.0, strokeWeight: 5, geodesic: true});
  henleyPolyLine.setMap(map);

  console.log(henleyPolyLine.inKm()); 

  var start_image = new google.maps.MarkerImage("/images/Putney.png", null, null, new google.maps.Point(0, 40) ),
      start_position = new google.maps.LatLng(51.45657410651974, -0.3055572509765625),
      brighton_finish_image = new google.maps.MarkerImage("/images/Finished_sign.png", null, null, new google.maps.Point(330, 83) ),
      brighton_end_position = new google.maps.LatLng(50.82764913191907, -0.14179229736328125);
      end_image = new google.maps.MarkerImage("/images/Henley.png", null, null, new google.maps.Point(183, 38) ),
      henley_end_position = new google.maps.LatLng(51.537401, -0.900932);

  var start = new google.maps.Marker({
    position: start_position,
    map: map,
    icon: start_image,
    title: "Start"
  });
  start.setZIndex(1);
  
  var brightonEnd = new google.maps.Marker({
    position: brighton_end_position,
    map: map,
    icon: brighton_finish_image,
    title: "Finished"
  });
  brightonEnd.setZIndex(1);
  
  var end = new google.maps.Marker({
    position: henley_end_position,
    map: map,
    icon: end_image,
    title: "End"
  });
  end.setZIndex(1);
  
  
  $.getJSON('http://api.twitter.com/1/statuses/user_timeline.json?screen_name=rafbauer&callback=?', function(data) {
	
	// get geolocated tweets for raf
	for (var i = 0; i < data.length; i ++) {
		if(data[i].geo && data[i].geo.coordinates) {
			
			var x = data[i].geo.coordinates[0];
			var y = data[i].geo.coordinates[1];
			
			// put points in an array to draw a line with later
			var point = new google.maps.LatLng(x, y);
			pcPoints.push(point);
			
			// put marker on map
			var marker = new google.maps.Marker({
			    map: map,
				title: data[i].created_at,
				position: point,
				icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
			});
			
			// add an event listener for this marker
			bindInfoWindow(marker, map, pcInfoWindow, "<p>" + data[i].text + "</p>");
			
		}
	}
	
	// draw vector path
	var line = new google.maps.Polyline({
	    path: pcPoints,
	    strokeColor: "#599ce5",
	    strokeOpacity: 1.0,
		strokeWeight: 8
	});
	line.setMap(map);
  })	
  
}

function bindInfoWindow(marker, map, infowindow, html) { 
	google.maps.event.addListener(marker, 'mouseover', function() { 
		console.log('here');
		if(lastOpenInfoWin) lastOpenInfoWin.close();
	    lastOpenInfoWin = infowindow;
	    infowindow.setContent(html); 
		infowindow.open(map, marker);
	}); 
}

var lastOpenInfoWin = null;

function add_marker(lat, lon, cs) {

  var position = new google.maps.LatLng(lat, lon);
  var m = new google.maps.Marker({
    position: position,
    map: map,
    title: "Thank you!"
  });
  
  var infowindow = new google.maps.InfoWindow({
    content: cs,
    maxWidth:250
  });
  
  m.setZIndex(2);
  //open infowindo on click event on marker.
  google.maps.event.addListener(m, 'mouseover', function() {
    if(lastOpenInfoWin) lastOpenInfoWin.close();
    lastOpenInfoWin = infowindow;
    infowindow.open(m.get('map'), m);
  }); 
}

function stristr (haystack, needle, bool) {
  var pos = 0;
  haystack += '';
  pos = haystack.toLowerCase().indexOf((needle + '').toLowerCase());
  if (pos == -1) {
    return false;
  } else {
    if (bool) {
      return haystack.substr(0, pos);
    } else {
      return haystack.slice(pos);
    }
  }
}

$().ready(function(){

  // donations
  $.getJSON('https://api.justgiving.com/fbfeb0e5/v1/fundraising/pages/backonmyfeet/donations?format=json&callback=?', {},  function (data) {
      var donations = data.donations;

    // plot donation markers
    $.each(donations, function(index, value) {
      if(index === 0) {
        var extra = 0;
      } else {
        var extra = index;
      }
      var tt = "onclick=\"window.open('http://twitter.com/home?status=I donated money to Back On My Feet, you should do the same! See my message for the guys: www.backonmyfeet.co.uk/d.php?id="+index+"','Share','left=20,top=20,width=600,height=400,toolbar=0,resizable=0'); return false;\"";
      var ft = "onclick=\"window.open('http://www.facebook.com/sharer.php?u=http://www.backonmyfeet.co.uk/d.php?id="+index+"','Share','left=20,top=20,width=600,height=400,toolbar=0,resizable=0'); return false;\"";
      var share = "<p style=\"text-align:right; margin: 5px 0 0 0;\"><a "+tt+" href=\"#\"><img src=\"images/btn-twitter-small.png\"></a>&nbsp;&nbsp;<a "+ft+" href=\"#\"><img src=\"images/btn-facebook-small.png\"></a></p>";
      if(value.message != "") {
        add_marker(henleyCoords[extra].lat, henleyCoords[extra].long, "<p style=\"color: #d9593d; font-size: 13px; text-transform: uppercase\">"+value.message+"<br><br>"+value.donorDisplayName+"<br>Donated "+parseInt(value.amount, 10)+" steps</p>"+share);
      } else {
        add_marker(henleyCoords[extra].lat, henleyCoords[extra].long, "<p style=\"color: #d9593d; font-size: 13px; text-transform: uppercase\">"+value.donorDisplayName+"<br>Donated "+parseInt(value.amount, 10)+" steps</p>"+share);
      }
    });

    // bind search handler
    $("#search-button").click(function(){
      var t = $("#search-button");
      setTimeout(function(){
        var si = $("#search-input").val().toLowerCase();
        if(si == "") {
          t.animate({top:14}, 50).delay(50).animate({top:34}, 50).animate({top:14}, 50).delay(50).animate({top:34}, 50).animate({top:14}, 50).delay(50).animate({top:34}, 50).delay(50).animate({top:24}, 50);
          return false;
        }
        var matches = 0,
            donation_texts = [];
        $("#multiple-donations div").html("");
        $("#multiple-donations #controls").hide();
        $.each(donations, function(index, value) {
          var sp = value.donorDisplayName.toLowerCase();
          if(sp.match(si)) {
            matches+=1;
            var tt = "onclick=\"window.open('http://twitter.com/home?status=I donated money to Back On My Feet, you should do the same! See my message for the guys: www.backonmyfeet.co.uk/d.php?id="+index+"','Share','left=20,top=20,width=600,height=400,toolbar=0,resizable=0'); return false;\"";
            var ft = "onclick=\"window.open('http://www.facebook.com/sharer.php?u=http://www.backonmyfeet.co.uk/d.php?id="+index+"','Share','left=20,top=20,width=600,height=400,toolbar=0,resizable=0'); return false;\"";
            var share = "<span style=\"display: block; text-align:right; padding: 0 40px; margin: 5px 0 0 0;\"><a "+tt+" href=\"#\"><img src=\"images/btn-twitter-small.png\"></a>&nbsp;&nbsp;<a "+ft+" href=\"#\"><img src=\"images/btn-facebook-small.png\"></a></span>";
            if(value.message != "") {
              var pp = "<p style=\"font-size: 13px; text-transform: uppercase\">"+value.message+"<br><br>"+value.donorDisplayName+"<br>Donated "+value.amount+" steps"+share+"</p>";
            } else {
              var pp = "<p style=\"font-size: 13px; text-transform: uppercase\">"+value.donorDisplayName+"<br>Donated "+value.amount.toFixed(2)+" steps"+share+"</p>";
            }
            $("#multiple-donations div").append(pp);
          }
        });
        if(matches > 0) {
          $("#multiple-donations .close").click(function(){
            $("#articles_overlay").fadeOut(250);
            $("#multiple-donations").delay(250).fadeOut(250);
          });
          $("#multiple-donations p").eq(0).show();
          $("#articles_overlay").fadeIn(250);
          $("#multiple-donations").delay(250).fadeIn(250);
          if(matches > 1) {
            var controls = $("#multiple-donations #controls"),
                active_donation = 0;
            
            controls.show();
            controls.click(function(){
              if($(this).find('li').hasClass('next')) {
                var hide = $("#multiple-donations p").eq(active_donation);
                if(active_donation == matches-1) {
                  var show = $("#multiple-donations p").eq(0);
                  active_donation = 0;
                } else {
                  var show = $("#multiple-donations p").eq(active_donation+1);
                  active_donation+=1;
                }
                hide.fadeOut(250);
                show.delay(500).fadeIn(250);
              } else {
                var hide = $("#multiple-donations p").eq(active_donation);
                if(active_donation == 0) {
                  var show = $("#multiple-donations p").eq(matches-1);
                  active_donation = matches-1;
                } else {
                  var show = $("#multiple-donations p").eq(active_donation-1);
                  active_donation-=1;
                }
                hide.fadeOut(250);
                show.delay(500).fadeIn(250);
              }
            })
          }
        } else {
          t.animate({top:14}, 50).delay(50).animate({top:34}, 50).animate({top:14}, 50).delay(50).animate({top:34}, 50).animate({top:14}, 50).delay(50).animate({top:34}, 50).delay(50).animate({top:24}, 50);
        }
      }, 100);
    });

  });

  // total
  $.getJSON('https://api.justgiving.com/fbfeb0e5/v1/fundraising/pages/backonmyfeet?format=json&callback=?', {},  function (data) {
      console.log("Total = ", parseInt(data.totalRaisedOffline, 10) + parseInt(data.totalRaisedOnline, 10));
  });

  var hash = window.location.hash;
  
  $.getJSON('http://api.jo.je/virginmoneygiving/jsonp.php?d=177727&nocache=1&callback=?', {},  function (data) {    
    $("#steps").html(data.money_total.replace(".00", ""));
    var donations = "";
    data.donations = data.donations.reverse();    
    // $.each(data.donations, function(index, value) {
    //   if(index == 0) {
    //     var extra = 0;
    //   } else {
    //     var extra = index;
    //   }
    //   var tt = "onclick=\"window.open('http://twitter.com/home?status=I donated money to Back On My Feet, you should do the same! See my message for the guys: www.backonmyfeet.co.uk/d.php?id="+index+"','Share','left=20,top=20,width=600,height=400,toolbar=0,resizable=0'); return false;\"";
    //   var ft = "onclick=\"window.open('http://www.facebook.com/sharer.php?u=http://www.backonmyfeet.co.uk/d.php?id="+index+"','Share','left=20,top=20,width=600,height=400,toolbar=0,resizable=0'); return false;\"";
    //   var share = "<p style=\"text-align:right; margin: 5px 0 0 0;\"><a "+tt+" href=\"#\"><img src=\"images/btn-twitter-small.png\"></a>&nbsp;&nbsp;<a "+ft+" href=\"#\"><img src=\"images/btn-facebook-small.png\"></a></p>";
    //   if(value.message != "") {
    //     add_marker(positions[extra].lat, positions[extra].long, "<p style=\"color: #d9593d; font-size: 13px; text-transform: uppercase\">"+value.message+"<br><br>"+value.person+"<br>Donated "+value.amount.replace(".00", "")+" steps</p>"+share);
    //   } else {
    //     add_marker(positions[extra].lat, positions[extra].long, "<p style=\"color: #d9593d; font-size: 13px; text-transform: uppercase\">"+value.person+"<br>Donated "+value.amount.replace(".00", "")+" steps</p>"+share);
    //   }
    // });
    if(hash.match('donation:')) {
      hash = hash.replace('#donation:', '');
      if(data.donations[hash].message != "") {
        var p = $("<p />").html(data.donations[hash].message+"<br><br>"+data.donations[hash].person+"<br>"+"Donated "+data.donations[hash].amount.replace(".00", "")+" steps");
      } else {
        var p = $("<p />").html(data.donations[hash].person+"<br>"+"Donated "+data.donations[hash].amount.replace(".00", "")+" steps");
      }
      $("#articles_overlay").fadeIn(250);
      $("#donation").append(p).delay(250).fadeIn(250);
    }else if(hash.match('video')) {
      $("#articles_overlay").fadeIn(250);
      $("#video").delay(251).fadeIn(250);
      $("#video .close").click(function(){
        $("#video").fadeOut(250);
        setTimeout(function(){
          $("#video").remove();
        }, 250);
        $("#articles_overlay").delay(250).fadeOut(250);
      })
    } else {
      change_ze_menu($("nav a").eq(0));
    }
    // $("#search-button").click(function(){
    //   var t = $("#search-button");
    //   setTimeout(function(){
    //     var si = $("#search-input").val().toLowerCase();
    //     if(si == "") {
    //       t.animate({top:14}, 50).delay(50).animate({top:34}, 50).animate({top:14}, 50).delay(50).animate({top:34}, 50).animate({top:14}, 50).delay(50).animate({top:34}, 50).delay(50).animate({top:24}, 50);
    //       return false;
    //     }
    //     var matches = 0,
    //         donation_texts = [];
    //     $("#multiple-donations div").html("");
    //     $("#multiple-donations #controls").hide();
    //     $.each(data.donations, function(index, value) {
    //       var sp = value.person.toLowerCase();
    //       if(sp.match(si)) {
    //         matches+=1;
    //         var tt = "onclick=\"window.open('http://twitter.com/home?status=I donated money to Back On My Feet, you should do the same! See my message for the guys: www.backonmyfeet.co.uk/d.php?id="+index+"','Share','left=20,top=20,width=600,height=400,toolbar=0,resizable=0'); return false;\"";
    //         var ft = "onclick=\"window.open('http://www.facebook.com/sharer.php?u=http://www.backonmyfeet.co.uk/d.php?id="+index+"','Share','left=20,top=20,width=600,height=400,toolbar=0,resizable=0'); return false;\"";
    //         var share = "<span style=\"display: block; text-align:right; padding: 0 40px; margin: 5px 0 0 0;\"><a "+tt+" href=\"#\"><img src=\"images/btn-twitter-small.png\"></a>&nbsp;&nbsp;<a "+ft+" href=\"#\"><img src=\"images/btn-facebook-small.png\"></a></span>";
    //         if(value.message != "") {
    //           var pp = "<p style=\"font-size: 13px; text-transform: uppercase\">"+value.message+"<br><br>"+value.person+"<br>Donated "+value.amount+" steps"+share+"</p>";
    //         } else {
    //           var pp = "<p style=\"font-size: 13px; text-transform: uppercase\">"+value.person+"<br>Donated "+value.amount+" steps"+share+"</p>";
    //         }
    //         $("#multiple-donations div").append(pp);
    //       }
    //     });
    //     if(matches > 0) {
    //       $("#multiple-donations .close").click(function(){
    //         $("#articles_overlay").fadeOut(250);
    //         $("#multiple-donations").delay(250).fadeOut(250);
    //       });
    //       $("#multiple-donations p").eq(0).show();
    //       $("#articles_overlay").fadeIn(250);
    //       $("#multiple-donations").delay(250).fadeIn(250);
    //       if(matches > 1) {
    //         var controls = $("#multiple-donations #controls"),
    //             active_donation = 0;
            
    //         controls.show();
    //         controls.click(function(){
    //           if($(this).find('li').hasClass('next')) {
    //             var hide = $("#multiple-donations p").eq(active_donation);
    //             if(active_donation == matches-1) {
    //               var show = $("#multiple-donations p").eq(0);
    //               active_donation = 0;
    //             } else {
    //               var show = $("#multiple-donations p").eq(active_donation+1);
    //               active_donation+=1;
    //             }
    //             hide.fadeOut(250);
    //             show.delay(500).fadeIn(250);
    //           } else {
    //             var hide = $("#multiple-donations p").eq(active_donation);
    //             if(active_donation == 0) {
    //               var show = $("#multiple-donations p").eq(matches-1);
    //               active_donation = matches-1;
    //             } else {
    //               var show = $("#multiple-donations p").eq(active_donation-1);
    //               active_donation-=1;
    //             }
    //             hide.fadeOut(250);
    //             show.delay(500).fadeIn(250);
    //           }
    //         })
    //       }
    //     } else {
    //       t.animate({top:14}, 50).delay(50).animate({top:34}, 50).animate({top:14}, 50).delay(50).animate({top:34}, 50).animate({top:14}, 50).delay(50).animate({top:34}, 50).delay(50).animate({top:24}, 50);
    //     }
    //   }, 100);
    // });
  });
  
  //change_ze_menu($("nav a").eq(0));
  
  $("nav a").click(function(){
    change_ze_menu($(this));
    return false;
  });
  
  $("#journal .close-open").toggle(function(){
    $("#journal").addClass('collapsed');
  }, function(){
    $("#journal").removeClass('collapsed');
  });
  
  $("#articles #controls li.next").click(function(){
    $("#articles").delay(250).removeClass('negative');
    var hide = $(".current-window"),
        inx = hide.index()-2,
        current_nav = $("nav a.active").attr('id'),
        next = $("#articles article").eq(inx+1),
        parent = next.attr('parent');
  
    if(next.hasClass('negative')) {
      $("#articles").delay(250).addClass('negative');
    }    
    
    if(inx == $("#articles article").length-1) {
      next = $("#articles article").eq(0);
    }
    
    if(parent != current_nav) {
      $("nav a.active").removeClass('active');
      $("nav a#"+parent).addClass('active');
      if(inx == $("#articles article").length-1) {
        $("#about").addClass("active");
      }
    }
    hide.fadeOut(250).removeClass('current-window');
    next.delay(250).fadeIn(250).addClass('current-window');
    
  });
  
  $("#articles #controls li.prev").click(function(){
    $("#articles").delay(250).removeClass('negative');
    var hide = $(".current-window"),
        inx = hide.index()-2,
        current_nav = $("nav a.active").attr('id'),
        next = $("#articles article").eq(inx-1),
        parent = next.attr('parent');
    
    if(next.hasClass('negative')) {
      $("#articles").delay(250).addClass('negative');
    }
        
    if(inx == 0) {
      next = $("#articles article").eq($("#articles article").length-1);
    }
    
    if(parent != current_nav) {
      $("nav a.active").removeClass('active');
      $("nav a#"+parent).addClass('active');
    }
    hide.fadeOut(250).removeClass('current-window');
    next.delay(250).fadeIn(250).addClass('current-window');
    
  });
  
  //$("#buy-steps").click(function(){
  //  $("#iframe").fadeIn(500);
  //  return false;
  //});
  
  $("header").hover(function(){
    $("#foot").css({top: 64});
  }, function(){
    $("#foot").css({top: -245});
  });
  
  $("#donation .close").click(function(){
    $("#donation").fadeOut(250);
    $("#articles_overlay").delay(250).fadeOut(250);
  });

  
  $("#articles .close").click(function(){
    $("article").fadeOut(250);
    $("#articles").delay(250).fadeOut(250);
  });
  
  $("#iframe .close").click(function(){ $("#iframe").fadeOut(500); });
  
  $("#articles .close, #articles_overlay").click(function(){
    $("#articles .current-window").fadeOut(250).removeClass('current-window');
    $("#articles").delay(250).fadeOut(250);
    $("#articles_overlay").delay(500).fadeOut(250);
    $("#donation").delay(250).fadeOut(250);
    $("nav a.active").removeClass('active');
    $("#video").fadeOut(250);
    setTimeout(function(){
      $("#video").remove();
    }, 250)
    return false;
  });
  
  initialize();
  
  re_size();
  
});
