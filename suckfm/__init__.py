from flask import Flask, render_template, url_for

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('home.html')


@app.route('/suckfest/')
def suckfest():
    return render_template('suckfest.html')


@app.route('/artists/')
def artists():
    return render_template('artists.html')


@app.route('/events/')
def events():
    return render_template('events.html')


@app.route('/about/')
def about():
    return render_template('about.html')


@app.route('/contact/')
def contact():
    return render_template('contact.html')

@app.route('/recieved/', methods=['GET','POST'])
def recieved():
    return render_template('recieved.php')
