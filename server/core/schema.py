import graphene
from django.contrib.auth import get_user_model
from graphene_django.filter import DjangoFilterConnectionField
from graphene_django.types import DjangoObjectType, ObjectType
from core.user_helper.jwt_util import get_token_user_id
from core.user_helper.jwt_schema import TokensInterface
from .models import Book as BookModal, BookshelfEntry as BookshelfEntryModal, Membership as MembershipModal, Group as GroupModal
from .models import DetectionReason as DetectionReasonModal, Device as DeviceModal, Activity as ActivityModal, FamilyMember as FamilyMemberModal, LifestyleEntity as LifestyleEntityModal, Location as LocationModal, Injury as InjuryModal, Person as PersonModal, Contract as ContractModal, Review as ReviewModal, CustomUser as CustomUserModal, SalaryMapping as SalaryMappingModal, Story as StoryModal

class Book(DjangoObjectType):
    class Meta:
        model = BookModal
        filter_fields = ['author', 'title']
        interfaces = (graphene.Node, )

class BookshelfEntry(DjangoObjectType):
    class Meta:
        model = BookshelfEntryModal
        filter_fields = ['state', 'rating']
        interfaces = (graphene.Node, )

class Group(DjangoObjectType):
    class Meta:
        model = GroupModal
        interfaces = (graphene.Node, )

class Membership(DjangoObjectType):
    class Meta:
        model = MembershipModal
        interfaces = (graphene.Node, )

class User(DjangoObjectType):
    class Meta:
        model = get_user_model()
        only_fields = (
            'id',
            'last_login',
            'is_superuser',
            'username',
            'first_name',
            'last_name',
            'email',
            'is_staff',
            'is_active',
            'date_joined',
            'person'
        )
        interfaces = (graphene.Node, TokensInterface)

    bookshelf = graphene.List(BookshelfEntry)

    @graphene.resolve_only_args
    def resolve_bookshelf(self):
        return self.bookshelfentry_set.all()

class DetectionReason(DjangoObjectType):
    class Meta:
        model = DetectionReasonModal
        interfaces = (graphene.Node, )

class Device(DjangoObjectType):
    class Meta:
        model = DeviceModal
        interfaces = (graphene.Node, )

class Activity(DjangoObjectType):
    class Meta:
        model = ActivityModal
        interfaces = (graphene.Node, )

class FamilyMember(DjangoObjectType):
    class Meta:
        model = FamilyMemberModal
        interfaces = (graphene.Node, )

class LifestyleEntity(DjangoObjectType):
    class Meta:
        model = LifestyleEntityModal
        interfaces = (graphene.Node, )

class Location(DjangoObjectType):
    class Meta:
        model = LocationModal
        interfaces = (graphene.Node, )

class Injury(DjangoObjectType):
    class Meta:
        model = InjuryModal
        interfaces = (graphene.Node, )

class Person(DjangoObjectType):
    class Meta:
        model = PersonModal
        interfaces = (graphene.Node, )

class Contract(DjangoObjectType):
      class Meta:
          model = ContractModal
          interfaces = (graphene.Node,)

class Review(DjangoObjectType):
    class Meta:
        model = ReviewModal
        interfaces = (graphene.Node,)

class SalaryMapping(DjangoObjectType):
    class Meta:
        model = SalaryMappingModal
        interfaces = (graphene.Node,)

class Story(DjangoObjectType):
    class Meta:
        model = StoryModal
        interfaces = (graphene.Node, )


