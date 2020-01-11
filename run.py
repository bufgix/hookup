from hookup import start_server, db

if __name__ == '__main__':
    db.create_all()
    start_server()
    