// CreateUserModal.jsx
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { BiAddToQueue } from 'react-icons/bi';
import './createUserModal.css'; // Custom CSS file

const CreateUserModal = ({setUsers}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({
    name: '',
    graduatingYear: '',
    email: '',
    linkedin: '',
  });

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch( '/members', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error);
      }

      alert('User created successfully!');
      handleClose();
      setUsers((prevUsers) => [...prevUsers, data]);

      setInputs({
        name: '',
        graduatingYear: '',
        email: '',
        linkedin: '',
      });
    } catch (error) {
      alert(`An error occurred: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
        
      <Button variant="primary" onClick={handleOpen}>
        <BiAddToQueue size={20} />
      </Button>

      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New User</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleCreateUser}>
          <Modal.Body>
            <Form.Group controlId="name">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="John Doe"
                value={inputs.name}
                onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group controlId="graduatingYear" className="mt-3">
              <Form.Label>Graduating Year</Form.Label>
              <Form.Control
                type="text"
                placeholder="2024"
                value={inputs.graduatingYear}
                onChange={(e) => setInputs({ ...inputs, graduatingYear: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group controlId="email" className="mt-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="john.doe@example.com"
                value={inputs.email}
                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                required
              />
            </Form.Group>

            <Form.Group controlId="linkedin" className="mt-3">
              <Form.Label>LinkedIn Profile</Form.Label>
              <Form.Control
                type="url"
                placeholder="https://linkedin.com/in/johndoe"
                value={inputs.linkedin}
                onChange={(e) => setInputs({ ...inputs, linkedin: e.target.value })}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" disabled={isLoading}>
              {isLoading ? 'Creating...' : 'Create User'}
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};


export default CreateUserModal