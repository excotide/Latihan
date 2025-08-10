import MyButton from "./components/MyButton"
import Card from "./components/Card"

const App = () => {
  const pencet = () => {
    alert("tombol dipencet njir")
  }

  return (
    <div className="flex flex-col justify-center h-screen gap-7 items-center">
      <div className="img">
        <img src="https://storage.googleapis.com/fastwork-static/46941020-39ea-4251-aee7-f90f80d51bf5.jpg" alt="gambar" className="max-h-42 rounded-2xl" />
      </div>
      <div className="flex gap-5">
        <Card title="Card 1" description="lorem"/>
        <Card title="Card 2" description="lorem"/>
      </div>
      <MyButton text={"TEKAN"} onClick={pencet}/>
    </div>
  )
}

export default App;
