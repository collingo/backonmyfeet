$().ready(function(){
  
  var hash = window.location.hash;
  
  $.getJSON('http://api.jo.je/virginmoneygiving/jsonp.php?d=177727&nocache=1&callback=?', {},  function (data) {    
    $("#steps").html(data.money_total.replace(".00", ""));
    var donations = "";
    data.donations = data.donations.reverse();    
    $.each(data.donations, function(index, value) {
      if(index == 0) {
        var extra = 0;
      } else {
        var extra = index;
      }
      var tt = "onclick=\"window.open('http://twitter.com/home?status=I donated money to Back On My Feet, you should do the same! See my message for the guys: www.backonmyfeet.co.uk/d.php?id="+index+"','Share','left=20,top=20,width=600,height=400,toolbar=0,resizable=0'); return false;\"";
      var ft = "onclick=\"window.open('http://www.facebook.com/sharer.php?u=http://www.backonmyfeet.co.uk/d.php?id="+index+"','Share','left=20,top=20,width=600,height=400,toolbar=0,resizable=0'); return false;\"";
      var share = "<p style=\"text-align:right; margin: 5px 0 0 0;\"><a "+tt+" href=\"#\"><img src=\"images/btn-twitter-small.png\"></a>&nbsp;&nbsp;<a "+ft+" href=\"#\"><img src=\"images/btn-facebook-small.png\"></a></p>";
      if(value.message != "") {
        add_marker(positions[extra].lat, positions[extra].long, "<p style=\"color: #d9593d; font-size: 13px; text-transform: uppercase\">"+value.message+"<br><br>"+value.person+"<br>Donated "+value.amount.replace(".00", "")+" steps</p>"+share);
      } else {
        add_marker(positions[extra].lat, positions[extra].long, "<p style=\"color: #d9593d; font-size: 13px; text-transform: uppercase\">"+value.person+"<br>Donated "+value.amount.replace(".00", "")+" steps</p>"+share);
      }
    });
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
        $.each(data.donations, function(index, value) {
          var sp = value.person.toLowerCase();
          if(sp.match(si)) {
            matches+=1;
            var tt = "onclick=\"window.open('http://twitter.com/home?status=I donated money to Back On My Feet, you should do the same! See my message for the guys: www.backonmyfeet.co.uk/d.php?id="+index+"','Share','left=20,top=20,width=600,height=400,toolbar=0,resizable=0'); return false;\"";
            var ft = "onclick=\"window.open('http://www.facebook.com/sharer.php?u=http://www.backonmyfeet.co.uk/d.php?id="+index+"','Share','left=20,top=20,width=600,height=400,toolbar=0,resizable=0'); return false;\"";
            var share = "<span style=\"display: block; text-align:right; padding: 0 40px; margin: 5px 0 0 0;\"><a "+tt+" href=\"#\"><img src=\"images/btn-twitter-small.png\"></a>&nbsp;&nbsp;<a "+ft+" href=\"#\"><img src=\"images/btn-facebook-small.png\"></a></span>";
            if(value.message != "") {
              var pp = "<p style=\"font-size: 13px; text-transform: uppercase\">"+value.message+"<br><br>"+value.person+"<br>Donated "+value.amount+" steps"+share+"</p>";
            } else {
              var pp = "<p style=\"font-size: 13px; text-transform: uppercase\">"+value.person+"<br>Donated "+value.amount+" steps"+share+"</p>";
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

var positions = [
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
      center: new google.maps.LatLng(51.261311,-0),
      zoom: 10,
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
  var path = [];
  $(positions).each(function(){
    path.push(new google.maps.LatLng(this.lat, this.long));
  });
  polyline = new google.maps.Polyline({path:path, strokeColor: "#d9583c", strokeOpacity: 1.0, strokeWeight: 5, geodesic: true});
  polyline.setMap(map);
  
  var start_image = "http://bomf.niklaspalm.se/images/label-richmond.png",
      start_position = new google.maps.LatLng(51.45657410651974, -0.3055572509765625),
      end_image = "http://bomf.niklaspalm.se/images/label-brighton.png",
      end_position = new google.maps.LatLng(50.82764913191907, -0.14179229736328125);
      
  var start = new google.maps.Marker({
    position: start_position,
    map: map,
    icon: start_image,
    title: "Start"
  });
  start.setZIndex(1);
  
  var end = new google.maps.Marker({
    position: end_position,
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