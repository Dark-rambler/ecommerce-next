import { ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => {
    return (
        <div className="container mx-auto h-screen  px-4">
            {children}
        </div>
    );
    }