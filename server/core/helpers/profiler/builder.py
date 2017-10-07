import urllib.request
import numpy as np


from server.core.helpers.image_cap.sample import get_img_description
from server.core.helpers.image_det.detect import detect
from server.core.helpers.profiler.extract import TextClassifier

from server.core.helpers.fb.scraper import get_posts_for_uid, get_images_for_uid, get_personal_infos_for_id, \
    get_likes_for_uid, get_family_for_uid, get_locations_for_uid

from core.models import Person, DetectionReason, FamilyMember, Location, Activity, Injury, Device, LifestyleEntity
#from server.core.models import Person, DetectionReason, FamilyMember, Location, Activity, Injury, Device, \
#    LifestyleEntity

TextCls = TextClassifier()

def create_profile(access_token):

    person = Person()

    x_dict = dict()
    x_dict['activities'] = []
    x_dict['injury'] = []
    x_dict['devices'] = []
    x_dict['lifestyle'] = []
    x_dict['locations'] = []

    posts = get_posts_for_uid("me", access_token=access_token)
    images = get_images_for_uid("me", access_token=access_token)
    infos = get_personal_infos_for_id("me", access_token=access_token)
    likes = get_likes_for_uid("me", access_token=access_token)
    family = get_family_for_uid("me", access_token=access_token)
    locs = get_locations_for_uid("me", access_token=access_token)

    name = infos.get("name")
    person.given_name = name.split(" ")[1]
    person.surname = name.split(" ")[0]

    person.home_town = infos.get("hometown")
    person.gender = infos.get("gender")

    work = infos.get("work")
    if work is not None:
        work = work[-1].get("employer").get("name")
    person.work = work

    person.email_address = infos.get("email")
    person.birthday = infos.get("birthday")

    for fam_member in family:
        fm = FamilyMember()
        fm.name = fam_member.get("name")
        fm.age = fam_member.get("age")
        fm.gender = fam_member.get("gender")
        fm.relation = fam_member.get("relation")
        fm.person = person

    for loc in locs:
        ll = Location()
        ll.name = loc.get("name")
        ll.person = person

    for post in posts:
        rets = TextCls.classify_text(post)

        for key, vals in rets.items():
            x_dict[key].append(dict(
                val=vals[0],
                reason=DetectionReason(type="fb-post", text=vals[0])
            ))

    for image in images:
        img_text = image["name"]
        img_url = image["img_url"]

        file_name, headers = urllib.request.urlretrieve(img_url)
        img_desc = get_img_description(file_name)
        img_objs = detect(file_name)

        rets = TextCls.classify_text(img_text)
        for key, vals in rets.items():
            x_dict[key].append(dict(
                val=vals[0],
                reason=DetectionReason(type="fb-image", text=img_text, href_to_image=img_url)
            ))

        rets = TextCls.classify_text(img_desc)
        for key, vals in rets.items():
            x_dict[key].append(dict(
                val=vals[0],
                reason=DetectionReason(type="fb-image", href_to_image=img_url)
            ))

        rets = TextCls.classify_text(" ".join([i['type'] for i in img_objs]))
        for key, vals in rets.items():
            x_dict[key].append(dict(
                val=vals[0],
                reason=DetectionReason(type="fb-image", href_to_image=img_url)
            ))

    for like in likes:
        rets = TextCls.classify_text(like)

        for key, vals in rets.items():
            x_dict[key].append(dict(
                val=vals[0],
                reason=DetectionReason(type="fb-like", text=vals[0])
            ))


    for it in x_dict['activities']:
        it_val = it['val']
        reason = it['reason']
        act = Activity()
        act.name = it_val
        act.frequency = str(np.random.randint(0,10))
        act.detection_reason = reason
        act.person = person

    for it in x_dict['injury']:
        it_val = it['val']
        reason = it['reason']
        inj = Injury()
        inj.name = it_val
        inj.detection_reason = reason
        inj.person = person

    for it in x_dict['devices']:
        it_val = it['val']
        reason = it['reason']
        dev = Device()
        dev.name = it_val
        dev.detection_reason = reason
        dev.person = person

    for it in x_dict['lifestyle']:
        it_val = it['val']
        reason = it['reason']
        lif = LifestyleEntity()
        lif.name = it_val
        lif.detection_reason = reason
        lif.person = person

    for it in x_dict['locations']:
        it_val = it['val']
        reason = it['reason']
        loc = Location()
        loc.name = it_val
        loc.detection_reason = reason
        loc.person = person

    print(x_dict)

    return person

#create_profile("EAACEdEose0cBAIQBk11ynMuvN3SgrnXgXDaAj1QvZAxkzHMglW1UpoRaHr1xJZCb6o0xNZAsfRQJs5vA0bmkq9ZCTqF10yEmXW73GlnUZCqIXvbbFcZBmHLgQz9F98ZAusHgFa0xuxUVPmJXGeyT0GQimZCKDZCMqc84NM9x61Iev7HvudbSYx3TSdZAJWYg3ye3sVsO8nYnckSovnRSk3lRtPxbUVktugElwZD")