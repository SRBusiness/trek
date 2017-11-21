const baseUrl = 'https://trektravel.herokuapp.com/trips'
// ' Continent: ' + trip.continent + ' Weeks: ' + trip.weeks +
$(document).ready(()=> {

  let loadTrips = function loadTrips() {
    $.get(baseUrl, (response) => {
      console.log('success!');
      response.forEach(function(trip) {
        let tripInfo = `<li><h2 data-id=${trip.id}>` + trip.name + '<h2></li>';
        $('#show-trips ul').append(tripInfo)
      });
    })
    .fail(function(response){
      console.log(response);
      $('#fail').html('<p>Request was unsuccessful</p>');
    })
    .always(function(){
      console.log('always even if we have success or failure');
    });
  };

  let loadTrip = function loadTrip(id){
    $.get(baseUrl + `/${id}`, (response) => {
      console.log('success!');
      console.log(response);

      let tripInfo = `
      <p>ID: ${response.id}</p>
      <p>Category: ${response.category}</p>
      <p>Destination: ${response.continent}</p>
      <p>Details: ${response.about}</p>
      <p>Cost: $${response.cost}</p>
      <p>Length: ${response.weeks} weeks</p>
      `;
      $('#show-trip').html(tripInfo);
    })
    .fail(function(response){
      console.log(response);
      $('#fail').html('<p>Request was unsuccessful</p>')
    })
    .always(function(){
      console.log('always even if we have success or failure');
    });
  };

  // EVENTS
  $('#show-trips ul').on('click', 'h2', function(){
    let tripId = $(this).attr('data-id');
    console.log('show trips event works test test test test');
    loadTrip(tripId);
  });

  $('#load').on('click', function(){
    loadTrips();
  });
});
