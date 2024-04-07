from datasets import load_dataset
import random

if __name__ == '__main__':
    
        data = load_dataset("Fsoft-AIC/the-vault-function", split_set=["test"], trust_remote_code=True, cache_dir='./cache')
        data = data['test']
        data = data.shuffle()
        #f = open(language+'.txt', 'w')

        lang = input("input language: ")

        for index, sample in enumerate(data):
            if sample['language'] == lang:
                #print(sample['code'].split('\n'))
                print(sample['code'])
                exit()
