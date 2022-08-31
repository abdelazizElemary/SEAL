from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path, re_path

from .views import success

api_patterns=[
    path('files/',include('backend.urls'))
]
urlpatterns = [
    re_path("admin/success",success,name="success"),
    path('admin/', admin.site.urls),
    path("api/v1/", include(api_patterns)),
] 

urlpatterns += static(settings.MEDIA_PATH, document_root=settings.MEDIA_ROOT)
