from flask import Flask, request, jsonify
import requests

app = Flask(_name_)

@app.route('/', methods=['GET'])
def get_weather():
    city = request.args.get('city')
    
    url = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather"
    headers = {
        'X-RapidAPI-Key': '0d178d0593mshd97d16a1693dfe2p144beejsnddc0f97dd32a',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
    params = {'city': city}

    print('params')

    response = requests.get(url, headers=headers, params=params)

    if response.status_code == 200:
        data = response.json()
        return jsonify(data)
    else:
        return jsonify({'error': f"Error: {response.status_code}"}), 500

if _name_ == '_main_':
    app.run(debug=True)