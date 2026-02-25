import { Html, Body, Container, Heading, Text, Section } from '@react-email/components';

type Props = {
  name: string;
  email: string;
  message: string;
  lookingFor: string;
  country: string;
  city: string;
};

export default function Welcome({ name, email, message, lookingFor, country, city }: Props) {
  return (
    <Html>
      <Body style={{ background: '#0f0f0f', color: '#fff', fontFamily: 'Arial' }}>
        <Container style={{ padding: '30px', background: '#111', borderRadius: '10px' }}>
          <Heading>📩 New Contact Form Submission {name}</Heading>

          <Section>
            <Text>
              <strong>Name:</strong> {name}
            </Text>
            <Text>
              <strong>Email:</strong> {email}
            </Text>
            <Text>
              <strong>Looking For:</strong> {lookingFor}
            </Text>
            <Text>
              <strong>Location:</strong> {city}, {country}
            </Text>
          </Section>

          <Section style={{ marginTop: '20px' }}>
            <Text>
              <strong>Message:</strong>
            </Text>
            <Text>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
