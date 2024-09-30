from flask import Flask, render_template, request, jsonify # type: ignore

app = Flask(__name__)

# Home route
@app.route('/')
def home():
    return render_template('index.html')

# Handle ticket booking submission
@app.route('/book', methods=['POST'])
def book_ticket():
    movie = request.form['movie']
    date = request.form['date']
    seats = request.form['seats']
    # Process booking logic
    return jsonify({'status': 'success', 'message': 'Ticket booked successfully!'})

# Handle contact form submission
@app.route('/contact', methods=['POST'])
def contact():
    name = request.form['name']
    email = request.form['email']
    # Process contact form logic
    return jsonify({'status': 'success', 'message': 'Message sent successfully!'})

if __name__ == "__main__":
    app.run(debug=True)
