import csv

from django.core.management.base import BaseCommand, CommandError
from core.models import Person
from core.models import Activity
from core.models import FamilyMember
from core.models import Device
from core.models import LifestyleEntity
from core.models import Location
from core.models import Injury
from core.models import CustomUser
from core.models import Review
from core.models import SalaryMapping
from core.models import Story
from core.models import DetectionReason


class Command(BaseCommand):
    help = 'Closes the specified poll for voting'

    def add_arguments(self, parser):
        pass

    def handle(self, *args, **options):
        # Patrick: /home/patrick/InsurHack/ZurichTestUserData (2)
        path = "/home/patrick/InsurHack/ZurichTestUserData (2)/NEW_P_NAPA.csv"

        with open(path) as f:
            reader = csv.reader(f, delimiter=',')
            next(f)
            counter = 0
            for row in reader:
                counter = counter + 1
#                if CustomUser.objects.get(email=row[7]) != None:
#                    continue
                detection_reason, created = DetectionReason.objects.get_or_create(
                    href_to_image = "image",
                    text = "text",
                    date = "01/01/2010",
                    type = "type"
                )

                person, created = Person.objects.get_or_create(
                    lfd_id=row[0],
                    parent_lfd_id=row[1],
                    pnr_nr=row[2],
                    title=row[3],
                    given_name=row[4],
                    surname=row[5],
                    gender=row[6],
                    email_address=row[7],
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
                    profile_picture='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Pietro-Lombardi.jpg/220px-Pietro-Lombardi.jpg',
                    maried='',
                    kids='',
                    income='',
                    expenses='',
                    fitness='',
                    # activities='',
                    home_town='',
                    country='',
                    education='',
                    #devices='',
                )

                obj, created = Activity.objects.get_or_create(
                    frequency = 5,
                    name = 'activity',
                    detection_reason =  detection_reason,
                    person = person
                )

                obj, created = Device.objects.get_or_create(
                    estimated_price = '500',
                    type = 'type',
                    icon = 'klns',
                    detection_reason = detection_reason
                )

                obj, created = FamilyMember.objects.get_or_create(
                    name = 'familyMember',
                    age = '33',
                    gender = 'f',
                    relation = 'married',
                    detection_reason =  detection_reason
                )

                obj, created = LifestyleEntity.objects.get_or_create(
                    name ='LifeStyle',
                    frequency ='2',
                    detection_reason = detection_reason
                )

                obj, created = Location.objects.get_or_create(
                    name ='Cologne',
                    example_image ='asdfg',
                    detection_reason = detection_reason
                )

                obj, created = Injury.objects.get_or_create(
                    date ='2017-10-08',
                    type = 'type',
                    detection_reason = detection_reason
                )

                obj, created = CustomUser.objects.get_or_create(

                    email = str(counter)+'test@test.com',

                    date_joined = '2010-01-01',
                    username = 'userName',
                    first_name = 'firstName',
                    last_name = 'lastName',
                    person = person
                )

                obj, created = SalaryMapping.objects.get_or_create(
                    occupation = 'softwareIng',
                    salary = '400000'
                )

                obj, created = Story.objects.get_or_create(
                    author = "Du",
                    content = "qwert"

                )




            self.stdout.write(self.style.SUCCESS('Successfully closed poll "%s"' % poll_id))
