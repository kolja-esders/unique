import csv

from django.core.management.base import BaseCommand, CommandError
from core.models import SalaryMapping

class Command(BaseCommand):
    help = 'Maps the salary to the occupation'

    def add_arguments(self, parser):
        pass

    def handle(self, *args, **options):
        path = "../../../data/map_job_income.csv"
        with open(path) as f:
            reader = csv.reader(f, delimiter=';')
            next(f)
            for row in reader:
                pass
            obj, created = SalaryMapping.objects.get_or_create(
                occupation=row[0],
                salary=row[1],
            )

            self.stdout.write(self.style.SUCCESS('Successfully loaded SalaryMapping.'))


