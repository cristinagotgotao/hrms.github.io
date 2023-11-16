<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BHRMS</title>
    <link rel="shortcut icon" href="imgs/384543871_724787162797310_8734564214874848058_n-removebg-preview.png" type="image/x-icon">
    <link rel="stylesheet" href="style.css">
</head>
<body>
     <!--Navigation-->
     <nav>
        <div class="navigation">
            <img class="logo" src="imgs/2.png" alt="Logo">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
        </div>
        <div class="top"></div>
    </nav>
    <!--Main-->
    <main>
        <div class="design">
            <div class="container">
                <div class="text">
                    <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     </h2>
                    <h2>BARANGAY HEALTH RECORD MANAGEMENT SYSTEM</h2>
                    <h4><i>contributes to better healthcare services
                        public health monitoring and overall community well-being</i></h4>
                        <h3>&nbsp;</h3>
                         </h2><button type="button">Login</button>
                         <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         </h2>
                </div>
            </div>
        </div>
        <!--Features-->
        <div class="features">
            <div class="container">
               <div class="ft">
                <h2>Features</h2>
                <h3>Patient Demographics</h3>
                <h4>Captures and stores patient demographic information</h4>
                <h3>Appointment and Scheduling</h3>
                <h4>Schedule appointments, get an automated confirmation and reminders</h4>
                <h3>Health Records</h3>
                <h4>Creates and stores health records for the residents</h4>
                <h3>Immunization Tracking</h3>
                <h4>Keep records of vaccinations and immunization schedules for children and adults.</h4>
                <h3>Maternal and Child Health Records</h3>
                <h4>Record information related to prenatal care, childbirth, infant and child health, and family planning</h4>
                <h3>Medical Management</h3>
                <h4>Record prescribed medications, dosages, adherence, and treatment plans.</h4>
                <button type="button" >others..</button>             
               </div>
            </div>
        </div>
        <!--Contact-->
        <div class="contact">
            <div class="container">
                <div class="info">
                    <h2>Contact Us</h2>
                    <h4>Barangay Health Service<br>
                        09123456789</h4>
                </div>
            </div>
        </div>
        <!--Footer-->
        <div class="footer">
            <div class="container">
                <div class="foot">
                  <h3>All rights reserved © 2024</h3>
            </div>
        </div>
    </main>
<!-- Code injected by live-server -->
<script>
	// <![CDATA[  <-- For SVG support
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
	// ]]>
</script>
</body>
</html>