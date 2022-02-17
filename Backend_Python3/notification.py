def yell(text):
    text = text.upper()
    number_of_charact = len(text)
    result = text +"!" * number_of_charact
    print(result)

yell("You are doing grate")
yell("Don't forget to ask help")
yell("Don't reapit youself. Try to write DRY")