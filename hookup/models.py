from flask_login import UserMixin
from hookup import db, login_manager, app
import os
import json
import datetime


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


class User(db.Model, UserMixin):
    __tablename__ = "user"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), unique=True)
    password = db.Column(db.String(40))
    current_page = db.Column(db.Integer, default=0)
    pages = db.relationship('Page', backref="user", lazy=True)

    def save(self):
        db.session.add(self)
        db.session.commit()


class Page(db.Model):
    __tablename__ = "page"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), unique=True)
    source = db.Column(db.String)
    records = db.relationship("Record", backref="page", lazy=True)
    stock = db.Column(db.Boolean, default=False)
    person_id = db.Column(db.Integer, db.ForeignKey(
        'user.id'), nullable=False)

    def get_source_content(self):
        source_path = os.path.join(
            app.config['UPLOAD_FOLDER'], self.source)
        with open(source_path, "r", encoding="utf-8") as file:
            return file.read()

    def __repr__(self):
        return self.name


class Record(db.Model):
    __tablename__ = "record"

    id = db.Column(db.Integer, primary_key=True)
    _data = db.Column(db.String, default="No data")
    page_id = db.Column(db.Integer, db.ForeignKey(
        'page.id'), nullable=False)
    created_date = db.Column(db.DateTime, default=datetime.datetime.utcnow)

    @property
    def data(self):
        return json.loads(self._data)

    @data.setter
    def data(self, val):
        self._data = json.dumps(val)
