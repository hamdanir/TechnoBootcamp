import { Container } from "@components";

export const metadata = {
  title: "Users",
};
export default function page() {
  return (
    <Container>
      <div className="min-h-screen flex flex-1 justify-center items-center">
        <h1 className="text-6xl font-bold">Users</h1>
      </div>
    </Container>
  );
}
