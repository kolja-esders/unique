
def get_jac_similarity(model1, model2):

    model1_dict = model1.__dict__()
    model2_dict = model2.__dict__()

    similarity_cntr = 0

    for key, val in model1_dict.items():

        if key in model2_dict:
            if model1_dict[key] == model2_dict[key]:
                similarity_cntr += 1


    return similarity_cntr











