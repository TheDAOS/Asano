import React from "react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        margin: "0",
        padding: "0",
        overflow: "hidden",
        position: "fixed",
        top: 0,
        left: 0,
      }}
      className="bg-ui-background h-screen w-screen overflow-hidden"
    >
      {children}
    </div>
  );
}
