import pickle
import pandas as pd
from flask import Flask, request, jsonify

# Load the saved model
with open("random_forest_model.pkl", "rb") as f:
    model = pickle.load(f)

# Load label encoders
with open("label_encoders.pkl", "rb") as f:
    label_encoders = pickle.load(f)

# Create Flask server
app = Flask(__name__)

# Endpoint to predict
@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    new_data = pd.DataFrame(data)
    
    # Encode categorical variables
    for column in new_data.select_dtypes(include=['object']).columns:
        new_data[column] = label_encoders[column].transform(new_data[column])

    # Make prediction
    prediction = model.predict(new_data)
    predicted_scheme = label_encoders["SCHEME"].inverse_transform(prediction)
    return jsonify({"predicted_scheme": predicted_scheme.tolist()})

if __name__ == '__main__':
    app.run(port=8000, debug=True)
