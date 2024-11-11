alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
alphabet_dictionary = {
    'a': 'a',
    'b': 'b',
    'c': 'c',
    'd': 'd',
    'e': 'e',
    'f': 'f',
    'g': 'g',
    'h': 'h',
    'i': 'i',
    'j': 'j',
    'k': 'k',
    'l': 'l',
    'm': 'm',
    'n': 'n',
    'o': 'o',
    'p': 'p',
    'q': 'q',
    'r': 'r',
    's': 's',
    't': 't',
    'u': 'u',
    'v': 'v',
    'w': 'w',
    'x': 'x',
    'y': 'y',
    'z': 'z',
}

string = input("What would you like to encode?")
decision = input("Do you want to encode or decode type (e or d)")

encoding_num = input('By how many letters do you want to encode your message?')
lowercase_string = string.lower()

string_characters_list = list(lowercase_string)

encoded_string = []

if decision == 'e':
    for index, char in enumerate(lowercase_string):
        if char != ' ':
            index_of_char = alphabet.index(char)
            new_index = index_of_char + int(encoding_num)
            encoded_char = alphabet[new_index]
            encoded_string.append(encoded_char)
            print(encoded_char)

else:
    for index, char in enumerate(lowercase_string):
        if char != ' ':
            index_of_char = alphabet.index(char)
            new_index = index_of_char + 26 - int(encoding_num)
            encoded_char = alphabet[new_index]
            encoded_string.append(encoded_char)


final_string = ''.join(encoded_string)

print(final_string)