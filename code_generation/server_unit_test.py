from server import CodeGeneration

if __name__ == "__main__":
    test = CodeGeneration(input("Input language desired (e.g. 'python'): "))
    num = int(input("Input number of test samples to generate: "))
    for i in range(num):
        print(test.code_gen())
        print()
