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

class Trigger(models.Model):
    success = models.CharField(max_length=1, default='0')

class Group(models.Model):
    name = models.CharField(max_length=32, unique=True)
    name_url = models.CharField(max_length=64, unique=True)

    @staticmethod
    def get_url_from_name(name):
        return name.strip().lower().replace('.', '').replace(',', '').replace(' ', '-')

class DetectionReason(models.Model):
    href_to_image = models.CharField(max_length=1024, default="")
    text = models.CharField(max_length=512, default="")
    date = models.CharField(max_length=32, default="")
    type = models.CharField(max_length=256, default="")


class Person(models.Model):
    fb_access_token = models.CharField(max_length=512, default="", null=True)
    lfd_id = models.CharField(max_length=12, blank=True, null=True)
    parent_lfd_id = models.CharField(max_length=12, blank=True, null=True)
    pnr_nr = models.CharField(max_length=12, blank=True, null=True)
    title = models.CharField(max_length=12, blank=True, null=True)
    given_name = models.CharField(max_length=128, blank=True, null=True)
    surname = models.CharField(max_length=128, blank=True, null=True)
    gender = models.CharField(max_length=32, blank=True, null=True)
    email_address = models.CharField(max_length=256, blank=True, null=True)
    browser_user_agent = models.CharField(max_length=512, blank=True, null=True)
    telephone_number = models.CharField(max_length=64, blank=True, null=True)
    telephone_country_code = models.CharField(max_length=12, blank=True, null=True)
    birthday = models.CharField(max_length=24, blank=True, null=True)
    age = models.CharField(max_length=3, blank=True, null=True)
    tropical_zodiac = models.CharField(max_length=64, blank=True, null=True)
    cc_type = models.CharField(max_length=64, blank=True, null=True)
    cc_number = models.CharField(max_length=64, blank=True, null=True)
    cvv2 = models.CharField(max_length=12, blank=True, null=True)
    cc_expires = models.CharField(max_length=64, blank=True, null=True)
    occupation = models.CharField(max_length=256, blank=True, null=True) # most recent
    company = models.CharField(max_length=256, blank=True, null=True)  # most recent
    vehicle = models.CharField(max_length=256, blank=True, null=True)
    domain = models.CharField(max_length=256, blank=True, null=True)
    blood_type = models.CharField(max_length=12, blank=True, null=True)
    pounds = models.CharField(max_length=12, blank=True, null=True)
    kilograms = models.CharField(max_length=12, blank=True, null=True)
    feet_inches = models.CharField(max_length=12, blank=True, null=True)
    centimeters = models.CharField(max_length=3, blank=True, null=True)
    profile_picture = models.CharField(max_length=512, blank=True, null=True)
    maried = models.CharField(max_length=64, blank=True, null=True)
    kids = models.CharField(max_length=12, blank=True, null=True)
    income = models.CharField(max_length=64, blank=True, null=True)
    expenses = models.CharField(max_length=64, blank=True, null=True)
    fitness = models.CharField(max_length=128, blank=True, null=True)
    home_town = models.CharField(max_length=512, blank=True, null=True)
    country = models.CharField(max_length=256, blank=True, null=True)
    education = models.CharField(max_length=256, blank=True, null=True) # most recent
    nb_p1 = models.ForeignKey('self', blank=True, null=True, related_name="nb_p11")
    nb_p2 = models.ForeignKey("self", blank=True, null=True, related_name="nb_p22")
    nb_p3 = models.ForeignKey("self", blank=True, null=True, related_name="nb_p33")
    nb_p4 = models.ForeignKey("self", blank=True, null=True, related_name="nb_p44")
    nb_con1 = models.ManyToManyField("Contract", blank=True, related_name="nb_conn1")
    nb_con2 = models.ManyToManyField("Contract", blank=True, related_name="nb_conn2")
    nb_con3 = models.ManyToManyField("Contract", blank=True, related_name="nb_conn3")
    nb_con4 = models.ManyToManyField("Contract", blank=True, related_name="nb_conn4")
    up_con = models.ManyToManyField("Contract", blank=True)