class CoreQueries(graphene.AbstractType):
    detection_reason = graphene.Node.Field(DetectionReason)
    detection_reasons = graphene.List(DetectionReason)
    all_detection_reasons = DjangoFilterConnectionField(DetectionReason)

    device = graphene.Node.Field(Device)
    devices = graphene.List(Device)
    all_devices = DjangoFilterConnectionField(Device)

    activity = graphene.Node.Field(Activity)
    activities = graphene.List(Activity)
    all_activities = DjangoFilterConnectionField(Activity)

    family_member = graphene.Node.Field(FamilyMember)
    family_members = graphene.List(FamilyMember)
    all_family_members = DjangoFilterConnectionField(FamilyMember)

    lifestyle_entity = graphene.Node.Field(LifestyleEntity)
    lifestyle_entities = graphene.List(LifestyleEntity)
    all_lifestyle_entities = DjangoFilterConnectionField(LifestyleEntity)

    location = graphene.Node.Field(Location)
    locations = graphene.List(Location)
    all_locations = DjangoFilterConnectionField(Location)

    injury = graphene.Node.Field(Injury)
    injuries = graphene.List(Injury)
    all_injuries = DjangoFilterConnectionField(Injury)

    person = graphene.Node.Field(Person)
    persons = graphene.List(Person)
    all_persons = DjangoFilterConnectionField(Person)



    contract = graphene.Node.Field(Contract)
    contracts = graphene.List(Contract)
    all_contracts = DjangoFilterConnectionField(Contract)

    review = graphene.Node.Field(Review)
    reviews = graphene.List(Review)
    all_reviews = DjangoFilterConnectionField(Review)

    salary_mapping = graphene.Node.Field(SalaryMapping)
    salary_mappings = graphene.List(SalaryMapping)
    all_salary_mappings = DjangoFilterConnectionField(SalaryMapping)

    story = graphene.Node.Field(Story)
    stories = graphene.List(Story)
    all_stories = DjangoFilterConnectionField(Story)


    def resolve_detection_reasons(self, args, context, info):
        detection_reasons = DetectionReasonModal.objects.all()
        return detection_reasons

    def resolve_devices(self, args, context, info):
        devices = DeviceModal.objects.all()
        return devices

    def resolve_activities(self, args, context, info):
        activities = ActivityModal.objects.all()
        return activities

    def resolve_family_members(self, args, context, info):
        family_members = FamilyMemberModal.objects.all()
        return family_members

    def resolve_lifestyle_entities(self, args, context, info):
        lifestyle_entities = LifestyleEntityModal.objects.all()
        return lifestyle_entities

    def resolve_locations(self, args, context, info):
        locations = LocationModal.objects.all()
        return locations

    def resolve_injuries(self, args, context, info):
        injuries = InjuryModal.objects.all()
        return injuries

    def resolve_persons(self, args, context, info):
        persons = PersonModal.objects.all()
        return persons

    def resolve_contracts(self, args, context, info):
        contracts = ContractModal.objects.all()
        return contracts

    def resolve_reviews(self, args, context, info):
        reviews = ReviewModal.objects.all()
        return reviews

    def resolve_salary_mappings(self, args, context, info):
        salary_mappings = SalaryMappingModal.objects.all()
        return salary_mappings

    def resolve_stories(self, args, context, info):
        stories = StoryModal.objects.all()
        return stories

    book = graphene.Node.Field(Book)
    books = graphene.List(Book)
    all_books = DjangoFilterConnectionField(Book)

    bookshelf_entry = graphene.Node.Field(BookshelfEntry)
    bookshelf_entries = graphene.List(BookshelfEntry)
    all_bookshelf_entries = DjangoFilterConnectionField(BookshelfEntry)

    membership = graphene.Node.Field(Membership)
    memberships = graphene.List(Membership)
    all_memberships = DjangoFilterConnectionField(Membership)

    group = graphene.Field(Group, id=graphene.ID(), name_url=graphene.String())
    all_groups = DjangoFilterConnectionField(Group)


    def resolve_group(self, args, context, info):
        if 'id' in args:
            return GroupModal.objects.get(pk=args['id'])

        return GroupModal.objects.get(name_url=args['name_url'])


    def resolve_books(self, args, context, info):
        books = BookModal.objects.all()
        return books

    def resolve_bookshelf_entries(self, args, context, info):
        bookshelf_entries = BookshelfEntryModal.objects.all()
        return bookshelf_entries

    def resolve_memberships(self, args, context, info):
        memberships = MembershipModal.objects.all()
        return memberships



class CreateDetectionReason(graphene.Mutation):
   class Input:
        href_to_image = graphene.String(required=True)
        text_to_image = graphene.String(required=True)
        date = graphene.String(required=True)
        type = graphene.String(required=True)

   detection_reason = graphene.Field(DetectionReason)

   def mutate(self, args, ctx, info):
        href_to_image = args['href_to_image']
        text_to_image = args['text_to_image']
        date = args['date']
        type = args['type']
        detection_reason = DetectionReasonModal(
            href_to_image=href_to_image,
            text_to_image=text_to_image,
            date=date,
            type=type
        )
        detection_reason.save()
        return CreateDetectionReason(detection_reason=detection_reason)

class CreateDevice(graphene.Mutation):
    class Input:
        estimated_price = graphene.String(required=True)
        type = graphene.String(required=True)
        detection_reason = graphene.String(required=True)
        icon = graphene.String(required=True)
        person = graphene.String(required=True)

    device = graphene.Field(Device)

    def mutate(self, args, ctx, info):
        detection_reason_id = args['detection_reason_id']
        person_id = args['person_id']
        estimated_price = args['estimated_price']
        type = args['type']
        detection_reason = DeviceModal.objects.get(pk=detection_reason_id)
        icon = args['icon']
        person = DeviceModal.objects.get(pk=person_id)
        device = DeviceModal(
            estimated_price=estimated_price,
            type=type,
            detection_reason=detection_reason,
            icon=icon,
            person=person
        )
        device.save()
        return CreateDevice(device=device)

