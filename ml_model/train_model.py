import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
import pickle

# Load dataset
data = pd.read_csv("D:/programming/schemes/ml_model/SchemeDataset.csv")

# Handle missing values if any
data.dropna(inplace=True)

# Encode categorical variables
label_encoders = {}
for column in data.select_dtypes(include=['object']).columns:
    label_encoders[column] = LabelEncoder()
    data[column] = label_encoders[column].fit_transform(data[column])

# Split dataset into features and target variable
X = data.drop(columns=["SCHEME"])
y = data["SCHEME"]

# Split dataset into train and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize Random Forest classifier
rf_classifier = RandomForestClassifier(n_estimators=100, random_state=42)

# Train the classifier
rf_classifier.fit(X_train, y_train)

# Save the trained model to a .pkl file
with open("random_forest_model.pkl", "wb") as f:
    pickle.dump(rf_classifier, f)

# Save the label encoders
with open("label_encoders.pkl", "wb") as f:
    pickle.dump(label_encoders, f)
