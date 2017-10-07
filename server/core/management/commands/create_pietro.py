from server.your_insurance.helpers.profiler.builder import create_profile

from django.core.management.base import BaseCommand, CommandError



class Command(BaseCommand):

    def handle(self, *args, **options):
        create_profile("EAACEdEose0cBAIQBk11ynMuvN3SgrnXgXDaAj1QvZAxkzHMglW1UpoRaHr1xJZCb6o0xNZAsfRQJs5vA0bmkq9ZCTqF10yEmXW73GlnUZCqIXvbbFcZBmHLgQz9F98ZAusHgFa0xuxUVPmJXGeyT0GQimZCKDZCMqc84NM9x61Iev7HvudbSYx3TSdZAJWYg3ye3sVsO8nYnckSovnRSk3lRtPxbUVktugElwZD")