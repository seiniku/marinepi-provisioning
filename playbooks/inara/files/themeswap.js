function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}

var supports_storage = supports_html5_storage();
function set_theme(theme) {
  $('link[title="main"]').attr('href', theme);
  if (supports_storage) {
    localStorage.theme = theme;
  }
}
if (supports_storage) {
  var theme = localStorage.theme;
  if (theme) {
    set_theme(theme);
  }
}
	$(document).ready(function () {
		$("#theme").click(function () { 
			var dark = "/bootstrap/dist/css/dark.min.css";
 			var light =  "/bootstrap/dist/css/bootstrap.min.css";
			if ($('link[title="main"]').attr('href') == dark)  
				set_theme(light);
			else
				set_theme(dark);
		});
	});
