from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
 return "Hello World from Python Flask Web Framework!"

@app.route("/about-us")
def about_us():
 print("About Us route accessed")
 return "We are here to serve you!"

@app.route("/hello/<Tosin>/")
def hello(Tosin):
    print("Thank Jesus Christ")
    return "Hello {}, greetings from Flask Framework!".format(Tosin)

if __name__ == "__main__":
    app.run(port=8080)