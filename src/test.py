from google.cloud.sql.connector import Connector
import sqlalchemy
import pymysql
import sys
# initialize Connector object
connector = Connector()

# function to return the database connection
def getconn() -> pymysql.connections.Connection:
    conn: pymysql.connections.Connection = connector.connect(
        "food-waar:australia-southeast2:foodwar-sql",
        "pymysql",
        user="root",
        password="root",
        db="foodwar"
    )
    return conn

# create connection pool
pool = sqlalchemy.create_engine(
    "mysql+pymysql://",
    creator=getconn,
)
insert_stmt = sqlalchemy.text(
    "INSERT INTO my_table (id, title) VALUES (:id, :title)",
)

insert_stmt2 = sqlalchemy.text(
    "INSERT INTO my_table (id, title) VALUES ('1','Book One');",
)

create_table = sqlalchemy.text(
    "CREATE TABLE my_table (id char PRIMARY KEY,title varchar(255));",
)

def Drop(db_conn,table):
    db_conn.execute(sqlalchemy.text(f'DROP TABLE {table}'))

with pool.connect() as db_conn:
    #Drop(db_conn,'my_table')
    #db_conn.execute(create_table)
    #db_conn.execute(insert_stmt2)
    #db_conn.commit()
    # insert into database
    #db_conn.execute(insert_stmt, parameters={"id": "book1", "title": "Book One"})
    # query database
    cmd = sys.argv[1]
    if (cmd.split(' ')[0] == "SELECT"):
        result = db_conn.execute(sqlalchemy.text(cmd)).fetchall()
    else:
        db_conn.execute(sqlalchemy.text(cmd))
        result = db_conn.execute(sqlalchemy.text("SELECT * from my_table")).fetchall()
    db_conn.commit()

    # Do something with the results
    print(result)
    sys.stdout.flush()
