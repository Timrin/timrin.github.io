var map;
var geocoder;
var marker;
var serviceAreaTier1;
var serviceAreaTier2;
var serviceResultAddress;
var serviceResultArea;

window.onload = () => {
    const searchButton = document.getElementById("address-search");
    searchButton.addEventListener("click", () => { codeAddress() })
    serviceResultAddress = document.getElementById("service-result-address");
    serviceResultArea = document.getElementById("service-result-area");
}

function initMap() {
    geocoder = new google.maps.Geocoder();
    map = new google.maps.Map(document.getElementById("map"), {
        mapId: '7b2815bb20296df',
        zoom: 11,
        center: { lat: 55.612, lng: 13.00000 },
        mapTypeId: "terrain",
        disableDefaultUI: true,
        zoomControl: true
    });

    // Define the LatLng coordinates for the polygon's path.
    const t1ServiceAreaCoords = [
        {
            lng: 12.977286139255568,
            lat: 55.61982462168834
        },
        {
            lng: 12.970894769879557,
            lat: 55.61473674514672
        },
        {
            lng: 12.971489614364618,
            lat: 55.61295947442305
        },
        {
            lng: 12.971420755748627,
            lat: 55.61260212357057
        },
        {
            lng: 12.971662812996069,
            lat: 55.61249597998197
        },
        {
            lng: 12.972313181736427,
            lat: 55.61058047410897
        },
        {
            lng: 12.972060509672186,
            lat: 55.61022552255211
        },
        {
            lng: 12.973739362640067,
            lat: 55.609140517347825
        },
        {
            lng: 12.975946122508864,
            lat: 55.60811643988631
        },
        {
            lng: 12.978870865162932,
            lat: 55.60603765572421
        },
        {
            lng: 12.978418769635857,
            lat: 55.60575598783056
        },
        {
            lng: 12.980131970662526,
            lat: 55.60459108117702
        },
        {
            lng: 12.983406238066344,
            lat: 55.60581511904031
        },
        {
            lng: 12.990048681127032,
            lat: 55.60703309204881
        },
        {
            lng: 12.990421315287364,
            lat: 55.606510721903504
        },
        {
            lng: 12.993681753173817,
            lat: 55.60671522831264
        },
        {
            lng: 12.996198547805875,
            lat: 55.60745519953531
        },
        {
            lng: 12.997918374417054,
            lat: 55.6079001766457
        },
        {
            lng: 12.997025133192693,
            lat: 55.609533135448174
        },
        {
            lng: 12.996498501524826,
            lat: 55.60954412971955
        },
        {
            lng: 12.995739280615538,
            lat: 55.61241489400098
        },
        {
            lng: 12.993607075062954,
            lat: 55.61286919497684
        },
        {
            lng: 12.991908317382126,
            lat: 55.61424554702586
        },
        {
            lng: 12.990184300085389,
            lat: 55.61804464315833
        },
        {
            lng: 12.989111787620885,
            lat: 55.619071100686824
        },
        {
            lng: 12.985093798760943,
            lat: 55.618555609619165
        },
        {
            lng: 12.984385389142176,
            lat: 55.620676128037644
        },
        {
            lng: 12.979441233226282,
            lat: 55.62019988053365
        },
        {
            lng: 12.977286139255568,
            lat: 55.61982462168834
        }
    ];

    const t2ServiceAreaCoords = [
        {
            lng: 13.09769291148686,
            lat: 55.652491644810624
        },
        {
            lng: 13.05008169986803,
            lat: 55.65211192403953
        },
        {
            lng: 13.050737498972637,
            lat: 55.6494828470827
        },
        {
            lng: 13.052991593676978,
            lat: 55.64646746150957
        },
        {
            lng: 13.050845939790818,
            lat: 55.640788593176616
        },
        {
            lng: 13.04718167307076,
            lat: 55.639574900064844
        },
        {
            lng: 13.034136872999046,
            lat: 55.6449759133927
        },
        {
            lng: 13.029251551314815,
            lat: 55.644361819397915
        },
        {
            lng: 13.025555057533978,
            lat: 55.6420839658934
        },
        {
            lng: 13.012438479596192,
            lat: 55.63930793787193
        },
        {
            lng: 12.997044079584171,
            lat: 55.63773186269474
        },
        {
            lng: 12.991823965651129,
            lat: 55.634784330268545
        },
        {
            lng: 12.989792842894389,
            lat: 55.633122533953845
        },
        {
            lng: 12.990597065739724,
            lat: 55.62948472879124
        },
        {
            lng: 12.988667029319407,
            lat: 55.627904013342416
        },
        {
            lng: 12.991035831581069,
            lat: 55.622515852480845
        },
        {
            lng: 12.976942063918322,
            lat: 55.61997058492872
        },
        {
            lng: 12.970619977649235,
            lat: 55.61487940751163
        },
        {
            lng: 12.972252677365873,
            lat: 55.60590038753086
        },
        {
            lng: 12.95205798587904,
            lat: 55.5991511255971
        },
        {
            lng: 12.946131714249653,
            lat: 55.59857608487626
        },
        {
            lng: 12.929120822672372,
            lat: 55.59828617786587
        },
        {
            lng: 12.9266888580087,
            lat: 55.59564946617395
        },
        {
            lng: 12.922432411966378,
            lat: 55.59518103360436
        },
        {
            lng: 12.908447277643962,
            lat: 55.582572565029
        },
        {
            lng: 12.917828591321246,
            lat: 55.58086900002506
        },
        {
            lng: 12.90622161078683,
            lat: 55.57591797394224
        },
        {
            lng: 12.896591482199419,
            lat: 55.57028286693945
        },
        {
            lng: 12.891513761054767,
            lat: 55.565333313552145
        },
        {
            lng: 12.91168744891491,
            lat: 55.56571548576044
        },
        {
            lng: 12.923500572482805,
            lat: 55.564776114139406
        },
        {
            lng: 12.93147842654021,
            lat: 55.56234848776653
        },
        {
            lng: 12.936946462354362,
            lat: 55.55992062556542
        },
        {
            lng: 12.95109960127915,
            lat: 55.55053626871309
        },
        {
            lng: 12.967828374776438,
            lat: 55.54695839556828
        },
        {
            lng: 13.00452360843228,
            lat: 55.54716893690221
        },
        {
            lng: 13.03245067960777,
            lat: 55.5496268246803
        },
        {
            lng: 13.054222138174623,
            lat: 55.5501381123635
        },
        {
            lng: 13.067094199906446,
            lat: 55.55269526128622
        },
        {
            lng: 13.075584957928491,
            lat: 55.55689466704538
        },
        {
            lng: 13.085390455721537,
            lat: 55.5644548479077
        },
        {
            lng: 13.10650837582051,
            lat: 55.57473510053913
        },
        {
            lng: 13.114325302592846,
            lat: 55.58480369483658
        },
        {
            lng: 13.117299101365006,
            lat: 55.59417753988227
        },
        {
            lng: 13.116835617360906,
            lat: 55.60456366961392
        },
        {
            lng: 13.110714361202064,
            lat: 55.62679130794318
        },
        {
            lng: 13.102856098809948,
            lat: 55.644920950233676
        },
        {
            lng: 13.09769291148686,
            lat: 55.652491644810624
        }
    ];

    // Construct the polygon.
    serviceAreaTier1 = new google.maps.Polygon({
        paths: t1ServiceAreaCoords,
        strokeColor: "#FF0000",
        strokeOpacity: 0.75,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.10,
        clickable: false,
    });

    // Construct the polygon.
    serviceAreaTier2 = new google.maps.Polygon({
        paths: t2ServiceAreaCoords,
        strokeColor: "#0000FF",
        strokeOpacity: 0.75,
        strokeWeight: 2,
        fillColor: "#0000FF",
        fillOpacity: 0.10,
        clickable: false,
    });

    serviceAreaTier2.setMap(map);
    serviceAreaTier1.setMap(map);

    initAddressSearch();
}

