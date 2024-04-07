from datasets import load_dataset
import random

if __name__ == '__main__':
    
        data = load_dataset("Fsoft-AIC/the-vault-function", split_set=["test"], trust_remote_code=True, cache_dir='./cache')
        data = data['test']
        data = data.shuffle()

        for language in ['Java', 'JavaScript', 'Python', 'Ruby', 'Rust', 'Golang', 'C#', 'C++', 'C', 'PHP']:
            f = open('./text_files/' + language +'.txt', 'w') 
            counter = 10
            for index, sample in enumerate(data):
                if counter == 0:
                    break
                if sample['language'] == language:
                    #print(sample['code'].split('\n'))
                    try:
                        f.write(sample['code'])
                        f.write('\r\n')
                    except:
                        counter += 1
                    counter -= 1

                
