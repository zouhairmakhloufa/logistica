import { useDropzone } from "react-dropzone";
import { Button } from "antd";

export default function DropZone(props: any) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file: any) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <Button type="dashed" className="coloricon">
          +
        </Button>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}
