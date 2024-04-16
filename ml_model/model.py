import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report

# Load dataset
data = pd.read_csv("D:\programming\schemes\ml_model\SchemeDataset.csv")

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

# Predict on test set
y_pred = rf_classifier.predict(X_test)

# Evaluate the model
print(classification_report(y_test, y_pred))

# Example usage:
# Now, you can use this trained model to predict the scheme for new data.
# For example:
new_data = pd.DataFrame({
    "GENDER": ["Male"],
    "AGE": [35],
    "LOCATION": ["Urban"],
    "CASTE": ["OBC"],
    "OCCUPATION": ["Employee"],
    "INCOME": [120000]
})

# Encode categorical variables
for column in new_data.select_dtypes(include=['object']).columns:
    new_data[column] = label_encoders[column].transform(new_data[column])

# Make prediction
prediction = rf_classifier.predict(new_data)
predicted_scheme = label_encoders["SCHEME"].inverse_transform(prediction)
print("Predicted Scheme:", predicted_scheme)
