from app import app
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy(app)


class Artist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=True)

    def __repr__(self):
        return '<Artist %r>' % self.name