class CreateActivity(graphene.Mutation):
    class Input:
        name = graphene.String(required=True)
        frequency = graphene.String(required=True)
        detection_reason = graphene.String(required=True)
        person = graphene.String(required=True)

    activity = graphene.Field(Activity)

    def mutate(self, args, ctx, info):
        detection_reason_id = args['detection_reason_id']
        person_id = args['person_id']
        name = args['name']
        frequency = args['frequency']
        detection_reason = ActivityModal.objects.get(pk=detection_reason_id)
        person = ActivityModal.objects.get(pk=person_id)
        activity = ActivityModal(
            name=name,
            frequency=frequency,
            detection_reason=detection_reason,
            person=person
        )
        activity.save()
        return CreateActivity(activity=activity)

class CreateFamilyMember(graphene.Mutation): # TODO TODO TODO
    class Input:
        name = graphene.String(required=True)
        age = graphene.String(required=True)
        gender = graphene.String(required=True)
        relation = graphene.String(required=True)
        detection_reason = graphene.String(required=True)
        person = graphene.String(required=True)

    family_member = graphene.Field(FamilyMember)

    def mutate(self, args, ctx, info):
        detection_reason_id = args['detection_reason_id']
        person_id = args['person_id']
        name = args['name']
        age = args['age']
        gender = args['gender']
        relation = args['relation']
        detection_reason = FamilyMemberModal.objects.get(pk=detection_reason_id)
        person = FamilyMemberModal.objects.get(pk=person_id)
        family_member = FamilyMemberModal(
            name=name,
            age=age,
            gender=gender,
            relation=relation,
            detection_reason=detection_reason,
            person=person
        )
        family_member.save()
        return CreateFamilyMember(family_member=family_member)

class CreateLifestyleEntity(graphene.Mutation):
    class Input:
        name = graphene.String(required=True)
        frequency = graphene.String(required=True)
        detection_reason = graphene.String(required=True)
        person = graphene.String(required=True)

    lifestyle_entity = graphene.Field(LifestyleEntity)

    def mutate(self, args, ctx, info):
        detection_reason_id = args['detection_reason_id']
        person_id = args['person_id']
        name = args['name']
        frequency = args['frequency']
        detection_reason = LifestyleEntityModal.objects.get(pk=detection_reason_id)
        person = LifestyleEntityModal.objects.get(pk=person_id)
        lifestyle_entity = LifestyleEntityModal(
            name=name,
            frequency=frequency,
            detection_reason=detection_reason,
            person=person
        )
        lifestyle_entity.save()
        return CreateLifestyleEntity(lifestyle_entity=lifestyle_entity)

class CreateLocation(graphene.Mutation):
    class Input:
        name = graphene.String(required=True)
        example_image = graphene.String(required=True)
        detection_reason = graphene.String(required=True)
        person = graphene.String(required=True)

    location = graphene.Field(Location)

    def mutate(self, args, ctx, info):
        detection_reason_id = args['detection_reason_id']
        person_id = args['person_id']
        name = args['name']
        example_image = args['example_image']
        detection_reason = LocationModal.objects.get(pk=detection_reason_id)
        person = LocationModal.objects.get(pk=person_id)
        location = LocationModal(
            name=name,
            example_image=example_image,
            detection_reason=detection_reason,
            person=person
        )
        location.save()
        return CreateLocation(location=location)

class CreateInjury(graphene.Mutation):
    class Input:
        date = graphene.String(required=True)
        type = graphene.String(required=True)
        detection_reason = graphene.String(required=True)
        person = graphene.String(required=True)

    injury = graphene.Field(Injury)

    def mutate(self, args, ctx, info):
        detection_reason_id = args['detection_reason_id']
        person_id = args['person_id']
        date = args['date']
        type = args['type']
        detection_reason = InjuryModal.objects.get(pk=detection_reason_id)
        person = InjuryModal.objects.get(pk=person_id)
        injury = InjuryModal(
            date=date,
            type=type,
            detection_reason=detection_reason,
            person=person
        )
        injury.save()
        return CreateInjury(injury=injury)

class CreateContract(graphene.Mutation):
    class Input:
        contract_name = graphene.String(required=True)
        start_date = graphene.String(required=True)
        end_date = graphene.String(required=True)
        contract_type = graphene.String(required=True)
        contract_class = graphene.String(required=True)
        due_data = graphene.String(required=True)
        amount_money = graphene.String(required=True)
        auto_extensions = graphene.String(required=True)

    contract = graphene.Field(Contract)

    def mutate(self, args, ctx, info):
        contract_name = args['contract_name']
        start_date = args['start_date']
        end_date = args['end_date']
        contract_type = args['contract_type']
        contract_class = args['contract_class']
        due_data = args['due_data']
        amount_money = args['amount_money']
        auto_extensions = args['auto_extensions']
        contract = ContractModal(
            contract_name=contract_name,
            start_date=start_date,
            end_date=end_date,
            contract_type=contract_type,
            contract_class=contract_class,
            due_data=due_data,
            amount_money=amount_money,
            auto_extensions=auto_extensions
        )
        contract.save()
        return CreateContract(contract=contract)

