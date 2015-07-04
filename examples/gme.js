google.maps.event.addDomListener(window, 'load', function() {
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 4,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  var panelDiv = document.getElementById('panel');

  var data = new storeLocator.GMEDataFeed({
    tableId: '02649977418458951781-11613121305523030954',
    apiKey: 'AIzaSyC8YoT5FJpDZTj4WNVyhyTE_Zkv6CQExyY',
    propertiesModifier: function(props) {
      var shop = join([props.Shp_num_an, props.Shp_centre], ', ');
      var locality = join([props.Locality, props.Postcode], ', ');

      return {
        id: props.uuid,
        title: props.Fcilty_nam,
        address: join([shop, props.Street_add, locality], '<br>'),
        hours: props.Hrs_of_bus
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
