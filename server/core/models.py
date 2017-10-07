from django.db import models
from django.conf import settings
from django.contrib.auth import get_user_model
from custom_user.models import AbstractEmailUser

class Book(models.Model):
    title = models.CharField(max_length=255)
    author = models.CharField(max_length=255)

    class Meta:
        unique_together = ('title', 'author')

    def __str__(self):
        return self.title + ' (' + self.author + ')'

class Group(models.Model):
    name = models.CharField(max_length=32, unique=True)
    name_url = models.CharField(max_length=64, unique=True)

    @staticmethod
    def get_url_from_name(name):
        return name.strip().lower().replace('.', '').replace(',', '').replace(' ', '-')

class CustomUser(AbstractEmailUser):
    username = models.CharField(max_length=31, blank=True)
    first_name = models.CharField(max_length=31, blank=True)
    last_name = models.CharField(max_length=31, blank=True)
    groups = models.ManyToManyField(Group, through='Membership', symmetrical=False, related_name='users')
    books = models.ManyToManyField(Book, through='BookshelfEntry', symmetrical=False, related_name='users')

class BookshelfEntry(models.Model):
    user = models.ForeignKey(CustomUser)
    book = models.ForeignKey(Book)
    state = models.CharField(max_length = 31) # to-read, read, ...
    rating = models.PositiveSmallIntegerField(null=True)

    class Meta:
        unique_together = ('user', 'book')

class Membership(models.Model):
    user = models.ForeignKey(CustomUser)
    group = models.ForeignKey(Group)

    class Meta:
        unique_together = ('user', 'group')


class Person(models.Model):
    lfd_id = models.CharField(max_length=12, blank=True)
    parent_lfd_id = models.CharField(max_length=12, blank=True)
    pnr_nr = models.CharField(max_length=12, blank=True)
    title = models.CharField(max_length=12, blank=True)
    given_name = models.CharField(max_length=128, blank=True)
    surname = models.CharField(max_length=128, blank=True)
    gender = models.CharField(max_length=32, blank=True)
    email_address = models.CharField(max_length=256, blank=True)
    browser_user_agent = models.CharField(max_length=512, blank=True)
    telephone_number = models.CharField(max_length=64, blank=True)
    telephone_country_code = models.CharField(max_length=12, blank=True)
    birthday = models.CharField(max_length=24, blank=True)
    age = models.CharField(max_length=3, blank=True)
    tropical_zodiac = models.CharField(max_length=64, blank=True)
    cc_type = models.CharField(max_length=64, blank=True)
    cc_number = models.CharField(max_length=64, blank=True)
    cvv2 = models.CharField(max_length=12, blank=True)
    cc_expires = models.CharField(max_length=64, blank=True)
    occupation = models.CharField(max_length=256, blank=True)
    company = models.CharField(max_length=256, blank=True)
    vehicle = models.CharField(max_length=256, blank=True)
    domain = models.CharField(max_length=256, blank=True)
    blood_type = models.CharField(max_length=12, blank=True)
    pounds = models.CharField(max_length=12, blank=True)
    kilograms = models.CharField(max_length=12, blank=True)
    feet_inches = models.CharField(max_length=12, blank=True)
    centimeters = models.CharField(max_length=3, blank=True)
    profile_picture = models.CharField(max_length=512, blank=True)
    maried = models.CharField(max_length=64, blank=True)
    kids = models.CharField(max_length=12, blank=True)
    income = models.CharField(max_length=64, blank=True)
    expenses = models.CharField(max_length=64, blank=True)
    fitness = models.CharField(max_length=128, blank=True)
    activities = models.CharField(max_length=512, blank=True)
    home_town = models.CharField(max_length=512, blank=True)
    country = models.CharField(max_length=256, blank=True)
    education = models.CharField(max_length=256, blank=True)
    devices = models.CharField(max_length=512, blank=True)

class Contract(models.Model):
    ### TODO add Person (contract owner) & Prototy person (for feature matching -> recommendations)
    contract_name = models.CharField(max_length=128, default="")
    start_date = models.CharField(max_length=128, default="")
    end_date = models.CharField(max_length=128, default="")
    contract_type = models.CharField(max_length=128, default="")
    contract_class  = models.CharField(max_length=128, default="")
    due_data = models.CharField(max_length=128, default="")
    amount_money  = models.CharField(max_length=128, default="")
    auto_extensions  = models.CharField(max_length=128, default="")

class Review(models.Model):
    person = models.ManyToManyField(Person)
    contract = models.ManyToManyField(Contract)
    text = models.TextField()
    stars = models.FloatField()
    date = models.CharField(max_length=32, default="")