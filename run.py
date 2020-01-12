from hookup import start_server, db, cli

if __name__ == '__main__':
    db.create_all()
    cli.main()
    start_server()
    