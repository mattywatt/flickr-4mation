from flask import Flask
app = Flask(__name__)
app.config.from_object('config') # Now we can access the configuration variables via app.config["VAR_NAME"].

import flickrApp.views