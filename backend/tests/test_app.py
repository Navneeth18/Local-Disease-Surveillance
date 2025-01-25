import unittest
from app import app

class TestApp(unittest.TestCase):
    def setUp(self):
        self.app = app.test_client()
        self.app.testing = True

    def test_home(self):
        response = self.app.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertIn('Welcome to the Disease Prediction API', response.data.decode())

    def test_predict_valid(self):
        response = self.app.post('/predict', json={'symptoms': 'fever, dry cough'})
        self.assertEqual(response.status_code, 200)
        self.assertIn('disease', response.json)

    def test_predict_invalid(self):
        response = self.app.post('/predict', json={})
        self.assertEqual(response.status_code, 400)
        self.assertIn('error', response.json)

if __name__ == '__main__':
    unittest.main()
