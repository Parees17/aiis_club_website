from app import db

class Member(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    grad_year = db.Column(db.Integer, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    linkedin = db.Column(db.String(200), nullable=True)

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "gradYear": self.grad_year,
            "email": self.email,
            "linkedin": self.linkedin,
        }
