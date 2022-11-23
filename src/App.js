import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import PDFContent from './PDFContent';
import html2canvas from 'html2canvas';
import { FaFilePdf, FaImage } from 'react-icons/fa';
import jsPDF from 'jspdf';

function App() {
  const [image, setImage] = useState(null);
  const generateImage = () => {
    const ad = document.getElementById("imageCanvas");
    html2canvas(ad, { logging: true, letterRendering: 1, useCORS: true }).then(canvas => {
      const imgData = canvas.toDataURL('img/png');
      console.log(imgData);
      setImage(imgData)
    })
  }
  const download = () => {
    generateImage();
    const download = document.getElementById("download");
    const img = image.replace("image/png", "image/octet-stream");
    //download.href = img;
    //download.download = 
    download.setAttribute("href", img);
  }

  const exportPDF = () => {
    generateImage()
    const imgWidth = 208;
    const imgHeight = 500 * imgWidth / 700;
    const pdf = new jsPDF('p', 'mm', 'a4');
    pdf.addImage(image, 'PNG', '0', '0', imgWidth, imgHeight);
    pdf.save("advert.pdf");
  }
  return (
    <div className="App">
      <header className='font-nunito tracking-wide p-4 bg-gradient-to-r from-purple-800 via-purple-500 to-pink-700 text-2xl text-white font-bold'>This is the Playground for Testing out Libraries</header>
      <button onClick={generateImage} className="font-nunito tracking-wide p-4 bg-gradient-to-r from-purple-800 via-purple-500 to-pink-700 text-2xl text-white font-bold">Generate Image</button>
      <div className='w-full' id='imageCanvas'>
        <PDFContent /> 
      </div>

      <p class="text-center">Generated Image</p>
      <a id="download" download={"advert.png"} >
        <button type='button' onClick={download} className="bg-blue-700 rounded-md text-white font-mavin  my-2 p-2" ><FaImage className="text-center" /></button>
      </a>
      <button className='bg-red-700 text-white font-nunito p-2 rounded-md mx-4' onClick={exportPDF}><FaFilePdf /></button>
      <div id="viewCanvas" className='p-8 mt-3'>
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default App;
