import React, { useState } from 'react';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Text , Box , Container, Input } from "@nextui-org/react"


function Checkout() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle delivery details submission logic here
    // Validate input, send data to server, etc.

    console.log('Delivery details:', { name, address, phone, email });

    setName('');
    setAddress('');
    setPhone('');
    setEmail('');
  };

  return (
    <Container css={{ maxWidth: '480px' }}>
      <Box css={{ padding: '$12' }}>
        <Text h2 css={{ marginBottom: '$6' }}>Delivery Details</Text>
        <form onSubmit={handleSubmit}>
          <Input
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            css={{ marginBottom: '$4' }}
          />
          <Input
            label="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            css={{ marginBottom: '$4' }}
          />
          <Input
            label="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            css={{ marginBottom: '$4' }}
            type="tel"
          />
          <Input
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            css={{ marginBottom: '$4' }}
            type="email"
          />
          <Button type="submit" css={{ marginTop: '$4' }}>
            Proceed to Payment
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Checkout;
