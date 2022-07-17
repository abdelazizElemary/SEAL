from rest_framework import routers

from . import views

app_name = "backend"


router = routers.SimpleRouter()
router.register("", views.DocumnentViewset, basename="documents")

urlpatterns = router.urls
