import csv

def detect_unique_values(csv_file, column_index):
    unique_values = set()
    with open(csv_file, 'r', newline='') as file:
        reader = csv.reader(file)
        for row in reader:
            try:
                value = row[column_index]
                unique_values.add(value)
            except IndexError:
                print("Index error: Row doesn't have expected number of columns.")
                continue
    return unique_values

def main():
    csv_file = 'SchemeDataset.csv'  # Replace 'data.csv' with your CSV file path
    column_index = 6  # Change to the index of the column you want to analyze (0-based index)
    
    unique_values = detect_unique_values(csv_file, column_index)
    
    print("Unique values in column {}: {}".format(column_index, unique_values))

if __name__ == "__main__":
    main()
