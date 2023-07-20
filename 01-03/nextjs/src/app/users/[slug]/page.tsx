import React from "react";

export default function UserDetail({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1>ini user : {params.slug}</h1>
    </div>
  );
}
