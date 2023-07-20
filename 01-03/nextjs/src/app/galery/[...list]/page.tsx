import React from "react";

export default function galeryDetail({ params }: { params: { list: string } }) {
  return (
    <div>
      <h1>ini galery : {params.list}</h1>
    </div>
  );
}
