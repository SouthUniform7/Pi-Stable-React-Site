import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import Resume from './Resume.pdf'



const About = () => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
    setPageNumber(1)
  }

  return (
  <div>
    <Document file={Resume} onLoadSuccess={onDocumentLoadSuccess}>
      <Page height="1000" pageNumber={pageNumber} />
    </Document>
    <p> Page {pageNumber} of {numPages}</p>
      <h4>Version 1.0.1</h4>
      <Link to='/'>Go Back</Link>
  </div>
  );
};

export default About;