function initAddressSearch() {
    const input = document.getElementById("address-input");
    const options = {
        types: ["address"],
        componentRestrictions: { country: "se" },
        locationBias: {lat: 55.593811584199614, lng: 13.031717090391876},
        fields: ["address_components", "geometry", "name"],
    };
    const autocomplete = new google.maps.places.Autocomplete(input, options);

}

function codeAddress() {
    var address = document.getElementById('address-input').value;
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == 'OK') {
            map.setCenter(results[0].geometry.location);

            if (marker) { //Remove the active marker from the map
                marker.position = null;
            }

            marker = new google.maps.marker.AdvancedMarkerElement({
                content: new google.maps.marker.PinElement({background: "#4285f4", glyphColor: "#1a73e8", borderColor: "#1a73e8"}).element,
                map: map,
                position: results[0].geometry.location
            });

            evalMarkerLocation();

        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

function evalMarkerLocation() {
    //Check bounds
    var isWithinServiceArea = google.maps.geometry.poly.containsLocation(marker.position, serviceAreaTier1);
    if (isWithinServiceArea) {
        displayServiceResult("Red");

    } else {
        isWithinServiceArea = google.maps.geometry.poly.containsLocation(marker.position, serviceAreaTier2);

        if (isWithinServiceArea) {
            displayServiceResult("Blue");
        } else {
            displayServiceResult("Outside service area");
        }
    }
}

function displayServiceResult(serviceTier) {
    serviceResultAddress.innerHTML = document.getElementById('address-input').value;
    serviceResultArea.innerHTML = serviceTier;
    document.getElementById("service-result-card").style.maxHeight = "300px";
}


window.initMap = initMap;

