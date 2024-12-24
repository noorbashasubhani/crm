import React, { useEffect, useRef, useState } from "react";
import html2pdf from "html2pdf.js";

const Invoice = () => {
  const invoiceRef = useRef();
  const [imageLoaded, setImageLoaded] = useState(false); // Track image loading

  // Handle image load
  const onImageLoad = () => {
    setImageLoaded(true); // Image has been loaded successfully
  };

  // Generate the PDF once the image is loaded
  useEffect(() => {
    if (imageLoaded) {
      const options = {
        filename: "GST_Invoice.pdf",
        html2canvas: {
          scale: 2, // Adjust scale for better quality
          useCORS: true, // Enable CORS to load external images
          logging: true, // Enable logging
          backgroundColor: "transparent", // Ensure transparent background
        },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      // Trigger PDF generation once image is loaded
      const generatePDF = () => {
        html2pdf()
          .from(invoiceRef.current) // Capture content from invoiceRef
          .set(options) // Set options
          .toPdf() // Generate PDF
          .get("pdf")
          .then((pdf) => {
            pdf.save("GST_Invoice.pdf"); // Save PDF with specific filename
          })
          .catch((err) => console.error("Error generating PDF", err));
      };

      generatePDF(); // Generate PDF once image is loaded
    }
  }, [imageLoaded]); // Re-run when imageLoaded changes

  return (
    <div>
      <h1>GST Invoice</h1>

      <div ref={invoiceRef} style={{ padding: "20px", fontFamily: "Arial, sans-serif", border: "2px solid gray", borderTop: "15px solid green" }}>
        <h5>GST Invoice</h5>
        <p><strong>Issued On:</strong> 09 Dec 2024</p>

        {/* Actor's Image */}
        <div>
          <img
            src="http://localhost:5000/uploadsfly/1733985064058.png" // External image URL
            alt="Actor"
            height="450"
            style={{
              maxWidth: "100%",
              backgroundColor: "transparent", // Ensure transparent background
              display: "block", // Prevents white space
            }}
            onLoad={onImageLoad} // Trigger on image load
          />
          <img
            src="http://localhost:5000/uploadsfly/1733985064058.png" // External image URL
            alt="Actor"
            height="450"
            style={{
              maxWidth: "100%",
              backgroundColor: "transparent", // Ensure transparent background
              display: "block", // Prevents white space
            }}
            onLoad={onImageLoad} // Trigger on image load
          />
          <img
            src="http://localhost:5000/uploadsfly/1733985064058.png" // External image URL
            alt="Actor"
            height="450"
            style={{
              maxWidth: "100%",
              backgroundColor: "transparent", // Ensure transparent background
              display: "block", // Prevents white space
            }}
            onLoad={onImageLoad} // Trigger on image load
          />
          <img
            src="http://localhost:5000/uploadsfly/1733985064058.png" // External image URL
            alt="Actor"
            height="450"
            style={{
              maxWidth: "100%",
              backgroundColor: "transparent", // Ensure transparent background
              display: "block", // Prevents white space
            }}
            onLoad={onImageLoad} // Trigger on image load
          />
          <img
            src="http://localhost:5000/uploadsfly/1733985064058.png" // External image URL
            alt="Actor"
            height="450"
            style={{
              maxWidth: "100%",
              backgroundColor: "transparent", // Ensure transparent background
              display: "block", // Prevents white space
            }}
            onLoad={onImageLoad} // Trigger on image load
          />
          <img
            src="http://localhost:5000/uploadsfly/1733985064058.png" // External image URL
            alt="Actor"
            height="450"
            style={{
              maxWidth: "100%",
              backgroundColor: "transparent", // Ensure transparent background
              display: "block", // Prevents white space
            }}
            onLoad={onImageLoad} // Trigger on image load
          />
          <img
            src="http://localhost:5000/uploadsfly/1733985064058.png" // External image URL
            alt="Actor"
            height="450"
            style={{
              maxWidth: "100%",
              backgroundColor: "transparent", // Ensure transparent background
              display: "block", // Prevents white space
            }}
            onLoad={onImageLoad} // Trigger on image load
          />
          <img
            src="http://localhost:5000/uploadsfly/1733985064058.png" // External image URL
            alt="Actor"
            height="450"
            style={{
              maxWidth: "100%",
              backgroundColor: "transparent", // Ensure transparent background
              display: "block", // Prevents white space
            }}
            onLoad={onImageLoad} // Trigger on image load
          />
          <img
            src="http://localhost:5000/uploadsfly/1733985064058.png" // External image URL
            alt="Actor"
            height="450"
            style={{
              maxWidth: "100%",
              backgroundColor: "transparent", // Ensure transparent background
              display: "block", // Prevents white space
            }}
            onLoad={onImageLoad} // Trigger on image load
          />
          <img
            src="http://localhost:5000/uploadsfly/1733985064058.png" // External image URL
            alt="Actor"
            height="450"
            style={{
              maxWidth: "100%",
              backgroundColor: "transparent", // Ensure transparent background
              display: "block", // Prevents white space
            }}
            onLoad={onImageLoad} // Trigger on image load
          />
          <img
            src="http://localhost:5000/uploadsfly/1733985064058.png" // External image URL
            alt="Actor"
            height="450"
            style={{
              maxWidth: "100%",
              backgroundColor: "transparent", // Ensure transparent background
              display: "block", // Prevents white space
            }}
            onLoad={onImageLoad} // Trigger on image load
          />
          <img
            src="http://localhost:5000/uploadsfly/1733985064058.png" // External image URL
            alt="Actor"
            height="450"
            style={{
              maxWidth: "100%",
              backgroundColor: "transparent", // Ensure transparent background
              display: "block", // Prevents white space
            }}
            onLoad={onImageLoad} // Trigger on image load
          />
          
        </div>

        {/* Invoice Details */}
        <div>
          <h5>Registered Office:</h5>
          <p>
            <strong>Gogaga Holidays Private Limited</strong>
            <br />
            406 & 408, 4th Floor, Block-2, Whitehouse,
            <br />
            Begumpet-500016, Hyderabad, Telangana
            <br />
            Landline: 040 40206965
            <br />
            Mail: <a href="mailto:support@gogagaholidays.in">support@gogagaholidays.in</a>
            <br />
            Web: <a href="https://www.gogagaholidays.com">www.gogagaholidays.com</a>
            <br />
            GST Number: <strong>36AAGCG1943B2ZY</strong>
          </p>
        </div>

        <div>
          <h5>Receipt To:</h5>
          <p>
            <strong>Mr/Mrs:</strong> S Nipun Kumar Reddy
            <br />
            <strong>Phone Number:</strong> 7337496685
            <br />
            <strong>Location:</strong> Hyderabad
            <br />
            <strong>Gogaga Ref No#:</strong> GHRN29783
            <br />
            <strong>Invoice No#:</strong> 113
          </p>
        </div>

        <div>
          <h5>Cost Breakdown:</h5>
          <table style={{ width: "100%", border: "1px solid #000", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid #000", padding: "5px" }}>Description</th>
                <th style={{ border: "1px solid #000", padding: "5px" }}>Total Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: "1px solid #000", padding: "5px" }}>Land Package Cost Less GST</td>
                <td style={{ border: "1px solid #000", padding: "5px" }}>INR 172,053.34</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #000", padding: "5px" }}>GST 5%</td>
                <td style={{ border: "1px solid #000", padding: "5px" }}>INR 8,602.65</td>
              </tr>
              <tr>
                <td style={{ border: "1px solid #000", padding: "5px" }}>Total Package Cost Incl. GST</td>
                <td style={{ border: "1px solid #000", padding: "5px" }}>INR 180,656.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
