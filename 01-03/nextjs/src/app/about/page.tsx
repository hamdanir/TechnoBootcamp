import { Container } from "@components";

export const metadata = {
  title: "About Us",
};

export default function aboutUs() {
  return (
    <Container>
      <div className="min-h-screen flex flex-1 justify-center items-center">
        <h1 className="text-6xl font-bold">About Us</h1>
      </div>
    </Container>
  );
}
