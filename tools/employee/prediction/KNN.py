# Libraries
import pandas as pd
import pickle
import sys
from pathlib import Path
import random

input = []
pathString = str(Path(__file__).parent.resolve())
for v in sys.argv[0:]:
    input.append(v)
classifier = pickle.load(open(pathString+'/knn.sav', 'rb'))
with open(pathString+'/outfile', 'rb') as fp:
    dudoan = pickle.load(fp)
df_dudoan = pd.DataFrame(columns=dudoan)
a = ''
for i in range(len(input)):
    if (input[i] in dudoan) == True:
        a += input[i] + ','
a = a[:-1]
list_1 = a.split()
df_input = pd.DataFrame(list_1, columns=['Require'])
df_input2 = df_input['Require'].str.get_dummies(sep=',')
df_dudoan = df_dudoan._append(df_input2)
df_dudoan = df_dudoan.fillna(0)
results = []  # mảng lưu kết quả dự đoán job
pred = classifier.predict(df_dudoan)  # dự đoán job chính
results.append(pred)

# dự đoán những job liên quan theo random skill
for i in range(len(input)-1):
    df_dudoan = pd.DataFrame(columns=dudoan)
    rand = random.sample(input, len(input)-1)
    b = ''
    for i in range(len(rand)):
        if (rand[i] in dudoan) == True:
            b += rand[i] + ','
    b = b[:-1]
    list_2 = b.split()
    df_inputA = pd.DataFrame(list_2, columns=['Require'])
    df_input2A = df_inputA['Require'].str.get_dummies(sep=',')
    df_dudoanA = df_dudoan._append(df_input2A)
    df_dudoanA = df_dudoanA.fillna(0)
    predA = classifier.predict(df_dudoanA)
    results.append(predA)

    # lọc những job trủng
resultsFinal = []
for i in results:
    if i not in resultsFinal:
        resultsFinal.append(i)

for i in resultsFinal:
    print(i)
