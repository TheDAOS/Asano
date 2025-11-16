import React from "react";

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div
            style={{
                "width": "100%",
                "height": "100%",
                "margin": "0",
                "padding": "0",
                "overflow": "hidden",
                "position": "fixed",
                "top": 0,
                "left": 0,
            }}
            className="h-screen w-screen overflow-hidden bg-linear-150 from-lime-300/60 via-lime-300/30 to-lime-300/10">
            {children}
        </div>
    );
}