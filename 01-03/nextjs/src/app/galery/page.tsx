import { Container } from "@components";

export const metadata = {
  title: "Galery",
};
export default function galery() {
  return (
    <Container>
      <div className="min-h-screen flex flex-1 justify-center items-center">
        <h1 className="text-6xl font-bold">Gallery</h1>
      </div>
    </Container>
  );
}
