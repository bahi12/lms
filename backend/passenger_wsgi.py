import sys
import os
from django.core.wsgi import get_wsgi_application

# Add the path to your Django project's root directory
sys.path.append('/home/bahi12/dev/lms/backend')

# Set the DJANGO_SETTINGS_MODULE environment variable
os.environ['DJANGO_SETTINGS_MODULE'] = 'core.settings'

# Activate your virtual environment (if applicable)
activate_this = '/home/bahicom/virtualenv/repositories/lms/backend/3.9/bin/activate'
with open(activate_this) as file_:
    exec(file_.read(), dict(__file__=activate_this))

# Import the Django application
application = get_wsgi_application()