class CreateReview(graphene.Mutation): # TODO TODO TODO
    class Input:
       ## person = ##################
      ##  contract = ################
        text = graphene.String(required=True)
        stars = graphene.String(required=True)
        date = graphene.String(required=True)

    review = graphene.Field(Review)

    def mutate(self, args, ctx, info):
   ##     person = ##################
   ##     contract = ################
        text = args['text']
        stars = args['stars']
        date = args['date']
        review = ReviewModal(
            #person=
            #contract=
            text=text,
            stars=stars,
            date=date
        )
        review.save()
        return CreateReview(review=review)

class CreateSalaryMapping(graphene.Mutation):
    class Input:
        occupation = graphene.String(required=True)
        salary = graphene.String(required=True)

    salary_mapping = graphene.Field(SalaryMapping)

    def mutate(self, args, ctx, info):
        occupation = args['occupation']
        salary = args['salary']
        salary_mapping = SalaryMappingModal(
            occupation=occupation,
            salary=salary
        )
        salary_mapping.save()
        return CreateSalaryMapping(salary_mapping=salary_mapping)

class CreateStory(graphene.Mutation):
    class Input:
        author = graphene.String(required=True)
        content = graphene.String(required=True)

    story = graphene.Field(Story)

    def mutate(self, args, ctx, info):
        author = args['author']
        content = args['content']
        story = StoryModal(
            author=author,
            content=content
        )
        story.save()
        return CreateStory(story=story)



class CreateBook(graphene.Mutation):
    class Input:
        title = graphene.String(required=True)
        author = graphene.String(required=True)

    book = graphene.Field(Book)

    def mutate(self, args, ctx, info):
        title = args['title']
        author = args['author']
        book = BookModal(
                title = title,
                author = author
            )
        book.save()
        return CreateBook(book=book)


class CreateBookshelfEntry(graphene.Mutation):
    class Input:
        user_id = graphene.String(required=True)
        book_id = graphene.String(required=True)
        state = graphene.String(required=True)
        rating = graphene.Int(required=True)

    bookshelf_entry = graphene.Field(BookshelfEntry)

    def mutate(self, args, ctx, info):
        user_id = args['user_id']
        book_id = args['book_id']
        state = args['state']
        rating = args['rating']
        user = get_user_model().objects.get(pk=user_id)
        book = BookModal.objects.get(pk=book_id)
        bookshelf_entry = BookshelfEntryModal(
                user = user,
                book= book,
                state = state,
                rating = rating
            )
        bookshelf_entry.save()
        return CreateBookshelfEntry(bookshelf_entry=bookshelf_entry)

class CreateMembership(graphene.Mutation):
    class Input:
        user_id = graphene.String(required=True)
        group_id = graphene.String(required=True)

    membership = graphene.Field(Membership)

    def mutate(self, args, ctx, info):
        user = get_user_model().objects.get(pk=args['user_id'])
        group = GroupModal.objects.get(pk=args['group_id'])
        membership = MembershipModal(
            user = user,
            group = group
        )
        membership.save()
        return CreateMembership(membership=membership)

class CreateGroup(graphene.Mutation):
    class Input:
        name = graphene.String(required=True)

    group = graphene.Field(Group)

    def mutate(self, args, ctx, info):
        name = args['name']
        name_url = GroupModal.get_url_from_name(name)
        group = GroupModal(name=name, name_url=name_url)
        group.save()
        return CreateGroup(group=group)

class CoreMutations(graphene.AbstractType):
    create_book = CreateBook.Field()
    create_bookshelf_entry = CreateBookshelfEntry.Field()
    create_membership = CreateMembership.Field()
    create_group = CreateGroup.Field()

    create_detection_reason = CreateDetectionReason.Field()
    create_device = CreateDevice.Field()
    create_activity = CreateActivity.Field()
    create_family_member = CreateFamilyMember.Field()
    create_lifestyle_entity = CreateLifestyleEntity.Field()
    create_location = CreateLocation.Field()
    create_injury = CreateInjury.Field()
    create_contract = CreateContract.Field()
    create_review = CreateReview.Field()
    create_salary_mapping = CreateSalaryMapping.Field()
    create_story = CreateStory.Field()


class Viewer(ObjectType, CoreQueries):
    id = graphene.GlobalID()
    user = graphene.Field(User, jwt_token=graphene.String())

    class Meta:
        interfaces = (TokensInterface,)
