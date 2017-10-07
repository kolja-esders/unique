




with open("keywords.txt") as f:
    keywords = f.readlines()


def extract_keywords(text):

    extr_keywords = []

    for keyword in keywords:
        if keyword.strip().lower() in text.lower():
            extr_keywords.append(keyword.strip())

    return extr_keywords



print(extract_keywords("Hallo ich surfe auf meinem computer und sehe viele Giraffen."))