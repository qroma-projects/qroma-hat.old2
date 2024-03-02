import React, { useEffect, useState } from "react"
import { IComponentState } from "./ComponentState"
import { createDgsrImageFileBytes } from "./dgsr_file_bytes_factory"


export interface IDgsrFileManagerProps {
  componentState: IComponentState
}


export const DgsrFileManager = (props: IDgsrFileManagerProps) => {
  const [loading, setLoading] = useState(false);

  var [svgDownloadDataUrl, setSvgDownloadDataUrl] = useState("");
  var [dgsrDownloadDataUrl, setDgsrDownloadDataUrl] = useState("");

  const imageDataFileBytes = createDgsrImageFileBytes(props.componentState.grayscaleData);

  const fileNameRoot = "blob";

  useEffect(() => {
    const imageSvgText = props.componentState.svgImageText;
    const svgFileContents = new Blob([imageSvgText], { type: 'text/plain' });

    let svgReader = new FileReader();
    svgReader.readAsDataURL(svgFileContents);
    svgReader.onload = () => {
      const imageDataUrl = svgReader.result as string;
      setSvgDownloadDataUrl(imageDataUrl);
    };

    const imageDataFileBytes = createDgsrImageFileBytes(props.componentState.grayscaleData);
    const fileContents = new Blob([imageDataFileBytes], { type: 'application/octet-stream' });
    
    let dgsrReader = new FileReader();
    dgsrReader.readAsDataURL(fileContents);
    dgsrReader.onload = () => {
      const imageDataUrl = dgsrReader.result as string;
      setDgsrDownloadDataUrl(imageDataUrl);
    };

  }, [props.componentState.grayscaleData, props.componentState.svgImageText]);

  
  const handleDownloadSvgClick = () => {
  
    const fileName = fileNameRoot + ".svg";
    setLoading(true);

    const element = document.createElement("a");
    element.href= svgDownloadDataUrl;
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    
    setTimeout(() => {
      setLoading(false);
      document.body.removeChild(element);
    }, 2000);
  }

  const handleDownloadDgsrClick = () => {

    const fileName = fileNameRoot + ".dgsr";
    setLoading(true);

    const element = document.createElement("a");
    element.href= dgsrDownloadDataUrl;
    element.download = fileName;
    document.body.appendChild(element);
    element.click();

    setTimeout(() => {
      setLoading(false);
      document.body.removeChild(element);
    }, 2000);
  }


  return (
    <>
      <div>{imageDataFileBytes.length} bytes</div>
      <div>
        <button>Upload DGSR to Hat</button>
      </div>
      <div>
        <button disabled={loading} onClick={handleDownloadSvgClick}>
          {loading ? "Loading..." : "Download SVG to PC"}
        </button>
        {/* <button>Download DGSR to PC</button> */}
        <button disabled={loading} onClick={handleDownloadDgsrClick}>
          {loading ? "Loading..." : "Download DGSR to PC"}
        </button>
      </div>
    </>
  )
}