import React from "react";
import Container from "@components/common/Container";
import Badge from "@components/common/Badge";

function AboutUs() {
  return (
    <section>
      <Container className="flex flex-col items-center justify-center gap-4 py-20 text-center" style={{ backgroundImage: "url('/banner5.png')" }}>
        <Badge>Lucentra RCM Solutions</Badge>
      </Container>
    </section>
  );
}

export default AboutUs;
