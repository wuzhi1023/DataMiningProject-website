import sklearn
import pickle
import numpy
import sys, json

Input = input()
clf = pickle.load(open('model.pkl', 'rb'))
npInput = numpy.array(Input).reshape((1, len(Input)))
output = clf.predict(npInput)

print output[0]