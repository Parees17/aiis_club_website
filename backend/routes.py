
from flask_cors import CORS
from app import app, db
from flask import Flask, request, jsonify
from models import Member

# Get all members
@app.route("/api/members", methods=["GET"])
def get_members():
    members = Member.query.all()
    result = [member.to_json() for member in members]
    return jsonify(result)

# Create a new member
@app.route("/api/members", methods=["POST"])
def create_member():
    try:
        data = request.json

        # Validations
        required_fields = ["name", "gradYear", "email", "linkedin"]
        for field in required_fields:
            if field not in data or not data.get(field):
                return jsonify({"error": f'Missing required field: {field}'}), 400

        name = data.get("name")
        grad_year = data.get("gradYear")
        email = data.get("email")
        linkedin = data.get("linkedin")

        new_member = Member(name=name, grad_year=grad_year, email=email, linkedin=linkedin)

        db.session.add(new_member)
        db.session.commit()

        return jsonify(new_member.to_json()), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

# Delete a member
@app.route("/api/members/<int:id>", methods=["DELETE"])
def delete_member(id):
    try:
        member = Member.query.get(id)
        if member is None:
            return jsonify({"error": "Member not found"}), 404

        db.session.delete(member)
        db.session.commit()
        return jsonify({"msg": "Member deleted"}), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

# Update a member profile
@app.route("/api/members/<int:id>", methods=["PATCH"])
def update_member(id):
    try:
        member = Member.query.get(id)
        if member is None:
            return jsonify({"error": "Member not found"}), 404

        data = request.json

        member.name = data.get("name", member.name)
        member.grad_year = data.get("gradYear", member.grad_year)
        member.email = data.get("email", member.email)
        member.linkedin = data.get("linkedin", member.linkedin)

        db.session.commit()
        return jsonify(member.to_json()), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
