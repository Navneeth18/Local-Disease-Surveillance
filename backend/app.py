from flask import Flask, request, jsonify
import joblib

app = Flask(__name__)

# Load the trained model and vectorizer
model = joblib.load('model/disease_model.pkl')
vectorizer = joblib.load('model/vectorizer.pkl')

@app.route('/')
def home():
    return jsonify({"message": "Disease Prediction API is running"}), 200

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    symptoms = data.get('symptoms', '')

    if not symptoms:
        return jsonify({'error': 'No symptoms provided'}), 400

    try:
        # Preprocess the symptoms using the vectorizer
        symptoms_vectorized = vectorizer.transform([symptoms])
        
        # Predict the disease
        prediction = model.predict(symptoms_vectorized)[0]

        return jsonify({'disease': prediction}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
