import { useState } from 'react';
import '../components/DragNDrop.css'
import axios from 'axios';


const DragNDrop = () => {

  /* testing */
// const [file,setFile] = useState(null);

const handleFileChange = async (e) => {
  const file =  e.target.files[0]
  if (!file) {console.log("no file"); }

  const formData = new FormData();
  formData.append('excelFile', file);   // append the file
  try {

    const response = await axios.post('http://localhost:3000', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });
     console.log(response.data);
  } catch (err) {
    console.log('Error uploading file')
  } 
};




  return (
    <div>
    <div className="upload-section-outer">
      <div className="upload-section-title">Upload Excel File</div>
      <div className="upload-section-desc">
        Upload your Excel file (.xls, .xlsx) to start creating visualizations
      </div>
      <div className="upload-box-outer">
        <form id="upload-form" encType="multipart/form-data">
          <label htmlFor="file-upload" className="upload-box-inner" id="drop-area">
            <span className="upload-icon">
              {/* Upload icon */}
              <svg fill="none" width={54} height={54} stroke="#9299ab" strokeWidth={2} viewBox="0 0 24 24"><path d="M12 17V3m0 0l-4 4m4-4 4 4" strokeLinecap="round" strokeLinejoin="round" /><rect x={3} y={17} width={18} height={4} rx={2} /></svg>
            </span>
            <span className="upload-instruction">
              Drag &amp; drop an Excel file here, or click to select
            </span>
            <span className="upload-support">
              Supports .xls and .xlsx files
            </span>
            {/* here to upload */}
            <input type="file" id="file-upload" onChange={handleFileChange} accept=".xls,.xlsx" style={{"opacity":"0","position":"absolute","inset":"0","width":"100%","height":"100%","cursor":"pointer"}} />
          </label>
        </form>
      </div>
      </div>
    </div>
   
    
  )
}

export default DragNDrop