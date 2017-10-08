from collections import Counter

from core.models import Activity, LifestyleEntity


def get_jac_similarity(model1, model2):
    model1_dict = model1.__dict__
    model2_dict = model2.__dict__

    similarity_cntr = 0

    similarity_cntr += get_dict_similarity(model1_dict, model2_dict)

    return similarity_cntr


def get_dict_similarity(dict1, dict2):
    similarity_cntr = 0

    for key, val in dict1.items():

        if key in dict2:
            if dict1[key]:

                if dict1[key] == dict2[key]:
                    similarity_cntr += 1

                if isinstance(dict1[key], dict) and isinstance(dict2[key], dict):
                    similarity_cntr += get_dict_similarity(dict1[key], dict2[key])

                if isinstance(dict1[key], list) and isinstance(dict2[key], list):
                    similarity_cntr += get_list_similarity(dict1[key], dict2[key])

    return similarity_cntr


def get_list_similarity(list1, list2):

    c = list((Counter(list1) & Counter(list2)).elements())
    return len(c)


def get_person_similarity(p0, p1):

    sim = get_dict_similarity(p0.__dict__, p1.__dict__)

    a0 = list(Activity.objects.filter(person_id=p0.id))
    a1 = list(Activity.objects.filter(person_id=p1.id))

    l0 = list(LifestyleEntity.objects.filter(person_id=p0.id))
    l1 = list(LifestyleEntity.objects.filter(person_id=p1.id))

    a0 = set([a.name for a in a0])
    a1 = set([a.name for a in a1])
    l0 = set([l.name for l in l0])
    l1 = set([l.name for l in l1])

    sim += get_list_similarity(l0, l1)
    sim += get_list_similarity(a0, a1)

    return sim