from collections import Counter


def get_jac_similarity(model1, model2):
    model1_dict = model1.__dict__()
    model2_dict = model2.__dict__()

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

    c = list((Counter(list) & Counter(list2)).elements())
    return len(c)