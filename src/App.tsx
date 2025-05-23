import {Button} from "@/components/ui/button.tsx";

function App() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">ConnectPlay 🚀</h1>
            <p>Seu projeto está rodando!</p>
            <div className="flex flex-col items-center justify-center min-h-svh">
                <Button>Click me</Button>
            </div>
        </div>
    );
}

export default App;
