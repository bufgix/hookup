from hookup import db
from hookup.models import User

if __name__ == '__main__':
    db.create_all()
    exists = User.query.first()
    if not exists:
        user = User(username="bufgix", password="test123")
        db.session.add(user)
        db.session.commit()
    print("[+] Done")    