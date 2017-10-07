from collections import defaultdict

from server.core.helpers.utils import PROJ_PATH

CATS = ["activities", "devices", "injury", "locations", "lifestyle"]


class TextClassifier(object):

    def __init__(self):

        self.keyword_dict = dict()
        self.cat_dict = dict()
        self.keywords = []

        for category in CATS:

            file_name = PROJ_PATH + "/helpers/profiler/" + category + ".txt"

            with open(file_name) as f:
                for line in f.readlines():
                    if line.strip():
                        cls, keywrds = line.strip().split(":")
                        keywrds = keywrds.split(",")
                        for keywrd in keywrds:
                            self.keywords.append(keywrd)
                            self.keyword_dict[keywrd] = cls
                        self.cat_dict[cls] = category

    def classify_text(self, text):

        ret_dict = defaultdict(list)

        for keyword in self.keywords:
            if keyword.strip().lower() in text.lower():

                cls = self.keyword_dict[keyword]
                cat = self.cat_dict[cls]
                ret_dict[cat].append(cls)

        return ret_dict

