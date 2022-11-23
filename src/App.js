import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import PDFContent from './PDFContent';
import html2canvas from 'html2canvas';

function App() {
  const [image, setImage] = useState(null);
  const generateImage = () => {
    const ad = document.getElementById("imageCanvas");
    html2canvas(ad, { logging: true, letterRendering: 1, useCORS: true }).then(canvas => {
      const imgData = canvas.toDataURL('img/png');
      setImage(imgData)
    })
  }
  return (
    <div className="App">
      <header className='font-nunito tracking-wide p-4 bg-gradient-to-r from-purple-800 via-purple-500 to-pink-700 text-2xl text-white font-bold'>This is the Playground for Testing out Libraries</header>
      <button onClick={generateImage} className="font-nunito tracking-wide p-4 bg-gradient-to-r from-purple-800 via-purple-500 to-pink-700 text-2xl text-white font-bold">Generate Image</button>
      <div className='w-full' id='imageCanvas'>
        <PDFContent /> 
      </div>

      <p class="text-center">Generated Image</p>
      <div id="viewCanvas" className='p-8 mt-3'>
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default App;
