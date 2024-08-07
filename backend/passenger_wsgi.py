import sys
import os
from django.core.wsgi import get_wsgi_application

# Add the path to your Django project's root directory
sys.path.append('/home/bahi12/dev/lms/backend')

# Set the DJANGO_SETTINGS_MODULE environment variable
os.environ['DJANGO_SETTINGS_MODULE'] = 'core.settings'

# Import the Django application
application = get_wsgi_application()