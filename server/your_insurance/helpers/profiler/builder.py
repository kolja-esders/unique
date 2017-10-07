import urllib.request

from server.your_insurance.helpers.fb.scraper import get_posts_for_uid, get_images_for_uid, get_personal_infos_for_id, \
    get_likes_for_uid, get_family_for_uid, get_locations_for_uid
from server.your_insurance.helpers.image_cap.sample import get_img_description
from server.your_insurance.helpers.image_det.detect import detect
from server.your_insurance.helpers.profiler.extract import TextClassifier

from server.your_insurance.helpers.image_cap.build_vocab import Vocabulary



TextCls = TextClassifier()

def create_profile(access_token):

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


    for post in posts:
        rets = TextCls.classify_text(post)

        for key, vals in rets.items():
            x_dict[key].append(dict(
                val=vals[0],
                reason=post
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
                reason=image
            ))

        rets = TextCls.classify_text(img_desc)
        for key, vals in rets.items():
            x_dict[key].append(dict(
                val=vals[0],
                reason=image
            ))

        rets = TextCls.classify_text(" ".join([i['type'] for i in img_objs]))
        for key, vals in rets.items():
            x_dict[key].append(dict(
                val=vals[0],
                reason=image
            ))

    for like in likes:
        rets = TextCls.classify_text(like)

        for key, vals in rets.items():
            x_dict[key].append(dict(
                val=vals[0],
                reason=like
            ))





    print(x_dict)




create_profile("EAACEdEose0cBAIQBk11ynMuvN3SgrnXgXDaAj1QvZAxkzHMglW1UpoRaHr1xJZCb6o0xNZAsfRQJs5vA0bmkq9ZCTqF10yEmXW73GlnUZCqIXvbbFcZBmHLgQz9F98ZAusHgFa0xuxUVPmJXGeyT0GQimZCKDZCMqc84NM9x61Iev7HvudbSYx3TSdZAJWYg3ye3sVsO8nYnckSovnRSk3lRtPxbUVktugElwZD")