export default function App() {

    async function callAPI() {
        try {
            const response = await fetch("/api");
            const data = await response.json();
            console.log(data);
        } catch {
            console.error("Error on fetch API");
        }
    }

return (
    <>
        <div style={{color: "black"}}>Sup</div>
        <button onClick={() => callAPI()}>test</button>
    </>
)
}
