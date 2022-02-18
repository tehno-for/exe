import math

def split_check(total, number_of_people):
     return math.ceil(total / number_of_people)
# print(split_check(40.45, 8))

total = float(input("What is total? "))
number_of_people = int(input("How many people? "))
amount_due = split_check(total, number_of_people)
print("Each person owes ${}".format(amount_due))