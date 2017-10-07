

### /home/david/reps/your-insurance/server/your_insurance/helpers

"""
A simple example script to get all posts on a user's timeline.
Originally created by Mitchell Stewart.
<https://gist.github.com/mylsb/10294040>
"""
from urllib.parse import urlencode
from urllib.request import urlopen

import facebook
import requests




import os
import json
import urllib
import pprint

# get Facebook access token from environment variable
ACCESS_TOKEN = 'EAACEdEose0cBAHnevxRJS5azvxeRGWgUdjSJzZAvdGosQ1kCEA8TAFxoesfvhZBjNZCWiEyBrAEMYtptDJveSPvSRx2QpSFn3qT9UB50j52Axx0FNVlINNfZCfEo2c4IPL6tfO0MJCVUVpO6qn63B0QfjAZCLs9knT9dImjS3FZAWfUmWWCWScUISYp3PjgLJXs0dTAuibmwZDZD'
HOST = "https://graph.facebook.com"

N_IMGS = 10
N_POSTS = 10


# build the URL for the API endpoint

def get_img_url_for_id(id):


    path='/'+ str(id)


    params = urlencode(dict(
        fields='images',
        access_token=ACCESS_TOKEN
    ))

    url = "{host}{path}?{params}".format(host=HOST, path=path, params=params)

    # open the URL and read the response
    resp = urlopen(url).read()

    str_response = resp.decode('utf-8')
    img_dict = json.loads(str_response)


    img_str = img_dict['images'][0]['source']

    # convert the returned JSON string to a Python datatype
    # me = json.loads(resp)


    # display the result
    pprint.pprint(img_str)

    return img_str

def some_action(post):
    """ Here you might want to do something with each post. E.g. grab the
    post's message (post['message']) or the post's picture (post['picture']).
    In this implementation we just print the post's created time.
    """
    #print(post['created_time'], post['message'])
    if 'picture' in post:
        print("Has a picture: ", post['picture'])


# You'll need an access token here to do anything.  You can get a temporary one
# here: https://developers.facebook.com/tools/explorer/
# Look at Bill Gates's profile for this example by using his Facebook id.
user = 'BillGates'

def get_posts_for_uid(uid):

    graph = facebook.GraphAPI(ACCESS_TOKEN)
    profile = graph.get_object(user)
    posts = graph.get_connections(profile['id'], 'posts')

    ret_posts = []

    for i in range(N_POSTS):
        try:
            # Perform some action on each post in the collection we receive from
            # Facebook.
            for post in posts['data']:
                ret_posts.append(post['message'])

            # Attempt to make a request to the next page of data, if it exists.
            posts = requests.get(posts['paging']['next']).json()
        except KeyError:
            # When there are no more pages (['paging']['next']), break from the
            # loop and end the script.
            break

    return ret_posts


def get_images_for_uid(uid):

    graph = facebook.GraphAPI(ACCESS_TOKEN)
    profile = graph.get_object(user)
    photos = graph.get_connections(profile['id'], 'photos')

    ret_imgs = []

    for i in range(N_IMGS):
        try:
            # Perform some action on each post in the collection we receive from
            # Facebook.
            for photo in photos['data']:
                ret_imgs.append(dict(
                    img_url = get_img_url_for_id(photo['id']),
                    name = photo.get("name")
                ))

            # Attempt to make a request to the next page of data, if it exists.
            photos = requests.get(photos['paging']['next']).json()
        except KeyError:
            # When there are no more pages (['paging']['next']), break from the
            # loop and end the script.
            break


print(get_posts_for_uid("BillGates"))
print(get_images_for_uid("BillGates"))


# graph = facebook.GraphAPI(ACCESS_TOKEN)
# profile = graph.get_object(user)
# posts = graph.get_connections(profile['id'], 'posts')
#
# photos = graph.get_connections(profile['id'], 'photos')
#
#
#
#
# # Wrap this block in a while loop so we can keep paginating requests until
# # finished.
# def some_action2(post):
#
#     photo_id = post['id']
#
#     print(photo_id)
#
#     get_img_url_for_id(photo_id)
#
#     print("\n")
#
#
#
# while True:
#     try:
#         # Perform some action on each post in the collection we receive from
#         # Facebook.
#         [some_action2(post=post) for post in photos['data']]
#         # Attempt to make a request to the next page of data, if it exists.
#         posts = requests.get(posts['paging']['next']).json()
#     except KeyError:
#         # When there are no more pages (['paging']['next']), break from the
#         # loop and end the script.
#         break
#
# # Wrap this block in a while loop so we can keep paginating requests until
# # finished.
# while True:
#     try:
#         # Perform some action on each post in the collection we receive from
#         # Facebook.
#         [some_action(post=post) for post in posts['data']]
#         # Attempt to make a request to the next page of data, if it exists.
#         posts = requests.get(posts['paging']['next']).json()
#     except KeyError:
#         # When there are no more pages (['paging']['next']), break from the
#         # loop and end the script.
#         break