class Device(models.Model):
    estimated_price = models.CharField(max_length=32, default="", null=True)
    type = models.CharField(max_length=256, default="", null=True)
    detection_reason = models.ForeignKey(DetectionReason, null=True)
    icon = models.CharField(max_length=256, default="", null=True)
    person = models.ForeignKey(Person, blank=True, null=True, related_name='devices')

class Activity(models.Model):
    name = models.CharField(max_length=128, default="", null=True)
    frequency = models.CharField(max_length=64, default="", null=True)
    detection_reason = models.ForeignKey(DetectionReason, null=True)
    person = models.ForeignKey(Person, blank=True, null=True, related_name='activities')

class FamilyMember(models.Model):
    name = models.CharField(max_length=128, default="", null=True)
    age = models.CharField(max_length=12, default="", null=True)
    gender = models.CharField(max_length=32, default="", null=True)
    relation = models.CharField(max_length=64, default="", null=True) # daughter, wife, ...
    person = models.ForeignKey(Person, blank=True, null=True, related_name='family_members')
    detection_reason = models.ForeignKey(DetectionReason, null=True)


class LifestyleEntity(models.Model):
    name = models.CharField(max_length=128, default="", null=True) # smoking
    frequency = models.CharField(max_length=64, default="", null=True) # rare, daily, weekly, ...)
    detection_reason = models.ForeignKey(DetectionReason, null=True)
    person = models.ForeignKey(Person, blank=True, null=True, related_name='lifestyle_entities')

class Location(models.Model):
    name = models.CharField(max_length=256, default="", null=True)
    example_image = models.CharField(max_length=1024, default="", null=True)
    detection_reason = models.ForeignKey(DetectionReason, null=True)
    person = models.ForeignKey(Person, blank=True, null=True, related_name='locations')

class Injury(models.Model):
    date = models.CharField(max_length=32, default="", null=True)
    type = models.CharField(max_length=128, default="", null=True) # leg, arm, heart [pietro]
    detection_reason = models.ForeignKey(DetectionReason, null=True)
    person = models.ForeignKey(Person, blank=True, null=True, related_name='injuries')

class CustomUser(AbstractEmailUser):
    username = models.CharField(max_length=31, blank=True)
    first_name = models.CharField(max_length=31, blank=True)
    last_name = models.CharField(max_length=31, blank=True)
    person = models.ForeignKey(Person, null=True)
    access_token = models.CharField(max_length=512, default="")

class BookshelfEntry(models.Model):
    user = models.ForeignKey(CustomUser, null=True)
    book = models.ForeignKey(Book, blank=True)
    state = models.CharField(max_length = 31) # to-read, read, ...
    rating = models.PositiveSmallIntegerField(null=True)

    class Meta:
        unique_together = ('user', 'book')

class Membership(models.Model):
    user = models.ForeignKey(CustomUser, null=True)
    group = models.ForeignKey(Group)

    class Meta:
        unique_together = ('user', 'group')

class Contract(models.Model):
    contract_name = models.CharField(max_length=128, default="")
    start_date = models.CharField(max_length=128, default="")
    end_date = models.CharField(max_length=128, default="")
    contract_type = models.CharField(max_length=128, default="")
    contract_class  = models.CharField(max_length=128, default="")
    due_data = models.CharField(max_length=128, default="")
    amount_money  = models.CharField(max_length=128, default="")
    auto_extensions  = models.CharField(max_length=128, default="")
    url  = models.CharField(max_length=128, default="")
    description  = models.TextField(default="")
    owner = models.ForeignKey(Person, blank=True, null=True, related_name="owner")
    proto = models.ForeignKey(Person, blank=True, null=True, related_name="proto")

class Review(models.Model):

    person = models.ForeignKey(Person, null=True)
    contract = models.ForeignKey(Contract, null=True)
    text = models.TextField()
    stars = models.FloatField()
    date = models.CharField(max_length=32, default="")

class SalaryMapping(models.Model):
    occupation = models.CharField(max_length=256, default="")
    salary = models.CharField(max_length=32, default="")

class Story(models.Model):
    author = models.CharField(max_length=256, default="")
    content = models.CharField(max_length=256, default="")
