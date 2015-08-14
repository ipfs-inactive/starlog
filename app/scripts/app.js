
var app = document.querySelector('#app')

app.computeUrl = function (path, params) {
  var params = params ? JSON.parse(params) : {};
  return MoreRouting.urlFor(path, params);
}

app.addEventListener('dom-change', function () {
  var ipfs = document.querySelector('ipfs-api').api
  //var feed = document.querySelector('feed-view')
  //var init = document.querySelector('initialize-feed')

  ipfs.id(function (err, res) {
    if (err) throw err
    var path = '/ipns/' + res.ID

    ipfs.object.get(path, function (err, res) {
      if (err) throw err
      console.log(res)

      var type
      try {
        type = JSON.parse(res.Data).type
      } catch (e) {}

      if (type === 'starlog-feed') {
        // feed.setAttribute('path', path)
        // feed.setAttribute('hidden', false)
      } else {
        page('/init')
      }
    })

  })

});
