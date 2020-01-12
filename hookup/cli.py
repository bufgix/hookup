from hookup import db
from hookup.models import Page, User
import getpass

DEFAULT_SITES = ["facebook", "twitter", "netflix", "github"]

def create_superuser():
    username = input("Username: ")
    password = getpass.getpass("password")
    user = User(username=username, password=password)
    user.save()

def register_sites(sites=DEFAULT_SITES):
    user = User.query.first()
    for site in sites:
        page = Page(name=site, source=f"{site}.html", stock=True)
        user.pages.append(page)
        user.save()

def main():
    db.create_all()
    exists = User.query.first()
    if not exists:
        create_superuser()
        register_sites()
    print("[+] Done")

if __name__ == '__main__':
    main()

