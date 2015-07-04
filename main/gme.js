google.maps.event.addDomListener(window, 'load', function() {
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 4,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var panelDiv = document.getElementById('panel');

  var data = new storeLocator.GMEDataFeed({
    tableId: '02649977418458951781-09757940799309423091',
    apiKey: 'AIzaSyCmcx59BKzpHdysrF-SVvQ2PbRiwqCiO3s',
    propertiesModifier: function(props) {

      return {
        address: props.Address,
      };
    }
  });

  var view = new storeLocator.View(map, data, {
    geolocation: true
  });

  new storeLocator.Panel(panelDiv, {
    view: view
  });
});

/**
 * Joins elements of an array that are non-empty and non-null.
 * @private
 * @param {!Array} arr array of elements to join.
 * @param {string} sep the separator.
 * @return {string}
 */
function join(arr, sep) {
  var parts = [];
  for (var i = 0, ii = arr.length; i < ii; i++) {
    arr[i] && parts.push(arr[i]);
  }
  return parts.join(sep);
}
