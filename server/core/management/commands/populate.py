import csv

from django.core.management.base import BaseCommand, CommandError
from core.models import CustomUser

class Command(BaseCommand):
    help = 'Closes the specified poll for voting'

    def add_arguments(self, parser):
        pass

    def handle(self, *args, **options):
        path = "/home/thomas/insurhack/customerdata2/ZurichTestUserData/NEW_P_NAPA.csv"

        with open(path) as f:
            reader = csv.reader(f, delimiter=',')
            next(f)
            for row in reader:
#                if CustomUser.objects.get(email=row[7]) != None:
#                    continue
                obj, created = CustomUser.objects.get_or_create(
                    lfd_id=row[0],
                    parent_lfd_id=row[1],
                    pnr_nr=row[2],
                    title=row[3],
                    given_name=row[4],
                    surname=row[5],
                    gender=row[6],
                    email=row[7],
                    browser_user_agent=row[8],
                    telephone_number=row[9],
                    telephone_country_code=row[10],
                    birthday=row[11],
                    age=row[12],
                    tropical_zodiac=row[13],
                    cc_type=row[14],
                    cc_number=row[15],
                    cvv2=row[16],
                    cc_expires=row[17],
                    occupation=row[18],
                    company=row[19],
                    vehicle=row[20],
                    domain=row[21],
                    blood_type=row[22],
                    pounds=row[23],
                    kilograms=row[24],
                    feet_inches=row[25],
                    centimeters=row[26],
                    profile_picture='',
                    maried='',
                    kids='',
                    income='',
                    expenses='',
                    fitness='',
                    activities='',
                    home_town='',
                    country='',
                    education='',
                    devices='',
                )

            self.stdout.write(self.style.SUCCESS('Successfully closed poll "%s"' % poll_id))


