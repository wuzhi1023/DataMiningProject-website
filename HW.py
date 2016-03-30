import sklearn
import pickle
import numpy
import sys, json


clf = pickle.load(open('clf.pkl', 'r'))
p = clf.predict(pickle.load(open('test_X.pkl', 'r')))
output = sum(p == pickle.load(open('test_y.pkl', 'r'))) / 1000.

print output