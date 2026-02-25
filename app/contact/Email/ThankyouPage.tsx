import {
  Html,
  Body,
  Container,
  Heading,
  Text,
  Button,
} from "@react-email/components";

type Props = {
  name: string;
};

export default function ThankYou({ name }: Props) {
  return (
    <Html>
      <Body style={{ background: "#0f0f0f", fontFamily: "Arial" }}>
        <Container
          style={{
            padding: "40px",
            background: "#111",
            color: "#fff",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <Heading>Thank You, {name}! 🙌</Heading>

          <Text>
            I really appreciate you reaching out.
            <br />
            Your message has been received.
          </Text>

          <Text>I will review your request and get back to you shortly.</Text>

          <Button
            href="https://patelfarhan.com"
            style={{
              background: "#facc15",
              color: "#000",
              padding: "12px 20px",
              borderRadius: "8px",
              marginTop: "20px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Visit My Portfolio
          </Button>

          <Text style={{ marginTop: "30px", fontSize: "12px", opacity: 0.7 }}>
            — Farhan Patel
            <br />
            Full Stack Developer
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
