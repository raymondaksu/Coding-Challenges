def reverse_words(message):
    result = reversed(message.split())
    return ' '.join(result)

print(reverse_words("impossible. mean not does hard but hard, be to going It's"))