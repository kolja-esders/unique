from django.core.management.base import BaseCommand

from server.core.helpers.profiler.builder import create_profile


class Command(BaseCommand):

    def handle(self, *args, **options):
        create_profile("EAACEdEose0cBAAs5hCSFUAguMrcBvimD9rsc1aS3y8IY4hejZBEWUUmV9Xm494md2hG5dT0P86yow80FCBR9OsZCbNm0JpCuYfSeJXZBd2GDoeOMHIBsQE9QYBn9Sd0pdRjthdkf93UWMtJ4lv3zY0I9Wm2tujVZCaYQ0dQ0Xf6izXsEgnWuPl6PCsuKbHTNGhmKWedGAn4TvgfGO9MpI0cbadWmfSkZD")